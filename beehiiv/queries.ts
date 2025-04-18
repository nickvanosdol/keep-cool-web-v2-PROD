'use server'

import type { FormState } from '@/components/subscribe'
import type { PostType } from './types/post'

const baseUrl = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}`
const headers = {
  Authorization: `Bearer ${process.env.BEEHIIV_API_TOKEN}`,
  'Content-Type': 'application/json',
}

export async function getSubscriberCount(
  estimatedCount: number,
): Promise<number> {
  const params = new URLSearchParams({
    expand: 'stats',
  })
  try {
    let res = await fetch(`${baseUrl}?${params}`, {
      method: 'GET',
      headers,
    })
    let formattedRes = await res.json()
    return formattedRes.data.stats.active_subscriptions
  } catch (err) {
    return estimatedCount
  }
}

export async function getFeaturedPosts(fallbackPosts: PostType[]) {
  const params = new URLSearchParams({
    order_by: 'publish_date',
    direction: 'desc',
    limit: '10',
    hidden_from_feed: 'false',
    status: 'confirmed',
    audience: 'all',
    content_tags: 'featured',
  })
  try {
    let res = await fetch(`${baseUrl}/posts?${params}`, {
      method: 'GET',
      headers,
    })
    let formattedRes = await res.json()
    // Next part filters for only articles with a publish date before current time (ie no drafts or scheduled posts)
    let publishedOnly = formattedRes.data.filter(
      (post: PostType) => post.publish_date < Date.now() / 1000,
    )
    // Next part pulls the id for each fetched post and performs a new fetch for that post and adds response to an array called 'postsArray'
    // This may seem redundant and stupid -> it is a work-around since Beehiiv's API is not great and won't display all of a post's content_tags (only shows the one filtered for)
    let postIds = publishedOnly.map((post: PostType) => post.id)
    let postsArray: PostType[] = []
    await Promise.all(
      postIds.map(async (postId: PostType) => {
        let res = await fetch(`${baseUrl}/posts/${postId}`, {
          method: 'GET',
          headers,
        })
        let formattedRes = await res.json()
        postsArray.push(formattedRes.data)
      }),
    )
    postsArray.sort((a, b) => b.publish_date - a.publish_date)
    return postsArray
  } catch (err) {
    return fallbackPosts
  }
}

export async function subscribeUser(prevState: FormState, formData: FormData) {
  const userEmail = formData.get('email')
  try {
    let res = await fetch(`${baseUrl}/subscriptions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: userEmail,
        reactivate_existing: true,
      }),
    })
    if (!res.ok) {
      throw new Error()
    }
    return { message: 'success' }
  } catch (err) {
    return { message: 'error' }
  }
}

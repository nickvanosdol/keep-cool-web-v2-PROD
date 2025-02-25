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
    limit: '3',
    hidden_from_feed: 'false',
    status: 'confirmed',
    audience: 'all',
  })
  try {
    let res = await fetch(`${baseUrl}/posts?${params}`, {
      method: 'GET',
      headers,
    })
    let formattedRes = await res.json()
    return formattedRes.data
  } catch (err) {
    return fallbackPosts
  }
}

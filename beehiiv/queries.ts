const baseUrl = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}`
const headers = {
  Authorization: `Bearer ${process.env.BEEHIIV_API_TOKEN}`,
  'Content-Type': 'application/json',
}

export async function getSubscriberCount() {
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
    return false
  }
}

export async function getFeaturedPosts() {
  const params = new URLSearchParams({
    order_by: 'created',
    direction: 'desc',
    limit: '3',
    hidden_from_feed: 'false',
  })
  try {
    let res = await fetch(`${baseUrl}/posts?${params}`, {
      method: 'GET',
      headers,
    })
    let formattedRes = await res.json()
    return formattedRes.data
  } catch (err) {
    return false
  }
}

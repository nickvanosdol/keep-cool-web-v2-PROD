export type PostType = {
  id: string
  title: string
  subtitle: string
  authors: string[]
  created: number
  status: string
  publish_date: number | null
  displayed_date: number | null
  split_tested: boolean
  subject_line: string
  preview_text: string
  slug: string
  thumbnail_url: string
  web_url: string
  audience: string
  platform: string
  content_tags: string[]
  meta_default_description: string
  meta_default_title: string
  hidden_from_feed: boolean
}

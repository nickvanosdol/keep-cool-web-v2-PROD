// These are used in case API call to retrieve posts fails. Should be updated to recent posts occasionally

import type { PostType } from '../../beehiiv/types/post'

export const fallback: PostType[] = [
  {
    id: 'post_f0b28292-9034-4d2a-ada3-c7ec7b4d79e3',
    title: 'No one is coming to save us. Time to cowboy up!',
    subtitle:
      "Learning to love (or at least listen) to the geoengineering 'outlaws'",
    authors: ['Nick van Osdol', 'Andrew Song'],
    created: 1740451782,
    status: 'draft',
    publish_date: null,
    displayed_date: null,
    split_tested: false,
    subject_line: '🐧 No one is coming to save us. Time to cowboy up!',
    preview_text:
      "Learning to love (or at least listen) to the geoengineering 'outlaws'",
    slug: 'no-one-is-coming-to-save-us-time-to-cowboy-up',
    thumbnail_url:
      'https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/12dd065f-3052-4707-8d91-630195d1a391/shutterstock_1900336120__1_.jpg?t=1740470347',
    web_url:
      'https://www.keepcool.co/p/no-one-is-coming-to-save-us-time-to-cowboy-up',
    audience: 'both',
    platform: 'both',
    content_tags: ['deep dive'],
    meta_default_description:
      "Learning to love (or at least listen) to the geoengineering 'outlaws'",
    meta_default_title: '',
    hidden_from_feed: false,
  },
  {
    id: 'post_e5c0abd6-f52e-463c-9e3b-fb432ce50d4a',
    title: 'Charts of the month (Jan + Feb)',
    subtitle: 'Data visualizations that rip (pardon the delay)',
    authors: ['Nick van Osdol'],
    created: 1736751822,
    status: 'confirmed',
    publish_date: 1740443400,
    displayed_date: null,
    split_tested: false,
    subject_line: '🐧 Charts of the month (Jan + Feb)',
    preview_text: 'Data visualizations that rip',
    slug: 'charts-of-the-month-january-february',
    thumbnail_url:
      'https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/07d245b6-3487-425b-8561-32c1ebc3548d/LOGO_F_01.png?t=1711476653',
    web_url: 'https://www.keepcool.co/p/charts-of-the-month-january-february',
    audience: 'premium',
    platform: 'both',
    content_tags: ['newsletter'],
    meta_default_description: '',
    meta_default_title: '',
    hidden_from_feed: false,
  },
  {
    id: 'post_7ae30e50-789b-40f4-add3-1cec089ceb24',
    title: 'Cold, cold winter',
    subtitle: 'Plus lots more across climate tech and energy',
    authors: ['Nick van Osdol'],
    created: 1740363166,
    status: 'draft',
    publish_date: null,
    displayed_date: null,
    split_tested: false,
    subject_line: '🐧 BYD inks a monster BESS deal',
    preview_text: 'Plus lots more across climate tech and energy',
    slug: 'cold-cold-winter',
    thumbnail_url:
      'https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/0b53525a-3d49-4af5-b379-cf527113bb44/shutterstock_2451833823.jpg?t=1740376744',
    web_url: 'https://www.keepcool.co/p/cold-cold-winter',
    audience: 'both',
    platform: 'both',
    content_tags: ['newsletter'],
    meta_default_description: '',
    meta_default_title: '',
    hidden_from_feed: false,
  },
]

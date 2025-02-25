// These are used in case API call to retrieve posts fails. Should be updated to recent posts occasionally

import type { PostType } from '../../beehiiv/types/post'

export const fallback: PostType[] = [
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
    id: 'post_e7684ede-86c0-4535-9978-c868ae55283a',
    title: 'BYD inks a monster BESS deal',
    subtitle: 'Plus lots more across climate tech and energy',
    authors: ['Nick van Osdol'],
    created: 1740202986,
    status: 'confirmed',
    publish_date: 1740362400,
    displayed_date: null,
    split_tested: false,
    subject_line: '🐧 BYD inks a monster BESS deal',
    preview_text: 'Plus lots more across climate tech and energy',
    slug: 'byd-inks-a-monster-bess-deal',
    thumbnail_url:
      'https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/34c67496-4b92-4b8c-a520-13c14081ff5a/shutterstock_2513503095.jpg?t=1740214244',
    web_url: 'https://www.keepcool.co/p/byd-inks-a-monster-bess-deal',
    audience: 'both',
    platform: 'both',
    content_tags: ['newsletter'],
    meta_default_description:
      'BYD, the Chinese EV and battery maker, announced an absolutely monster agreement to supply Saudi Electricity Company with 12.5 GWh of battery energy storage for a grid-connected project.',
    meta_default_title: '',
    hidden_from_feed: false,
  },
  {
    id: 'post_dfa9125a-bfb2-4422-9657-ebbec9fa0eae',
    title: 'The When, Where, Who, and Why of Methane Emissions',
    subtitle: 'Minimal U.S. political discussion! Lots of pretty pictures!!',
    authors: ['Nick van Osdol', 'Lauren Singer'],
    created: 1739428223,
    status: 'confirmed',
    publish_date: 1739482331,
    displayed_date: null,
    split_tested: false,
    subject_line: '🐧 The When, Where, Who, and Why of Methane Emissions',
    preview_text: 'Turning Data into Action with Visualizing Energy',
    slug: 'the-when-where-who-and-why-of-methane-emissions',
    thumbnail_url:
      'https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/3fb21612-afdf-4230-86b0-6b052f17d265/image.png?t=1739435743',
    web_url:
      'https://www.keepcool.co/p/the-when-where-who-and-why-of-methane-emissions',
    audience: 'both',
    platform: 'both',
    content_tags: ['article'],
    meta_default_description:
      "Methane emissions mitigation would be one of the fastest ways to slow global warming. Solutions exist and are often economically viable, not just environmental nice-to-haves. Still, methane receives a tiny sliver of total climate finance. Hence, it's worth asking (and iteratively testing) how better, data-driven storytelling might shift this dynamic.",
    meta_default_title: '',
    hidden_from_feed: false,
  },
]

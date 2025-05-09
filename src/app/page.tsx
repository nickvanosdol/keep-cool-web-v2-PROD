import { Container } from '@/components/container'
import {
  Footer,
  SocialIconFacebook,
  SocialIconLinkedIn,
  SocialIconPodcast,
  SocialIconRss,
  SocialIconX,
} from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import LogoTicker from '@/components/logo-ticker'
import { Navbar } from '@/components/navbar'
import { Reviews } from '@/components/reviews'
import Subscribe from '@/components/subscribe'
import { Heading, Subheading } from '@/components/text'
import { fallback } from '@/content/fallback'
import { ChevronRightIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getFeaturedPosts, getSubscriberCount } from '../../beehiiv/queries'
import type { PostType } from '../../beehiiv/types/post'
import clouds from '../../public/clouds.jpg'

export const metadata: Metadata = {
  description:
    'Keep Cool covers the business of climate tech & energy. Join 17000+ climate investors, operators, & the climate-curious.',
}

function Hero({ subscriberCount }: { subscriberCount: number }) {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Image
        src={clouds}
        alt="clouds background"
        className="absolute h-full w-full rounded-4xl object-cover px-2 pt-2 opacity-25"
        priority
      />
      <Container className="relative">
        <Navbar
          banner={
            <>
              <Link
                href="https://keepcool.co"
                className="ml-4 flex items-center gap-1 rounded-full bg-sky-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-sky-950/30"
              >
                🌐 New website! Miss the old one?
                <ChevronRightIcon className="size-4" />
              </Link>
            </>
          }
        />
        <div className="pt-16 pb-10 md:pb-12">
          <h1 className="font-display text-7xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Keep Cool.
          </h1>
          <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            A twice weekly newsletter telling underpriced stories at the
            intersection of climate tech & business.
          </p>
          <p className="mt-8 max-w-lg text-lg/6 font-medium text-gray-950/75 sm:text-xl/7">
            Join{' '}
            {(Math.floor(subscriberCount / 1000) * 1000).toLocaleString(
              'en-US',
            )}
            + readers here:
          </p>
          <div className="mt-4 flex max-w-xl flex-col gap-x-6 gap-y-4 sm:flex-row md:w-2/3">
            <Subscribe />
          </div>
          <div className="mt-6 overflow-hidden">
            <p className="pb-4 text-right text-white">
              Written by Nick van Osdol
            </p>
            <div className="flex justify-end gap-6">
              <Link
                href="https://www.instagram.com/nickvanosdol"
                target="_blank"
                aria-label="Visit us on Instagram"
                className="text-white data-hover:text-gray-200"
              >
                <SocialIconFacebook className="size-6" />
              </Link>
              <Link
                href="https://twitter.com/nickvanosdol"
                target="_blank"
                aria-label="Visit us on X"
                className="text-white data-hover:text-gray-200"
              >
                <SocialIconX className="size-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nicholasvanosdol/"
                target="_blank"
                aria-label="Visit us on LinkedIn"
                className="text-white data-hover:text-gray-200"
              >
                <SocialIconLinkedIn className="size-6" />
              </Link>
              <Link
                href="https://podcasts.apple.com/us/podcast/the-keep-cool-podcast/id1613789172"
                target="_blank"
                aria-label="Listen to our Podcast"
                className="text-white data-hover:text-gray-200"
              >
                <SocialIconPodcast className="size-6" />
              </Link>
              <Link
                href="https://rss.beehiiv.com/feeds/bOZKJZ4Uhk.xml"
                target="_blank"
                aria-label="Visit us on LinkedIn"
                className="text-white data-hover:text-gray-200"
              >
                <SocialIconRss className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeaturedPosts({ featuredPosts }: { featuredPosts: PostType[] }) {
  function unixToReadable(timestamp: number) {
    return new Date(timestamp * 1000).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredPosts.slice(0, 6).map((post: PostType) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between rounded-2xl border border-transparent p-4 ring-1 shadow-lg ring-[#7F9AF9]/15"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.thumbnail_url}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              <div className="w-full max-w-xl">
                <div className="mt-4 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={unixToReadable(post.publish_date!)}
                    className="text-gray-500"
                  >
                    {unixToReadable(post.publish_date!)}
                  </time>
                  {post.content_tags.map(
                    (content_tag) =>
                      content_tag !== 'featured' && ( // Don't need to display the "featured tag", so this filters it out
                        <a
                          href={`https://www.keepcool.co/archive?tags=${content_tag}`}
                          key={content_tag}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {content_tag // formatting
                            .toLowerCase()
                            .split(' ')
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1),
                            )
                            .join(' ')}
                        </a>
                      ),
                  )}
                  {post.audience === 'premium' && (
                    <a
                      href={'https://www.keepcool.co/upgrade'}
                      className="relative z-10 flex items-center gap-1 rounded-full bg-[#5C14D8] px-3 py-1 font-medium text-white hover:bg-[#5C14D8DD]"
                    >
                      <LockClosedIcon className="size-3" />
                      Premium
                    </a>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 max-w-[calc(100%-4px)] truncate text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.web_url}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 max-w-[calc(100%-4px)] truncate text-sm/6 text-gray-600">
                    {post.subtitle}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={
                      post.authors[0] === 'Nick van Osdol'
                        ? 'https://media.beehiiv.com/cdn-cgi/image/format=auto,width=400,height=211,fit=scale-down,onerror=redirect/uploads/user/profile_picture/5a6d7740-fd94-447e-a6d6-0b70fe882163/me3.jpg'
                        : 'https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
                    }
                    className="size-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a
                        href={
                          post.authors[0] === 'Nick van Osdol'
                            ? 'https://www.keepcool.co/authors/5a6d7740-fd94-447e-a6d6-0b70fe882163'
                            : '#'
                        }
                      >
                        <span className="absolute inset-0" />
                        {post.authors[0]}
                      </a>
                    </p>
                    {post.authors.length > 1 && (
                      <p className="text-gray-600">
                        {' '}
                        + {post.authors.length - 1} other
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-32 rounded-4xl bg-gray-900 py-16">
      <Container>
        <Subheading dark>Podcast</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Listen to Keep Cool
        </Heading>
        <iframe
          height="454" // Height should be 450 + 2*(border width)
          width="100%"
          title="Media player"
          src="https://embed.podcasts.apple.com/us/podcast/the-keep-cool-podcast/id1613789172?itscg=30200&amp;itsct=podcast_box_player&amp;ls=1&amp;mttnsubad=1613789172&amp;theme=dark"
          id="embedPlayer"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
          className="mt-8 w-full overflow-hidden rounded-2xl border-2 border-[#7F9AF999]"
        ></iframe>
      </Container>
    </div>
  )
}

// function Testimonials({ subscriberCount }: { subscriberCount: number }) {
//   function classNames(...classes: any) {
//     return classes.filter(Boolean).join(' ')
//   }
//   return (
//     <div className="relative isolate pt-24 sm:pt-32">
//       <div className="mx-auto max-w-7xl">
//         <Subheading>What people are saying</Subheading>
//         <Heading as="h3" className="mt-2">
//           Trusted by <AnimatedNumber start={0} end={subscriberCount} />{' '}
//           subscribers
//         </Heading>
//         <Lead className="mt-6 max-w-3xl">
//           Here are some real words from real readers.
//         </Lead>
//         <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-16 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
//           {/* <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
//             <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
//               <p>{`“${featuredTestimonial.body}”`}</p>
//             </blockquote>
//             <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap sm:px-12">
//               <img
//                 alt=""
//                 src={featuredTestimonial.author.imageUrl}
//                 className="size-10 flex-none rounded-full bg-gray-50"
//               />
//               <div className="flex-auto">
//                 <div className="font-semibold">
//                   {featuredTestimonial.author.name}
//                 </div>
//                 <div className="text-gray-600">
//                   {featuredTestimonial.author.handle}
//                 </div>
//               </div>
//               <img
//                 alt=""
//                 src={featuredTestimonial.author.logoUrl}
//                 className="h-10 w-auto flex-none"
//               />
//             </figcaption>
//           </figure> */}
//           {testimonials.map((columnGroup, columnGroupIdx) => (
//             <div
//               key={columnGroupIdx}
//               className="space-y-8 xl:contents xl:space-y-0"
//             >
//               {columnGroup.map((column, columnIdx) => (
//                 <div
//                   key={columnIdx}
//                   className={classNames(
//                     (columnGroupIdx === 0 && columnIdx === 0) ||
//                       (columnGroupIdx === testimonials.length - 1 &&
//                         columnIdx === columnGroup.length - 1)
//                       ? 'xl:row-span-2'
//                       : 'xl:row-start-1',
//                     'space-y-8',
//                   )}
//                 >
//                   {column.map((testimonial, i) => (
//                     <figure
//                       key={i}
//                       className="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5"
//                     >
//                       <blockquote className="text-gray-900">
//                         <BoldGratitude text={`“${testimonial.body}”`} />
//                       </blockquote>
//                       {/* <figcaption className="mt-6 flex items-center gap-x-4">
//                         <img
//                           alt=""
//                           src={testimonial.author.imageUrl}
//                           className="size-10 rounded-full bg-gray-50"
//                         />
//                         <div>
//                           <div className="font-semibold">
//                             - {testimonial.author.name}
//                           </div>
//                           <div className="text-gray-600">
//                             {testimonial.author.handle}
//                           </div>
//                         </div>
//                       </figcaption> */}
//                     </figure>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

export default async function Home() {
  const currentSubCount = 17501 // used in case API call to retrieve subscriber count fails, should be updated with real number occasionally
  let subscriberCount = await getSubscriberCount(currentSubCount)
  let featuredPosts = await getFeaturedPosts(fallback)

  return (
    <div className="overflow-hidden">
      <Hero subscriberCount={subscriberCount} />
      <main>
        <Container className="mt-10">
          <Subheading className="mb-4">Join readers from orgs like</Subheading>
          {/* <LogoCloud /> */}
          <LogoTicker
            logoPaths={[
              '/logo-ticker/cbre.svg',
              '/logo-ticker/dsv.svg',
              '/logo-ticker/elemental-impact.svg',
              '/logo-ticker/energize.svg',
              '/logo-ticker/general-atlantic.svg',
              '/logo-ticker/generate.png',
              '/logo-ticker/jpmc.svg',
              '/logo-ticker/lowercarbon.svg',
              '/logo-ticker/nucor.svg',
              '/logo-ticker/panthalassa.svg',
              '/logo-ticker/siemens.png',
              '/logo-ticker/watershed.svg',
            ]}
          />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-50 pt-10 pb-32">
          <Container>
            <Heading as="h1" className="border-t-1 border-t-gray-200 pt-14">
              {/* <Subheading className="mb-4">What to expect</Subheading> */}
              Featured posts
            </Heading>
            <FeaturedPosts featuredPosts={featuredPosts} />
            <Link
              href="https://www.keepcool.co/archive"
              className="flex w-fit items-center gap-1 rounded-full border-2 border-[#7F9AF9] bg-[#5C14D8] px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-[#5C14D8DD]"
            >
              See more posts
              <ChevronRightIcon className="size-4" />
            </Link>
          </Container>
          {/* <FeatureSection /> */}
          {/* <BentoSection /> */}
          <DarkBentoSection />
          {/* <Container>
            <Testimonials subscriberCount={subscriberCount} />
          </Container> */}
          <Reviews subscriberCount={subscriberCount} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

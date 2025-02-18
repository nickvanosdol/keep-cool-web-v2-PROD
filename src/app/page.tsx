import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import {
  Footer,
  SocialIconFacebook,
  SocialIconLinkedIn,
  SocialIconRss,
  SocialIconX,
} from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { authors } from '@/content/authors'
import { fallback } from '@/content/fallback'
import { featuredTestimonial, testimonials } from '@/content/testimonials'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { getFeaturedPosts, getSubscriberCount } from '../../beehiiv/queries'
import type { PostType } from '../../beehiiv/types/post'

export const metadata: Metadata = {
  description:
    'Keep Cool covers the business of climate tech & energy. Join 17000+ climate investors, operators, & the climate-curious.',
}

const currentSubCount = 17501 // used in case API call to retrieve subscriber count fails, should be updated with real number occasionally

async function Hero() {
  let subscriberCount = await getSubscriberCount()

  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <>
              <Link
                href="https://grizzlyads.com/store/keep-cool"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 rounded-full bg-sky-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-sky-950/30"
              >
                🤝 Advertise with us
                <ChevronRightIcon className="size-4" />
              </Link>
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
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            A weekly newsletter telling underpriced stories at the intersection
            of climate & business.
          </p>
          <p className="mt-8 max-w-lg text-lg/6 font-medium text-gray-950/75 sm:text-xl/7">
            Join{' '}
            {(
              Math.floor(
                (!subscriberCount ? currentSubCount : subscriberCount) / 1000,
              ) * 1000
            ).toLocaleString('en-US')}
            + readers here:
          </p>
          <div className="mt-4 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <form className="max-w-lg md:w-1/2">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  autoComplete="email"
                  className="relative inline-flex w-full items-center justify-center rounded-full border border-transparent bg-white px-4 py-[calc(--spacing(2)-1px)] ring-1 shadow-md ring-[#7F9AF9]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]"
                />
                <Button type="submit" className="hover:cursor-pointer">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div className="justify-self-end overflow-hidden pt-12">
            <p className="pb-4 text-white">Written by Nick van Osdol</p>
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

export async function FeaturedPosts() {
  function unixToReadable(timestamp: number) {
    return new Date(timestamp * 1000).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  let featuredPosts = await getFeaturedPosts()
  if (featuredPosts) {
  } else {
    featuredPosts = fallback
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredPosts.slice(0, 3).map((post: PostType) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between rounded-2xl border border-transparent p-4 ring-1 shadow-md ring-[#7F9AF9]/15"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.thumbnail_url}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              <div className="max-w-xl">
                <div className="mt-4 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={unixToReadable(post.publish_date!)}
                    className="text-gray-500"
                  >
                    {unixToReadable(post.publish_date!)}
                  </time>
                  <a
                    href={`https://www.keepcool.co/archive?tags=${post.content_tags[0]}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.content_tags[0].charAt(0).toUpperCase() +
                      post.content_tags[0].slice(1)}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.web_url}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm/6 text-gray-600">
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
                            : ''
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
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Meet the Authors</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Cool af.
        </Heading>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {authors.map((author) => (
            <li
              key={author.xUrl}
              className="rounded-2xl bg-gray-800 px-8 py-10 text-center"
            >
              <img
                alt=""
                src={author.imageUrl}
                className="mx-auto size-48 rounded-full md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">
                {author.name}
              </h3>
              <p className="text-sm/6 text-gray-400">{author.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={author.xUrl}
                    target="_blank"
                    className="text-gray-400 hover:text-[#7F9AF9]"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={author.linkedinUrl}
                    target="_blank"
                    className="text-gray-400 hover:text-[#7F9AF9]"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export async function Testimonials() {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  let subscriberCount = await getSubscriberCount()

  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <Subheading>What people are saying</Subheading>
        <Heading as="h3" className="mt-2">
          Trusted by{' '}
          <AnimatedNumber
            start={0}
            end={!subscriberCount ? currentSubCount : subscriberCount}
          />{' '}
          readers
        </Heading>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-16 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">
                  {featuredTestimonial.author.handle}
                </div>
              </div>
              <img
                alt=""
                src={featuredTestimonial.author.logoUrl}
                className="h-10 w-auto flex-none"
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          alt=""
                          src={testimonial.author.imageUrl}
                          className="size-10 rounded-full bg-gray-50"
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.author.handle}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <Subheading className="mb-4">Supported by</Subheading>
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 pt-10 pb-32">
          <Container>
            <Heading as="h1" className="border-t-1 border-t-gray-200 pt-16">
              {/* <Subheading className="mb-4">What to expect</Subheading> */}
              Featured posts
            </Heading>
            <Lead className="mt-6 max-w-3xl">
              Subscribe today to receive climate insights and industry deep
              dives delivered straight to your inbox, every Thursday and Sunday.
            </Lead>
            <FeaturedPosts />
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
        </div>
        <DarkBentoSection />
      </main>
      <Container>
        <Testimonials />
      </Container>
      <Footer />
    </div>
  )
}

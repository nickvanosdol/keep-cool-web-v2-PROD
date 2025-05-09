'use client'

import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

import { AnimatedNumber } from './animated-number'
import BoldGratitude from './bold-gratitude'
import { Container } from './container'
import { Heading, Lead, Subheading } from './text'

interface Review {
  // title: string
  body: string
  // author: string
  // rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    body: 'I really like your emails and am impressed by how much work goes into them. When I give money to creators I do it for that reason, rather than because there are specific perks promised. So I basically joined the paid membership to thank you (in a tiny way) for doing the free stuff.',
  },
  {
    body: 'One foot in front of the other. Thank you for this week’s beautiful newsletter.',
  },
  {
    body: "Very appreciative reader of your newsletter here. I'm a recent grad and trying to wrap my own head around the recent and constant environmental developments in the US. I find your writing incredibly informative…I found your note about your projects to be particularly thought provoking, as I'm myself trying to figure out where to put my limited time and energy into work that feels the most impactful.",
  },
  {
    body: 'Moments before going to bed, I’m reading your newsletter and I’m deeply touched. Especially about your perspective on our ‘discourse,’ I feel that so much.',
  },
  {
    body: 'Great article. You’ve always had a way with words. Thanks for a refreshingly holistic look on a complex issue. Sometimes the full picture is a mosaic of each narrative. Looking forward to more reads!',
  },
  {
    body: 'Anyway, this is a thanks for giving me the words. This will stick with me for a long time.',
  },
  {
    body: 'Thank you for the newsletter, this newsletter is one of the best things to come into my inbox every week.',
  },

  {
    body: 'Best thing on my feed each week. Thanks for your work, Nick.',
  },
  {
    body: 'I’m a climate and cleantech lobbyist in DC…This last month has sucked, both from a professional perspective and from the perspective of someone that’s dedicated the last 20 years of their life to addressing climate change…This edition of the newsletter was a good one – I appreciate the perspective, especially when partnered with the call to keep up the work. Thanks for writing these.',
  },
  {
    body: 'I have been following and reading your newsletter for a long time and I wanted to say that I appreciate your approach, your articles and the overall education on the industry from funding, global trends and industry setbacks to the unfortunate role emotion and politics plays in these type of efforts sometimes. Again, thank you for everything.',
  },
  {
    body: 'Wow, what a great write-up in this one. I’ve been skimming for the past few months, but this deep dive really brought to mind some of the deep systemic framings that we need to have to adjust our direction. Thank you for such a clear and well-developed analysis of our current state, going beyond the surface metrics 🙏',
  },
  {
    body: 'Thanks for this article, Nick, it was very much needed today and I appreciate your well-thought-out and researched takes. I also love the amount of quotes, I love relating current events to past nuggets of wisdom. I live in Chico, CA near where the Camp Fire and Park Fire happened, and I have family both down south in LA and north in Redding where the Carr fire was. As you can imagine I have been sufficiently fatigued on fires, but this was a great and refreshing article to reframe your mind and the problems at hand, so thank you again!',
  },
  {
    body: 'Thank you, some great insights which helped me get a handle on what is going on. Very Sun Tzu.',
  },
  {
    body: 'I just want to say thank you and don’t give up. We need people like you to keep bringing awareness and sounding the alarm and aggregating information into a narrative format that people can process. I feel discouraged, but I feel less discouraged knowing that there are people out there (like you) that also care and are doing their best to help.',
  },
  {
    body: 'Follow Nick and Keep Cool - best damn climate-tech newsletter out there.',
  },
  {
    body: "I also appreciate that you called out COP29 / Azerbaijan. I am Armenian and have spent time in Nagorno-Karabakh and to see the world turn a blind eye is incredibly frustrating. Not to mention the absurdity of a petrostate once again holding the world's climate conference.",
  },
  {
    body: "Thanks Nick. You nailed the sentiment of what I have been feeling but haven't been able to verbalize since the election.",
  },
  {
    body: 'I wish more people were approaching things as intentionally as you.',
  },
  {
    body: 'Thank you, Nick. I am unable to sleep tonight, again, anxious about anything my mind can find to think about. I was happy to find your email in my inbox as your takes on the world always interest me. Tonight, I find that you have quieted my mind in some way (not for the first time), enough to reach out for an expression of gratitude. Your style of discussion and communication, of balancing the good and the bad with reality and hope, is what is missing from public discussion. As a young woman struggling to look her personal and planet-wide future in the face, I appreciate you.',
  },
  {
    body: 'Really liked this one, it’s a nice way to say: ‘Yes, climate change, and there’s no one to save us but ourselves so get doing.',
  },
  {
    body: 'No pressure, but yours is the email list that keeps me going 💪 - Incredible and I don’t know how you are able to put so much into it',
  },
  {
    body: 'I wanted to reach out and say that this was one of the best articles you have written yet, Nick! I was drawn in with every word. Thank you.',
  },
]

// function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
//       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     </svg>
//   )
// }

// function StarRating({ rating }: { rating: Review['rating'] }) {
//   return (
//     <div className="flex">
//       {[...Array(5).keys()].map((index) => (
//         <StarIcon
//           key={index}
//           className={clsx(
//             'h-5 w-5',
//             rating > index ? 'fill-cyan-500' : 'fill-gray-300',
//           )}
//         />
//       ))}
//     </div>
//   )
// }

function Review({
  // title,
  body,
  // author,
  // rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        {/* <StarRating rating={rating} /> */}
        {/* <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p> */}
        <BoldGratitude text={`“${body}”`} />
      </blockquote>
      {/* <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption> */}
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews(props: { subscriberCount: number }) {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <Subheading>What people are saying</Subheading>
        <Heading as="h3" className="mt-2">
          Trusted by <AnimatedNumber start={0} end={props.subscriberCount} />{' '}
          subscribers
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Here are some real words from real readers.
        </Lead>
        <ReviewGrid />
      </Container>
    </section>
  )
}

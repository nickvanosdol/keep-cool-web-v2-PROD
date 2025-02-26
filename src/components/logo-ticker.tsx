'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function LogoTicker({ logoPaths }: { logoPaths: string[] }) {
  const containerRef = useRef(null)

  return (
    <div className="lg:overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex gap-20"
        animate={{ x: ['0%', '-290.5%'] }} // Adjust end value depending on length of ribbon to achieve smooth looping
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60,
            ease: 'linear',
          },
        }}
      >
        {logoPaths.concat(logoPaths).map((logoPath, i) => (
          <img
            key={i}
            alt="Tuple"
            src={logoPath}
            className="h-8 max-sm:mx-auto sm:h-7 lg:h-10"
          />
        ))}
      </motion.div>
    </div>
  )
}

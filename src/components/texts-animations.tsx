'use client'

import { TypeAnimation } from 'react-type-animation'

export function TextsAnimations() {
  return (
    <TypeAnimation
      sequence={[
        'Bruno Alves',
        1000,
        'FullStack Developer',
        1000,
        'Passion for technology',
        1000,
        'Innovation & Learning',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-7xl leading-tight"
    />
  )
}

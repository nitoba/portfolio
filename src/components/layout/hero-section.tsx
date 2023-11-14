import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
import { TextsAnimations } from '../texts-animations'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <section className="container lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          //   initial={{ opacity: 0, scale: 0.5 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl lg:text-7xl lg:leading-tight">
            <span className="text-white">Hello, I&apos;m </span>
            <br />
            <TextsAnimations />
          </h1>
          <p className="mb-4 text-base text-muted-foreground sm:text-lg lg:text-xl">
            Desenvolvedor Web com uma Paixão pela Inovação Tecnológica, Buscando
            Constantemente Aprender e Crescer.
          </p>
          <div className="mt-16 flex gap-3">
            <Button asChild variant="outline">
              <Link href="/contact" className="w-full sm:w-fit">
                Hire Me
              </Link>
            </Button>
            <Button asChild>
              <Link href="/" className="w-full sm:w-fit">
                Download CV
              </Link>
            </Button>
          </div>
        </div>
        <div
          //   initial={{ opacity: 0, scale: 0.5 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="relative h-[250px] w-[250px] rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from "next/image"

export function TestImage() {
  return <Image
    src="https://dmythro.com/avatar@800px.jpg"
    alt="Test"
    width={800}
    height={800}
    fetchPriority="high"
    loading="eager"
    priority
  />
}

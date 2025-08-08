'use client'

import dynamic from "next/dynamic"

const TestImage = dynamic(() => import("@/ui/test-image").then((mod) => mod.TestImage), {
  ssr: false,
})

export function TestComponent() {
  return <TestImage />
}

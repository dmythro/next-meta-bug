'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const errorTitles: Record<string, string> = {
  ua: 'Щось пішло не так!',
  en: 'Something went wrong!',
}

const errorMessages: Record<string, string> = {
  ua: 'Спробуйте знову',
  en: 'Please try again',
}

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const { lang } = useParams<{ lang: string }>()

  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error, { lang })
  }, [error, lang])

  return (
    <div className="flex flex-col gap-6 items-start">
      <h1>{errorTitles[lang]}</h1>
      <button
        type="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {errorMessages[lang]}
      </button>
    </div>
  )
}

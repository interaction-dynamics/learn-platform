'use client'
import { useState } from 'react'

export default function WorkInProgress() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const subscribe = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    setIsError(false)
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })

    if (response.status !== 200) {
      setIsError(true)
    } else {
      setEmail('')
      setIsSuccess(true)
    }

    setIsLoading(false)
  }

  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 px-4 py-10 text-lg dark:border-slate-800 lg:text-sm">
        <div className="m-0 p-0 font-sans text-lg font-medium text-slate-900 dark:text-white">
          Work in progress
        </div>
        <div className="mb-3">This page is still under construction.</div>

        <div>Please come back later.</div>

        <div className="flex items-center py-3">
          <div className="w-20 flex-1 border-b border-b-slate-100 dark:border-b-slate-800" />
          <div className="px-4">or</div>
          <div className="w-20 flex-1 border-b border-b-slate-100 dark:border-b-slate-800" />
        </div>
        <div className="flex w-full flex-col items-center text-center">
          {isSubscribing ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col gap-2 md:flex-row">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-lg px-2 py-2 text-sm ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500 md:py-0"
                />
                <button
                  onClick={subscribe}
                  className="dark:highlight-white/20flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-1 font-semibold text-white hover:bg-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
                >
                  {isLoading ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              <div className="pt-3 text-xs">
                {isError
                  ? 'Oups. Something went wrong. Try again.'
                  : isSuccess
                    ? 'Email subscribed.'
                    : "We won't spam you with unnecessary emails. Promise."}
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsSubscribing(true)}
              className="dark:highlight-white/20flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-1 font-semibold text-white hover:bg-slate-700 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
            >
              Subscribe to updates
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

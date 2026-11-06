'use client'
import { PropsWithChildren, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import GitHubIcon from './icons/GithubIcon'
import DiscordIcon from './icons/DiscordIcon'
import { discordUrl, githubRepositoryUrl, mediumUrl } from '@/lib/socialUrls'
import MediumIcon from './icons/MediumIcon'

export default function Header({ children }: PropsWithChildren) {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur-sm dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent',
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation />
      </div>
      <div className="relative flex grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Logo className=" flex h-9 w-auto fill-slate-700 dark:fill-sky-100" />
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">{children}</div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:grow">
        <ThemeSelector className="relative z-10" />
        <Link
          href={mediumUrl}
          target="_blank"
          className="group"
          aria-label="Medium"
        >
          <MediumIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
        {/* <Link
          href={discordUrl}
          target="_blank"
          className="group"
          aria-label="Discord"
        >
          <DiscordIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link> */}
        <Link
          href={githubRepositoryUrl}
          target="_blank"
          className="group"
          aria-label="GitHub"
        >
          <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
      </div>
    </header>
  )
}

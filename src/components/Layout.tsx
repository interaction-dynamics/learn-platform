'use client'
import { usePathname } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import Header from './Header'
import { Search } from './Search'

export function Layout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let isHomePage = pathname === '/'

  return (
    <div className="flex w-full flex-col">
      <Header>
        <Search />
      </Header>

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-linear-to-t from-slate-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
          <div className="sticky top-19 -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

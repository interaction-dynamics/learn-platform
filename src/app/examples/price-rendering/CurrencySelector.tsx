'use client'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import currencies from './currencies'

export interface CurrencySelectorProps
  extends React.ComponentPropsWithoutRef<typeof Listbox<'div'>> {
  currency: string
  onCurrencyChange?: (locale: string) => void
}

export default function CurrencySelector({
  currency,
  onCurrencyChange,
  ...props
}: CurrencySelectorProps) {
  return (
    <Listbox as="div" value={currency} onChange={onCurrencyChange} {...props}>
      <ListboxButton
        className="flex h-10 w-full items-center justify-center rounded-lg px-2 shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5 md:h-auto md:w-24"
        aria-label="Currency"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="py-1 pl-1 text-sm font-semibold">{currency}</span>
      </ListboxButton>
      <ListboxOptions className="md:right-none absolute right-0 top-full mt-3 max-h-64 w-72  space-y-1 overflow-auto rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5 md:left-1/2 md:-translate-x-1/2">
        {currencies.sort().map(({ cc, symbol, name }) => (
          <ListboxOption
            key={cc}
            value={cc}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-sky-500': selected,
                  'text-slate-900 dark:text-white': active && !selected,
                  'text-slate-700 dark:text-slate-400': !active && !selected,
                  'bg-slate-100 dark:bg-slate-900/40': active,
                },
              )
            }
          >
            {({ selected }) => (
              <div className="ml-3">
                {name} ({symbol})
              </div>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}

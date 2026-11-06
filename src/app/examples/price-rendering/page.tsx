'use client'
import { Fragment, useState } from 'react'
import LocaleSelector from './LocaleSelector'
import CurrencySelector from './CurrencySelector'
import FormatPriceBasic from './FormatPriceBasic'
import { Card } from './Card'
import FormatPriceSmartDecimal from './FormatPriceSmartDecimal'
import FormatPriceStyled from './FormatPriceStyled'
import clsx from 'clsx'
import { Highlight } from 'prism-react-renderer'
import FormatPriceCode from './FormatPriceCode'

const renders = [
  FormatPriceBasic,
  FormatPriceSmartDecimal,
  FormatPriceStyled,
  FormatPriceCode,
]

export default function PriceRendering() {
  const [locale, setLocale] = useState('en-CA')
  const [currency, setCurrency] = useState('USD')
  const [price, setPrice] = useState('1234.56')

  const [renderIndex, setRenderIndex] = useState(0)

  const Render = renders[renderIndex]

  const [isCodeVisible, setIsCodeVisible] = useState(false)

  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(Render.code)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <div>
      <h1 className="font-sans text-3xl tracking-tight text-slate-900 dark:text-white">
        Price rendering
      </h1>
      <p className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-sans prose-headings:font-normal prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,var(--color-sky-300))] prose-a:hover:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg prose-lead:text-slate-500 dark:text-slate-400 dark:[--tw-prose-background:var(--color-slate-900)] dark:prose-a:text-sky-400 dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,var(--color-sky-800))] dark:prose-a:hover:[--tw-prose-underline-size:6px] dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400 lg:prose-headings:scroll-mt-34">
        Rendering prices is a common task in e-commerce applications. And it may
        change depending on the locale and currency. Here are some examples of
        how you can render prices in different ways.
      </p>
      <div className="flex flex-col gap-2 pt-10 md:gap-4">
        <div className="relative flex flex-col items-stretch justify-start gap-3 sm:gap-5 md:flex-row">
          <div className="flex flex-row gap-3">
            <div className="relative flex-1 md:flex-none">
              <label className="text-sm font-semibold" htmlFor="locale">
                Locale
              </label>
              <LocaleSelector
                locale={locale}
                onLocaleChange={setLocale}
                className="relative z-10 flex items-stretch"
                id="locale"
              />
            </div>
            <div className="flex-1 md:flex-none">
              <label className="text-sm font-semibold" htmlFor="currency">
                Currency
              </label>
              <CurrencySelector
                currency={currency}
                onCurrencyChange={setCurrency}
                className="relative z-10 flex items-stretch"
                id="currency"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col md:flex-none">
            <label className="text-sm font-semibold" htmlFor="price">
              Price
            </label>
            <input
              name="price"
              id="price"
              type="number"
              placeholder="Price"
              step={0.01}
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="flex-1 rounded-lg px-2 py-2 text-sm ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500 md:py-0"
            />
          </div>
          <div className="flex flex-1 items-end justify-end gap-2 pr-2 text-sm font-semibold">
            <button
              className={clsx(
                isCodeVisible
                  ? 'border-b-transparent text-slate-300 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white'
                  : 'border-b-slate-500 dark:border-b-white ',
                'border-b-2 px-2 py-1  transition ',
              )}
              onClick={() => setIsCodeVisible(false)}
            >
              Preview
            </button>
            <button
              className={clsx(
                isCodeVisible
                  ? 'border-b-slate-500 dark:border-b-white '
                  : 'border-b-transparent text-slate-300 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white',
                'border-b-2 px-2 py-1  transition ',
              )}
              onClick={() => setIsCodeVisible(true)}
            >
              Code
            </button>
          </div>
        </div>

        {isCodeVisible ? (
          <Card className="relative h-64 flex-row items-stretch overflow-auto bg-black/30 px-0 py-0">
            <button
              className="absolute right-1 top-1 flex flex-row gap-2 text-slate-300 transition dark:text-slate-600 dark:hover:text-white md:right-3 md:top-3"
              onClick={copyToClipboard}
            >
              {isCopied ? 'Copied' : ''}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </button>
            <Highlight language="typescript" code={Render.code}>
              {({ className, tokens, getTokenProps }) => (
                <pre className={clsx('w-full p-4', className)}>
                  <code>
                    {tokens.map((line, lineIndex) => (
                      <Fragment key={lineIndex}>
                        {line
                          .filter((token) => !token.empty)
                          .map((token, tokenIndex) => (
                            <span
                              key={tokenIndex}
                              {...getTokenProps({ token })}
                            />
                          ))}
                        {'\n'}
                      </Fragment>
                    ))}
                  </code>
                </pre>
              )}
            </Highlight>
          </Card>
        ) : (
          <Card className="relative h-64 flex-col items-center justify-center overflow-hidden px-4 py-10">
            <div>
              <div className="text-5xl font-semibold">
                {!isNaN(parseFloat(price)) && (
                  <Render
                    currency={currency}
                    locale={locale}
                    price={parseFloat(price)}
                    className="text-xl"
                  />
                )}
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-slate-300 dark:text-slate-600 md:left-4 md:text-sm">
                {Render.description ?? ''}
              </div>
            </div>
          </Card>
        )}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          {renders.map(
            (Render, index) =>
              index !== renderIndex && (
                <Card
                  key={index}
                  className="relative aspect-6/3 flex-col items-center justify-center px-4 py-10"
                >
                  <button
                    className="absolute right-1 top-1 text-slate-300 transition dark:text-slate-600 dark:hover:text-white md:right-3 md:top-3"
                    onClick={() => setRenderIndex(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </button>

                  <div className="text-2xl font-semibold leading-none">
                    {!isNaN(parseFloat(price)) && (
                      <Render
                        currency={currency}
                        locale={locale}
                        price={parseFloat(price)}
                        className="text-base leading-none"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2 text-xs text-slate-300 dark:text-slate-600 md:left-4 md:text-sm">
                    {Render.description ?? ''}
                  </div>
                </Card>
              ),
          )}
        </div>
      </div>
      <footer className="pb-10" />
    </div>
  )
}

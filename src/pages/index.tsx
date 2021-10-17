import React from 'react'

import { Seo } from '../components/Seo'

export default function IndexPage() {
  return (
    <>
      <Seo />
      <main className="h-full w-full p-8 text-center prose-spacing">
        <h1 className="text-4xl mb-4">
          Salve pra <strong>firma!</strong>
        </h1>
        <p className="font-mono">Site em construção...</p>
        <p>
          Dúvido você clicar{' '}
          <a
            href="https://www.latlmes.com/tech/php-will-die-tomorrow-1"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium italic text-blue-400"
          >
            aqui
          </a>
        </p>
      </main>
    </>
  )
}

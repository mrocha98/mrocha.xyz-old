import React from 'react'

import { Seo } from '../components/Seo'

export default function NotFoundPage() {
  const seoTitle = 'Página não encontrada'
  const seoDescription =
    'Parece que você tentou acessar um conteúdo que não existe ou mudou de lugar...'

  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <main>
        <h1 className="text-2xl">Erro 404</h1>
        <p>Página não encontrada...</p>
      </main>
    </>
  )
}

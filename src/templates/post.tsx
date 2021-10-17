import React from 'react'

import { Seo } from '../components/Seo'

export default function PostTemplate() {
  return (
    <>
      <Seo title="post" />
      <main>
        <h1>Olá, eu sou um post!</h1>
      </main>
    </>
  )
}

// required by gatsby-remark-lazy-load
import 'lazysizes'

// monospace fonts imports
import '@fontsource/jetbrains-mono/latin-400.css'

// sans-serif fonts imports
import '@fontsource/raleway/latin-400.css'
import '@fontsource/raleway/latin-500.css'
import '@fontsource/raleway/latin-600.css'
import '@fontsource/raleway/latin-700.css'
import '@fontsource/raleway/latin-800.css'
import '@fontsource/raleway/latin-900.css'
// sans-serif italic fonts imports
import '@fontsource/raleway/latin-400-italic.css'
import '@fontsource/raleway/latin-500-italic.css'
import '@fontsource/raleway/latin-700-italic.css'

import './src/styles/index.css'

require('prismjs/themes/prism-tomorrow.css')

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 80, // size of the header (sidebar) when mobile
  })
}

import 'lazysizes'
import './src/styles/index.css'

require('prismjs/themes/prism-tomorrow.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')
require('prismjs/plugins/command-line/prism-command-line.css')

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 80, // size of the header (sidebar) when mobile
  })
}

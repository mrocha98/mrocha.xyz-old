import './src/styles/index.css'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 80, // size of the header (sidebar) when mobile
  })
}

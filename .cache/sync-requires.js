
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/daniil/github/IB/.cache/dev-404-page.js")),
  "component---src-pages-footer-js": preferDefault(require("/home/daniil/github/IB/src/pages/footer.js")),
  "component---src-pages-index-js": preferDefault(require("/home/daniil/github/IB/src/pages/index.js")),
  "component---src-pages-info-js": preferDefault(require("/home/daniil/github/IB/src/pages/info.js"))
}


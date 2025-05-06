
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 687, hash: 'e1a941066f14cb6705e0d92fd1cdeee357df44a2c372bb30c969d7f707ce07cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'e76237711ddf3d607cdefcf6513674482ec9b4b21c1cb5713ae6fb755a94914f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9217, hash: '17e3614811ea51b21b4b5633590088d55af3168f658015871e8510a2a77ab508', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IWNKREUU.css': {size: 69, hash: 'znmG6RPZy38', text: () => import('./assets-chunks/styles-IWNKREUU_css.mjs').then(m => m.default)}
  },
};

// ビルドのたびに dist ごと消えるため、サイト全体にかかる静的ファイルを作り直す。
const fs = require('fs');

const DOMAIN = 'https://spindey.com';

fs.mkdirSync('dist', { recursive: true });

// GitHub Pages の独自ドメイン設定
fs.writeFileSync('dist/CNAME', 'spindey.com\n');

fs.writeFileSync(
  'dist/robots.txt',
  ['User-agent: *', 'Allow: /', '', `Sitemap: ${DOMAIN}/sitemap.xml`, ''].join('\n')
);

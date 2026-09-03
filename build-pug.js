// src/pug/ 以下の .pug を dist/ へ描画し、あわせて sitemap.xml を書き出す。
// `_` で始まるファイルは include 専用と雛形のため出力しない。
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const SRC = 'src/pug';
const OUT = 'dist';
const DOMAIN = 'https://spindey.com';

const walk = dir =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const pages = [];

for (const file of walk(SRC)) {
  if (path.extname(file) !== '.pug') continue;
  if (path.basename(file).startsWith('_')) continue;

  const rel = path.relative(SRC, file).replace(/\.pug$/, '.html');
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, pug.renderFile(file, { pretty: true }));
  pages.push(rel.split(path.sep).join('/'));
}

// index.html はディレクトリの URL として持たせる
const urls = pages
  .map(p => DOMAIN + '/' + p.replace(/(^|\/)index\.html$/, '$1'))
  .sort();

fs.writeFileSync(
  path.join(OUT, 'sitemap.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(u => `  <url><loc>${u}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n')
);

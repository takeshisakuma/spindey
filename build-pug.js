// src/pug/ 以下の .pug を dist/ へ描画する。
// `_` で始まるファイルは include 専用のため出力しない。
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const SRC = 'src/pug';
const OUT = 'dist';

const walk = dir =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

for (const file of walk(SRC)) {
  if (path.extname(file) !== '.pug') continue;
  if (path.basename(file).startsWith('_')) continue;

  const dest = path.join(OUT, path.relative(SRC, file).replace(/\.pug$/, '.html'));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, pug.renderFile(file, { pretty: true }));
}

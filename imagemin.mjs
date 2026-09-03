// src/img/ 以下の画像を圧縮して dist/img/ へ出力する。
// imagemin は出力先を平坦化するため、ディレクトリごとに実行して構成を保つ。
import fs from 'node:fs';
import path from 'node:path';
import imagemin from 'imagemin';
import gifsicle from 'imagemin-gifsicle';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';

const SRC = 'src/img';
const OUT = 'dist/img';
const EXTENSIONS = ['.jpg', '.png', '.gif', '.svg'];

const plugins = [
  mozjpeg({ quality: 85 }),
  pngquant({ quality: [0.7, 0.8] }),
  gifsicle(),
  svgo(),
];

const dirsWithImages = dir => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nested = entries
    .filter(entry => entry.isDirectory())
    .flatMap(entry => dirsWithImages(path.join(dir, entry.name)));
  const hasImages = entries.some(
    entry => entry.isFile() && EXTENSIONS.includes(path.extname(entry.name))
  );
  return hasImages ? [dir, ...nested] : nested;
};

for (const dir of dirsWithImages(SRC)) {
  await imagemin([`${dir}/*.{jpg,png,gif,svg}`], {
    destination: path.join(OUT, path.relative(SRC, dir)),
    plugins,
  });
}

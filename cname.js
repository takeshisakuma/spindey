// GitHub Pages の独自ドメイン設定用ファイル。
// `rimraf dist` で消えるため、ビルド前に必ず再生成する。
const fs = require('fs');

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/CNAME', 'spindey.com\n');

const fs = require('fs');
const path = require('path');

// 确保 dist/styles 目录存在
const distStylesDir = path.join(__dirname, '..', 'dist', 'styles');
if (!fs.existsSync(distStylesDir)) {
  fs.mkdirSync(distStylesDir, { recursive: true });
}

// 复制 CSS 文件
const cssSource = path.join(__dirname, '..', 'styles', 'main.css');
const cssDest = path.join(distStylesDir, 'main.css');
fs.copyFileSync(cssSource, cssDest);

console.log('✓ CSS 文件已复制');


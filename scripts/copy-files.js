const fs = require('fs');
const path = require('path');

// 确保 dist 目录存在
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 复制 HTML 文件
const htmlSource = path.join(__dirname, '..', 'index.html');
const htmlDest = path.join(distDir, 'index.html');
fs.copyFileSync(htmlSource, htmlDest);

console.log('✓ HTML 文件已复制');


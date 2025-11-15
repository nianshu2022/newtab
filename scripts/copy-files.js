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

// 复制 public 目录下的文件（如果存在）
const publicDir = path.join(__dirname, '..', 'public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  publicFiles.forEach(file => {
    const source = path.join(publicDir, file);
    const dest = path.join(distDir, file);
    const stat = fs.statSync(source);
    if (stat.isFile()) {
      fs.copyFileSync(source, dest);
      console.log(`✓ 已复制 ${file}`);
    }
  });
}

console.log('✓ HTML 文件已复制');


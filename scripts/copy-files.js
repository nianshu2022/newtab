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

// 复制 public 目录
const publicDir = path.join(__dirname, '..', 'public');
const distPublicDir = path.join(distDir, 'public');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(publicDir)) {
  copyDirectory(publicDir, distPublicDir);
  console.log('✓ public 目录已复制');
}

// 同时创建 img 目录的符号链接或直接复制到 dist/img（为了兼容性）
const publicImgDir = path.join(publicDir, 'img');
const distImgDir = path.join(distDir, 'img');
if (fs.existsSync(publicImgDir)) {
  if (!fs.existsSync(distImgDir)) {
    fs.mkdirSync(distImgDir, { recursive: true });
  }
  copyDirectory(publicImgDir, distImgDir);
  console.log('✓ img 目录已复制到 dist/img');
}

// 删除可能存在的旧 _redirects 文件（如果有问题）
const oldRedirects = path.join(distDir, '_redirects');
if (fs.existsSync(oldRedirects)) {
  fs.unlinkSync(oldRedirects);
  console.log('✓ 已删除旧的 _redirects 文件');
}


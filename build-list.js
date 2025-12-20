const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'img');
const outputFile = path.join(__dirname, 'images.json');

// 支持的后缀
const supportedExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];

try {
    const files = fs.readdirSync(imgDir)
        .filter(file => supportedExts.includes(path.extname(file).toLowerCase()));
    
    fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
    console.log(`成功生成清单：找到 ${files.length} 张图片`);
} catch (err) {
    console.error('读取目录失败:', err);
    process.exit(1);
}
const fs = require('fs');
const path = require('path');

// 强制使用当前脚本所在目录
const imgDir = path.join(process.cwd(), 'img');
const outputFile = path.join(process.cwd(), 'images.json');

const supportedExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];

try {
    // 如果没有 img 目录，创建一个空的防止报错
    if (!fs.existsSync(imgDir)) {
        console.error('错误：未找到 img 目录！');
        fs.mkdirSync(imgDir);
    }

    const files = fs.readdirSync(imgDir)
        .filter(file => supportedExts.includes(path.extname(file).toLowerCase()));
    
    fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
    console.log(`✅ 成功！找到 ${files.length} 张图片并生成了 images.json`);
} catch (err) {
    console.error('❌ 构建失败:', err);
    process.exit(1);
}
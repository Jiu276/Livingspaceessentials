const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/article', (req, res) => {
    res.sendFile(path.join(__dirname, 'article.html'));
});

app.listen(PORT, () => {
    console.log(`\n✨ Opus博客服务器已启动！`);
    console.log(`🚀 访问地址: http://localhost:${PORT}`);
    console.log(`\n📝 按 Ctrl+C 停止服务器\n`);
});
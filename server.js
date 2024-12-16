// Import express
const express = require('express');

// Tạo một ứng dụng express
const app = express();

// Cấu hình port
const PORT = process.env.PORT || 3000;

// Cung cấp static files (HTML, CSS, JS)
app.use(express.static('public'));

// Định nghĩa route cho trang chủ (home)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  // Trả về tệp index.html
});

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

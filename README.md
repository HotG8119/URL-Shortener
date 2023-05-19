# URL-Shortener 介紹

讓使用者縮短網址

### 功能

- 使用者可以輸入網址，並縮短網址
- 使用者可以直接複製短網址，並貼上瀏覽器網址列，進入原本網站
- 如果輸入不存在的短網址時，會顯示錯誤訊息

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. clone 此專案到本地
3. 在本地透過終端機進入資料夾，輸入：

```bash
npm install
```

4. 新增 .env 檔案，並輸入 MongoDB 連線字串

```bash
MONGODB_URI = "<你的連線字串>"
```

5. 在終端機輸入以下字串，製作種子資料

```bash
npm run seed
```

6. 安裝完成後，輸入：

```bash
npm run dev
```

7. 若看見此行訊息則代表順利運行：

```bash
Express is running on http://localhost:3000
mongodb connected!
```

8. 使用瀏覽器，進入以下網址：

```bash
http://localhost:3000
```

9. 停止使用：

```bash
ctrl + c
```

## 開發工具

- Bootstrap 5.3.0
- dotenv 16.0.3
- mongoose 5.13.17
- Node.js 14.16.0
- Nodemon 2.0.22
- Express.js 4.18.2
- Express-Handlebars 3.0.0
- Font-Awesome 6.3.0

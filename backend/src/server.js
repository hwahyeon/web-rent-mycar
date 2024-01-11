const express = require("express");
const connectDB = require("./db"); // db.js 모듈 불러오기
const cors = require("cors"); // CORS 미들웨어 추가
const app = express();
const carsRouter = require("./routes/cars");
const bookingsRouter = require("./routes/booking");

connectDB();

// 미들웨어: JSON 파싱
app.use(express.json());

// CORS 설정
app.use(cors());

// 라우팅 설정
app.use("/", carsRouter);
app.use("/cars", carsRouter);
app.use("/booking", bookingsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const connectDB = require("./db"); // db.js 모듈 불러오기
const app = express();
const carsRouter = require("./routes/cars");
const bookingsRouter = require("./routes/bookings");

connectDB();

// 미들웨어: JSON 파싱
app.use(express.json());

// 라우팅 설정
app.use("/cars", carsRouter);
app.use("/bookings", bookingsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// cars.js

const express = require("express");
const router = express.Router();

// 차량 목록 조회
router.get("/", (req, res) => {
  // 여기에 차량 목록을 조회하는 로직을 추가할 수 있습니다.
  res.json({ cars: ["car1", "car2", "car3"] });
});

// 차량 상세 정보 조회
router.get("/:carId", (req, res) => {
  const { carId } = req.params;
  // 여기에 특정 차량의 상세 정보를 조회하는 로직을 추가할 수 있습니다.
  res.json({ car: `Car details for ID ${carId}` });
});

module.exports = router;

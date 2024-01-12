const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

// 차종 검색
router.get("/search/:model", async (req, res) => {
  try {
    const { model } = req.params;
    const cars = await Car.find({ model: new RegExp(model, "i") });
    res.json({ cars });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 차량 정보 조회 (프론트엔드에서 호출할 때 차량 ID를 이용하여)
router.get("/cars/:model", async (req, res) => {
  try {
    const { model } = req.params;
    const cars = await Car.find({ model: new RegExp(model, "i") });
    res.json({ cars });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//--------------------------------------------------------------우선 위에 2개만 참고!! 아래 소스들은 무시!!
// 차량 목록 조회
router.get("/cars", (req, res) => {
  Car.find({}, (err, cars) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ cars });
    }
  });
});

// 차량 상세 정보 조회
router.get("/cars/:carId", (req, res) => {
  const { carId } = req.params;
  Car.findById(carId, (err, car) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ car });
    }
  });
});

// 새로운 차량 추가
router.post("/cars/register", (req, res) => {
  const { model, mileage, year, fuel, details } = req.body;

  // 새로운 차량 생성
  const newCar = new Car({
    model,
    mileage,
    year,
    fuel,
    details,
    // 추가 필드들 여기에 추가 가능
  });

  newCar
    .save()
    .then((savedCar) => {
      res.json({ car: savedCar });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to add a new car" });
    });
});

// 차량 상세 정보 조회
router.get("/cars/:carId", (req, res) => {
  const { carId } = req.params;
  Car.findById(carId, (err, car) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ car });
    }
  });
});

// 차량 정보 수정
router.put("/cars/:carId", (req, res) => {
  const { carId } = req.params;
  const updatedCarData = req.body;

  Car.findByIdAndUpdate(
    carId,
    updatedCarData,
    { new: true },
    (err, updatedCar) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json({ updatedCar });
      }
    }
  );
});

// 차량 삭제
router.delete("/cars/:carId", (req, res) => {
  const { carId } = req.params;
  Car.findByIdAndDelete(carId, (err, deletedCar) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json({ deletedCar });
    }
  });
});

module.exports = router;

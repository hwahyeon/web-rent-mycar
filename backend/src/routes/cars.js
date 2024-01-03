const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

// 샘플 데이터 조회
router.get("/cars", (req, res) => {
  console.log("GET request received for /cars");
  const sampleData = {
    cars: [
      { model: "Car 1", brand: "Brand 1" },
      { model: "Car 2", brand: "Brand 2" },
      { model: "Car 3", brand: "Brand 3" },
    ],
  };
  // JSON 형식으로 데이터 응답
  res.json(sampleData);
});

router.get("/", (req, res) => {
  console.log("GET request received for /");
  res.send("Hello world");
});

// 새로운 차량 추가
router.post("/cars/register", (req, res) => {
  const { model, brand, mileage, productionYear, notes } = req.body;

  // 새로운 차량 생성
  const newCar = new Car({
    model,
    mileage,
    year,
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

// 차량 목록 조회
// router.get("/cars", (req, res) => {
//   Car.find({}, (err, cars) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       res.json({ cars });
//     }
//   });
// });

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

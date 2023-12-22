const connectDB = require("../db"); // db.js 파일을 가져옵니다.
const mongoose = require("mongoose");
const Car = require("../models/carModel");

// MongoDB에 연결
connectDB()
  .then(() => {
    console.log("Connected to MongoDB sampledata.js");

    // 연결된 MongoDB에 데이터 추가
    const sampleCars = [
      {
        model: "모델명1",
        carId: "차량ID1", // 차량ID 필드 추가 - carId 필드는 필수 필드로 정의되어 있습니다.
        mileage: 10000,
        productionYear: 2021,
        notes: "특이사항1",
      },
      {
        model: "모델명2",
        carId: "차량ID2",
        mileage: 20000,
        productionYear: 2022,
        notes: "특이사항2",
      },
      {
        model: "모델명3",
        carId: "차량ID3",
        mileage: 30000,
        productionYear: 2023,
        notes: "특이사항3",
      },
    ];

    // 샘플 데이터 추가
    Car.insertMany(sampleCars)
      .then((result) => {
        console.log("샘플 데이터가 성공적으로 추가되었습니다.");
        console.log(result); // 추가된 데이터 확인
        mongoose.connection.close(); // 작업 완료 후 연결 종료
      })
      .catch((error) => {
        console.error("데이터 추가 중 오류가 발생했습니다:", error);
        mongoose.connection.close(); // 오류 발생 시 연결 종료
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

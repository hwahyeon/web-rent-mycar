const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String, // 차종
  carId: { type: String }, // 차량ID (문자열 형식, 선택적 필드)
  mileage: Number, // 주행거리 (숫자 형식)
  year: Number, // 차량연식 (숫자 형식)
  details: String, // 특이사항 (문자열 형식)
  // 다른 차량 관련 필드들을 여기에 추가할 수 있습니다.
});

module.exports = mongoose.model("Car", carSchema);

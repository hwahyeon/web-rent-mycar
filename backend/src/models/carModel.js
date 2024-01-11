const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String, // 차종
  carId: { type: String }, // 차량ID (문자열 형식, 선택적 필드)
  mileage: Number, // 주행거리 (숫자 형식)
  year: Number, // 차량연식 (숫자 형식)
  fuel: String, // 연료방식 (휘발유, 경유, 전기 등)
  details: String, // 특이사항, 기타사항(소형, 중형 등) (문자열 형식)
  // 다른 차량 관련 필드들을 여기에 추가할 수 있습니다.
});

module.exports = mongoose.model("Car", carSchema);

const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String,
  // 다른 차량 관련 필드들을 여기에 추가할 수 있습니다.
});

module.exports = mongoose.model("Car", carSchema);

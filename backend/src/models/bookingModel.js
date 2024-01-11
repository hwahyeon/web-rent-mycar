const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  // 추가 필드들을 여기에 정의할 수 있습니다.
});

module.exports = mongoose.model("Booking", bookingSchema);

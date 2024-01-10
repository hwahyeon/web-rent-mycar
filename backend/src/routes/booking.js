const express = require("express");
const router = express.Router();

// 예약 정보 추가
router.post("/", (req, res) => {
  const { carId, userId, date } = req.body;
  // 여기에 예약 정보를 추가하고 성공 또는 실패에 따른 응답을 보냅니다.
  res.json({ message: "Booking successful!" });
});

// 예약 정보 조회
router.get("/:bookingId", (req, res) => {
  const { bookingId } = req.params;
  // 여기에 특정 예약 정보를 조회하는 로직을 추가할 수 있습니다.
  res.json({ booking: `Booking details for ID ${bookingId}` });
});

// 새로운 예약 정보 추가 (예약 시 예상 주행거리 입력)
router.put("/:bookingId/expected-mileage", (req, res) => {
  const { bookingId } = req.params;
  const { expected_mileage } = req.body;

  Booking.findByIdAndUpdate(
    bookingId,
    { expected_mileage },
    { new: true },
    (err, updatedBooking) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json({ updatedBooking });
      }
    }
  );
});

// 새로운 예약 정보 추가 (자동차 반납 시 실제 주행거리 입력)
router.put("/:bookingId/actual-mileage", (req, res) => {
  const { bookingId } = req.params;
  const { actual_mileage } = req.body;

  Booking.findByIdAndUpdate(
    bookingId,
    { actual_mileage },
    { new: true },
    (err, updatedBooking) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json({ updatedBooking });
      }
    }
  );
});

module.exports = router;

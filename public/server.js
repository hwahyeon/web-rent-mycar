const express = require("express");
const app = express();

// 여기에 미들웨어와 라우팅을 추가하세요
//
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/users", (req, res) => {
  // GET /users 엔드포인트에 대한 처리 로직
  res.send("GET request to /users endpoint");
});

app.post("/users", (req, res) => {
  // POST /users 엔드포인트에 대한 처리 로직
  res.send("POST request to /users endpoint");
});

app.put("/users/:id", (req, res) => {
  // PUT /users/:id 엔드포인트에 대한 처리 로직
  const userId = req.params.id;
  res.send(`PUT request to /users/${userId} endpoint`);
});

app.delete("/users/:id", (req, res) => {
  // DELETE /users/:id 엔드포인트에 대한 처리 로직
  const userId = req.params.id;
  res.send(`DELETE request to /users/${userId} endpoint`);
});

app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

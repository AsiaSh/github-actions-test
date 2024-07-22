import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Health check!!!");
});
app.listen(PORT, () => {
  console.log(`Server running at Port :${PORT}`);
});

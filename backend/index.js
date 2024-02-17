import express from "express";
import "dotenv/config";

const app = express();
const port = 8000;

// Test API
app.get("/api/test", async (req, res) => {
  res.json({ message: "Test api working" });
});

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
);

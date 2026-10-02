import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

/** Simple check that the API process is up (no database yet). */
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

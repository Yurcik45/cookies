const express = require("express")

const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")

  next()
})

app.get("/", (req, res) => {
  res.json("hello from /")
})


app.listen(5000, () => console.info("server is start in port 5000"))

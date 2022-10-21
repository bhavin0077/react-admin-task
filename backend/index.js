const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


// Chart data
const data = [
  {
    labels: ["January",
     "February",
      "March",
       "April",
        "May"
        , "June"
         ,"July"],
    values: [20, 15, 30, 40, 25, 50, 15],

    data: [
      {
        values: [20, 15, 30, 40, 25, 50, 15],
      },
      {
        values: [10, 25, 35, 40, 50, 25, 5],
      },
    ],
  },
];

app.get("/data", (req, res) => {
  res.json(data);
});

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Task is running at http://localhost:${port}`);
});

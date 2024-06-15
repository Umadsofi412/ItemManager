const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ItemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected");
});

app.use('/api',ItemRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

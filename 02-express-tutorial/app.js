const express = require("express");
const app = express();
let { people } = require("./data");


// static assets
app.use(express.static('./methods-public')) // middleware to all urls

// GET = Read data
app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data: people})
})

// POST = Insert Data

// Put = Uodate Data
// Delete = Delete Data

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
  });

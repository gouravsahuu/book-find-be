const express = require("express");
const { connection } = require("./Configs/db");
const {bookRoute} = require("./Routes/book.routes");
const cors = require("cors");
require("dotenv").config();
const port = process.env.port;


const app = express();
app.use(cors());
app.use(express.json());
app.use("/",bookRoute);

app.listen(port,async () => {
    try{
        await connection;
        console.log("Connected to Database");
        console.log(`Server is running at port ${port}`);
    }
    catch(err){
        console.log(err.message);
    }
})


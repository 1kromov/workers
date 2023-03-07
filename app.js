const express = require ("express");
const config = require ("config");
const mongoose = require ("mongoose");

const PORT = config.get("port");

const routes = require("./routes/index.routes");

const app = express();
app.use(express.json());
app.use(routes);

async function start(){
    try {
        await mongoose.connect(config.get("dbUri"))
        app.listen(PORT, ()=>{
            console.log(`Server ${PORT}da ishga tushdi`);
        })
    }catch(error){
        console.log("Serverda xatolik");
    }
}
start();
const express = require("express");
const cors  = require("cors")
;const app = express();

app.use(express.static("public"));

app.use(cors({origin: "*"}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use("/prompt", require('./routes/text.js'));

app.use("/assessQuestion", require("./routes/assesQuestion.js"))

app.use((req, res)=>{
    res.end("PAGE NOT FOUND");
})

const serverPort = process.env.port;
app.listen(serverPort, ()=>{
    console.log(`server running at http://localhost:${serverPort}`);
})
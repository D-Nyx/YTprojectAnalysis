require('dotenv').config()
const express = require("express");
const cors = require("cors")
const app = express();

const apiKey = process.env.API_KEY;
const PORT = process.env.PORT || 4000
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json({
    type: "*/*"
}))
app.use(cors())

app.get("/YTinfo", (req, res) => {
    res.send("Hola")
});


// Recibir info

app.post('/YTinfo',(req, res)=>{
   const VideoTY = req.body.link
   console.log(`${VideoTY }  Analizando... `)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
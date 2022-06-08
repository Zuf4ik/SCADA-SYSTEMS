const { json } = require('express');
const express = require('express');
const app = express();
const WSserver = require('express-ws')(app);
const fs = require('fs')
const data = require('./dataPos.json')
const PORT = process.env.PORT || 5000;


app.ws('/', (ws, req) => {
    console.log('ПОДКЛЮЧЕНО')
    ws.send('ты успешно подключился')
    // ws.send(JSON.stringify(data))
    ws.on('message', (msg) => {
        const finished = (error) =>{
            if(error){
                console.error(error)
                return;
            }
        }
        console.log(JSON.parse(msg))
        fs.writeFileSync('dataPos.json', JSON.stringify(msg),finished);
    })
})

app.listen(PORT, () => console.log('server work', PORT))
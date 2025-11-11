const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.static('public'))

const getData = async() =>{
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await result.json()
        const tableFilas = data.map(item => `
              <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed ?'si' : 'no'}</td>
              </tr>
             `).join('');
             const htmlTemplate = fs.readFileSync('./public/tabla.html', 'utf-8') .replace('<!-- datos de la tabla -->' ,tableFilas);
             fs.writeFileSync('./public/datosApi.html', htmlTemplate)
             console.log('Todo correcto')
    } catch (error) {
        console.log("Error en la obtencion de datos", error)
    }
};
getData().then(() =>{
    app.get('/',(req,res)=>{
        res.sendFile(__dirname + '/public/datosApi.html')
    })
})
app.listen(port, () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
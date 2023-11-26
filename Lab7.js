const express = require('express'); 
const app = express(); 
const port = 8080;  
app.get('/', (req, res) => { res.send('Hello World');}); 
app.get('/kalyani', (req, res) => { res.send('Hello World, from kalyani'); });
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();


const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');

// Servir contenido estático
app.use(express.static('public')); 
// app.get('/',  (req, res) => {
//   //res.send('Hello World!')
//   res.sendFile(__dirname + '\\public\\hola-mundo\\404.html')  
// });

app.get('/',  (req, res) => {
 // res.send('Hello World!')
 // res.sendFile(__dirname + '\\templated-roadtrip\\index.html')
 res.render('home', { titulo: 'Curso de Node JS - MSP ',
                      nombre: 'Jaime Sáenz'});
});

app.get('/hola-mundo',  (req, res)  => {
    res.send('¡Hello World!')
  });

  app.get('/generic',  (req, res)  => {
    res.render('generic', { titulo: 'Curso de Node JS - GENERIC ',
    nombre: 'Jaime Sáenz'});

  });

  app.get('/elements',  (req, res)  => {
    res.render('elements', { titulo: 'Curso de Node JS - ELEMENTS ',
    nombre: 'Jaime Sáenz'});
});
// console.log('Hola mundo');
  
app.get('*', (req, res)  => {
    res.sendFile(__dirname + '\\public\\hola-mundo\\404.html')
});
  
app.listen(port, () => {
    console.log(`Ejemplo aplicación escuchando en: http://localhost: ${port}`);;
})


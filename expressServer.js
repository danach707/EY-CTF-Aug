const express = require('express');
const path = require('path');
const helmet = require('helmet')
const app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res, next) => {
    res.render('home')
});

// app.get('/', (req, res, next) => {
//     res.render('http://52.59.190.126/codeChallange.php')
//     res.render('CTF_AUGUST{"GitLeakForever<3"}')    
// });

app.get('/flag.html', (req, res, next) => {
    res.sendFile('flag.html')
});

app.post('/flag', (req, res, next) => {
    res.render('flag')
});

app.listen(8082);
console.log('app is listening on port 8082');


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

app.get('/admin', (req, res, next) => {

});

app.listen(8081);
console.log('app is listening on port 8081');
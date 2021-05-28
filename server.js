// define varibles
const { response } = require('express');
var express = require('express')
var app = express();
var PORT = 5000
var path = require('path')
var options = { beautify: true };


//static stuff to get react and the jsx (kind of like html files) to work
app.engine('js', require('express-react-views').createEngine(options));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());



// express routes
app.get('/' , (request, response) => {
    response.render('App')
})

app.get('/about' , (request, response) => {
    response.render('about')
})

app.get('/api/info', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'api.json'));
})


app.use(function(request,response){
    response.status(404).render('error404');
});



app.listen(PORT, () => {
    console.log("The server has been started on port " + PORT)
})

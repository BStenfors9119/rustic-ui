/**
 * Created by bstenfors on 12/21/2016.
 */
let cookieParser = require('cookie-parser');
let express = require('express');
let http = require('http');
let path = require('path');
let csrf = require('csurf');
let app = express();

app.use(cookieParser('randomStringisHere222'));
app.use(csrf({cookie:{key:'XSRF-TOKEN',path:'/'}}));

app.set('port', (process.env.PORT || 1850));

app.use('/bundle.js', express.static(__dirname + '/dist/bundle.js'));
app.use('/tms-styles.css', express.static(__dirname + '/dist/tms-styles.css'));
app.use('/mitek-logo-white.png', express.static(__dirname + '/dist/mitek-logo-white.png'));

app.use(function(req, res, next) {
    // console.log(path.extname(req.path));
    if (path.extname(req.path).length > 0) {
        next();
    }  else if(req.path === "/envreq"){
        res.json({env: process.env});
    }else{
        req.url = '/dist/index.html';
        next();
    }
});

app.use(express.static(__dirname + '/'))
    .get('/', function (req, res) {
        res.sendFile('/dist/index.html', {
            root: __dirname + '/'
        });
    });

app.get('/envreq', function (req, res) {
    res.json({env: process.env});
});

let httpsServer = http.createServer(app);

httpsServer.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});


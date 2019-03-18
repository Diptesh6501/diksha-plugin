// import { FrameWorkRouter } from './../routes/framework.router';
// const FrameWorkRouter  = require('./../routes/framework.router');
const  request  = require('supertest');
const  express =  require('express');
const app = express();

// const frameWorkRouter = new FrameWorkRouter()
// app.use('/api/framework/v1', FrameWorkRouter);

request(app)
    .get('/api/framework/v1/read/NCFCOPY/')
    // .expect('Content-Type', /JSON/)
    .expect(200)
    .end(function (err, res) {
        console.log('-----', err);
        if (err) throw err;

    });


request(app)
    .get('/api/framework/v1/read/NCF1')
    // .expect('Content-Type', /json/)
    .expect(404)
    .end(function (err, res) {
        if (err) throw err;
    });

request(app)
.get('/api/framework/v1/read/')
.expect(404)
.end(function(err,res){
    if(err) throw err
})


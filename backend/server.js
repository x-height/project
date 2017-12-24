const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //axios 통신시 필요
app.use(cors);

const user = [
    { username : 'admin', userpass : '1234' },
    { username : 'front', userpass : '1234' },
    { username : 'back', userpass : '1234' }
]

app.post('/login', function(req, res) {
    let id = req.body.username;
    let pass = req.body.userpass;
    let idcheck = user.filter(function(v) {
        return id === v.username;
    });
    if (idcheck.length > 0) {
        if (idcheck[0].userpass === pass) {
            res.json({success : 1, message : '로그인 성공'});
        } else {
            res.json({error : -1, message : 'no match 비밀번호'});
        }
    } else {
        res.json({success : 2, message : 'to 레지스터'});
    }
});

const companyList = require('./data');
app.get('/company', function(req, res) {
    res.json(companyList);
});
app.get('/company/:company_id', function(req, res) {
    console.log(req.params.company_id);
    const all = companyList.company;
    const result = all.filter(function(v) {
        return v.id == req.params.company_id;
    });
    res.json(result[0]);
});
const server = app.listen(4000);
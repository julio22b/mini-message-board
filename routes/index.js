var express = require('express');
var router = express.Router();

let messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date().toString().substring(0, 24),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date().toString().substring(0, 24),
    },
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
    const body = req.body;
    const newMessage = {
        text: body.message,
        user: body.name,
        added: new Date().toString().substring(0, 24),
    };
    messages = messages.concat(newMessage);
    res.redirect('/');
});

module.exports = router;

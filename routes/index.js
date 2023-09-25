const router = require('express').Router();
//const lesson1Controller = require('../controllers/lesson1');
//routes.get('/emily', lesson1Controller.emilyRoute);
//routes.get('/', lesson1Controller.sarahRoute);
//routes.get('/hannah', lesson1Controller.hannahRoute);
//
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tag=['Hello World'];
    res.send('Hello World');
});

router.use('/users', require('./users'));

module.exports = router;
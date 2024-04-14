import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Welcome to Web3 BootStrap App', name: null });
});

router.post('/', (req, res, next) => {
  res.render('index', { title: 'Welcome to Web3 BootStrap App', name: req.body.name });
});

router.get('/page1', (req, res, next) => {
    res.render('page1', { title: 'Welcome to Web3 BootStrap App', name: null });
});

router.get('/page2', (req, res, next) => {
    res.render('page2', { title: 'Welcome to Web3 BootStrap App', name: null });
});

export default router;

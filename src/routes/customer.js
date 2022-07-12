const express = require ('express');
const router = express.Router();

const CusControll = require('../controllers/customerController');

router.get('/', CusControll.list);
router.post('/add', CusControll.save);
router.get('/delete/:id', CusControll.delete);

router.get('/update/:id', CusControll.edit);
router.post('/update/:id', CusControll.update);


module.exports = router;
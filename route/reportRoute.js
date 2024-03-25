const reportController = require('../controller/reportController');
const express = require('express');
router = express.Router();

router.get('/find-by-id/:id', reportController.findByID);
router.post('/create', reportController.create);
router.get('/find-all', reportController.findAll);
router.delete('/delete-by-id/:id', reportController.deleteById);
router.put('/update', reportController.update);

module.exports = router;
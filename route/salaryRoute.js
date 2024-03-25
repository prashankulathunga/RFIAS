const salaryController = require('../controller/salaryController');
const express = require('express');
router = express.Router();

router.get('/find-by-id/:id', salaryController.findByID);
router.post('/create', salaryController.create);
router.get('/find-all', salaryController.findAll);
router.delete('/delete-by-id/:id', salaryController.deleteById);
router.put('/update', salaryController.update);

module.exports = router;
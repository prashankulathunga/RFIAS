const employeeController = require('../controller/employeeController');
const express = require('express');
router = express.Router();

router.get('/find-by-id/:id', employeeController.findByID);
router.post('/create', employeeController.create);
router.get('/find-all', employeeController.findAll);
router.delete('/delete-by-id/:id', employeeController.deleteById);
router.put('/update', employeeController.update);

module.exports = router;
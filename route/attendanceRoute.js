const attendanceController = require('../controller/attendanceController');
const express = require('express');
const router = express.Router();

router.get('/find-by-id/:id', attendanceController.findByID);
router.post('/create', attendanceController.create);
router.get('/find-all', attendanceController.findAll);
router.delete('/delete-by-id/:id', attendanceController.deleteById);
router.put('/update', attendanceController.update);

module.exports = router;
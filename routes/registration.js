const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration/registration');
router.get('/Registeration', registrationController.getRegistration);
router.post('/Registeration', registrationController.postRegistration);

module.exports = router;
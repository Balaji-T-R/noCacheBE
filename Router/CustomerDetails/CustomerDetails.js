const express = require('express');
const router = express.Router();
const customerDetails = require('../../Controller/CustomerDetails/CustomerDetails');

router.get('/CustomerDetails', customerDetails.getCustomerDetailsData);
router.post('/CustomerDetails', customerDetails.insertCustomerDetailsData);

module.exports = router;

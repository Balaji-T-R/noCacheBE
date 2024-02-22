const express = require('express');
const router = express.Router();
const Organisation = require('../../Controller/Organisation/Organisation');

router.get('/Organisation', Organisation.getOrganisationData);
router.post('/Organisation', Organisation.insertOrganisationData);
router.put('/Organisation', Organisation.updateOrganisationData);

module.exports = router;

const express = require('express');
const router = express.Router();

const personsController = require('../controllers/Persons.controller');

router.get('/', personsController.getHome);
router.post('/person', personsController.addPerson);
router.get('/person', personsController.getPersons);
router.delete('/person/:id', personsController.deletePerson);
router.delete('/person', personsController.deleteMany);
router.patch('/person/:id', personsController.updatePerson);
router.post('/person', personsController.addManyPerson);


module.exports = router;


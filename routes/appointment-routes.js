const express = require('express');
const router = express.Router();
const { appointment } = require('../models/appointment-model')
const app = express();

router.get('/', (req, res) =>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const appointment = appointment.findAll();
        res.json(appointment)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', (req,res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const newAppointment = appointment.create({
            ...req.body,
            appointmentId: req.session.appointmentId,
        });

        res.status(200).json(newAppointment);
    }   catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
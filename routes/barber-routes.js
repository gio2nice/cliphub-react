const express = require('express');
const router = express.Router();
const { barber } = require('../models/barber-model')
const app = express();


router.get('/', (req, res) =>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const barber = barber.findAll();
        res.json(barber)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', (req,res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const newBarber = barber.create({
            ...req.body,
            barberId: req.session.barberId,
        });

        res.status(200).json(newBarber);
    }   catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id",(req,res)=>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    barber.findOne({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"this man does not exist",err})
    })
})

router.delete('/:id', async (req, res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const barberData = await barber.destroy({
            where:{
                id: req.params.id,
                barberId: req.session.barberId,
            },
        });

        if(!barberData) {
            res.status(404).json({ message: "No barber found with this id"})
            return;
        }

        res.status(200).json(barberData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', (req, res) => {
    barber.update({
        barber_name: req.body.barber_name,
        bio: req.body.bio,
        barber_password: req.body.barber_password,
        barber_phone_number: req.body.barber_phone_number
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "sheesh, it ain't work", err })
    })
})

module.exports = router;
const express = require('express');
const Barber = require('../models/barber-model');
const router = express.Router();
const { barber } = require('../models/barber-model')
const app = express();

// find all barbers
router.get('/', (req, res) =>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const barber = Barber.findAll();
        res.json(barber)
    } catch (err) {
        res.status(400).json(err);
    }
})
// create a barber
router.post('/', (req,res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const newBarber = Barber.create({ 
            ...req.body,
            barberId: req.session.barberId,
        });

        res.status(200).json(newBarber);
    }   catch (err) {
        res.status(400).json(err);
    }
});
//find one barber
router.get("/:id",(req,res)=>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    Barber.findOne({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"this man does not exist",err})
    })
})
//delete a barber
router.delete('/:id', async (req, res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const barberData = await Barber.destroy({
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
// edit profile
router.put('/:id', (req, res) => {
    Barber.update({
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
//log in
router.post('/login', async (req, res) => {
    try {
        const barberData = await Barber.findOne({ where: { email: req.body.barber_email } });

        if (!barberData) {
            console.log(userData)
            res.status(400).json({ message: "Incorrect login info, try again" });
            return;
        }



        if (!bcrypt.compareSync(req.body.barber_password, barberData.barber_password)) {
            res.status(401).json({ msg: "incorrect login info, try again!" });
            return
        }


        req.session.save(() => {
            req.session.barberId = barberData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: "You are now logged in!" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//log out
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            req.status(404).end();
        });
    } else {
        res.status(404).end();
    }
});

//signUp
router.post('/signUp', async (req, res) => {
    try {
        const barberData = await Barber.create(req.body);
        req.session.save(() => {
            req.session.barber_id = barberData.id;
            req.session.loggedIn = true;
            console.log('sign up ID');
            console.log(barberData.id);
            console.log('~~~');
            console.log(req.session.user);
            // const jsonUser= userData.toJSON();

            res.redirect('/profile');
        });
        // res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
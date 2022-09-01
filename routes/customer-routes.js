const express = require('express');
const Customer = require('../models/customer-model');
const router = express.Router();
const app = express();

// find all customers
router.get('/', (req, res) =>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const customer = Customer.findAll();
        res.json(customer)
    } catch (err) {
        res.status(400).json(err);
    }
})

// create a customer
router.post('/', (req,res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const newCustomer = Customer.create({
            ...req.body,
            barberId: req.session.barberId,
        });

        res.status(200).json(newCustomer);
    }   catch (err) {
        res.status(400).json(err);
    }
});

//find one customer
router.get("/:id",(req,res)=>{
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    Customer.findOne({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"this man does not exist",err})
    })
})

//delete a customer
router.delete('/:id', async (req, res) => {
    if(!req.session.loggedIn){
        res.status(403).json({msg:"must login first!"})
    }
    try {
        const customerData = await Customer.destroy({
            where:{
                id: req.params.id,
                customerId: req.session.customerId,
            },
        });

        if(!customerData) {
            res.status(404).json({ message: "No client found with this id"})
            return;
        }

        res.status(200).json(customerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// edit profile
router.put('/:id', (req, res) => {
    Customer.update({
        customer_name: req.body.customer_name,
        customer_password: req.body.customer_password,
        customer_phone_number: req.body.customer_phone_number
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "sheesh, it ain't work", err })
    })
})

//log in
router.post('/login', async (req, res) => {
    try {
        const customerData = await Customer.findOne({ where: { email: req.body.customer_email } });

        if (!customerData) {
            console.log(customerData)
            res.status(400).json({ message: "Incorrect login info, try again" });
            return;
        }



        if (!bcrypt.compareSync(req.body.customer_password, customerData.customer_password)) {
            res.status(401).json({ msg: "incorrect login info, try again!" });
            return
        }


        req.session.save(() => {
            req.session.customerId = customerData.id;
            req.session.loggedIn = true;

            res.json({ customer: customerData, message: "You are now logged in!" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
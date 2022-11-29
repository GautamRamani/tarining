const express = require('express')
const {  Product } = require("../Model/product")
const { User } = require("../Model/user");
const logger = require("../config/logger")
const router = express.Router();

//Get Products
router.get("/user/product", async (req, res) => {   
    try {
        const getproduct = await Product.find()
        if (!getproduct) {
            res.status(400).send({ success: false })
        }
        res.send(getproduct)
    } catch (error) {
        logger.error(error)
    }
})

//Get User Profile
router.get("/user/profile", async (req, res) => {
    try {
        const userList = await User.find()
        if (!userList) {
            res.status(400).json({ success: false })
        }
        res.send(userList)
    } catch (error) {
        logger.error(error)
    }
})

//Get User Profile by ID
router.get("/user/profile/:id", async (req, res) => {
    try {
        const userbyID = await User.findById(req.params.id)
        if (!userbyID) {
            res.status(400).json({ success: false })
        }
        res.send(userbyID)
    } catch (error) {
        logger.error(error)
    }
})

//Update User Profile

router.put("/profile/:id", async (req, res) => {
    try {
        const userupdate = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                passwordHash: req.body.passwordHash,
                phone: req.body.phone,
                isAdmin: req.body.isAdmin,
                street: req.body.street,
                apartment: req.body.apartment,
                zip: req.body.zip,
                city: req.body.city,
                country: req.body.country
            },
            { new: true }
        )
        if (!userupdate) {
            res.status(400).send('User can not be Created')
        }
        res.send(userupdate);
    } catch (error) {
        logger.error(error)
    }
})

module.exports = router;
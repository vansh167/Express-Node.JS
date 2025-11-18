const express = require('express')
const router = express.Router();
const {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers.js/userController');
//same as app.post, get, put, delete//
router.post("/user", createUser);
router.get("/users", getUsers)
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);



module.exports = router;
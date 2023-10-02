const express = require('express');
const UserController = require('../controllers/usersController');
const verify = require('../tokenVerif');

const router = express.Router();

// router.get("/checkauth", verify.verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verify.verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verify.verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

//update
router.put("/:id", verify.verifyUser, UserController.updateUser);
//Get
router.get('/:id', verify.verifyUser, UserController.getUser);
//Get All
router.get('/', verify.verifyAdmin, UserController.getUsers);
//Delete
router.delete('/:id', verify.verifyUser, UserController.deletetUser);

module.exports = router;
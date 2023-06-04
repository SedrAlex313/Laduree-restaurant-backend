const express = require("express");
const router = express.Router()
const { loginUser, sendLoginCode, loginWithCode } = require("../controllers/userController")
const { getUser } = require("../controllers/userController");
const { 
     protect, 
    adminOnly, 
    supervisorOnly } = 
    require("../middlewares/authMiddleware");
const { 
    registerUser, 
    logoutUser, 
    updateUser, 
    deleteUser, 
    getUsers, 
    loginStatus, 
    upgradeUser, 
    sendAutomatedEmail,
    SendVerificationEmail,
    verifyUser,
    forgotPassword,
    resetPassword,
    changePassword
} = require("../controllers/userController");
const { updateCart } = require("../controllers/customers/cartController");


router.post("/register",registerUser); //  Laduree
router.post("/login",loginUser);     //  Laduree
router.get("/logout",logoutUser);     //  Laduree
router.get("/getUser", protect, getUser); //  Laduree
router.patch("/updateUser", protect, updateUser); //Laduree

router.delete("/:id", protect,adminOnly, deleteUser);
router.get("/getUsers", protect,supervisorOnly, getUsers);
router.get("/loginStatus", loginStatus); 
router.post("/upgradeUser", protect, adminOnly,upgradeUser); 
router.post("/sendAutomatedEmail", protect,sendAutomatedEmail);//Laduree

router.post("/sendVerificationEmail", protect,SendVerificationEmail);//Laduree
router.patch("/verifyUser/:verificationToken", protect,verifyUser); //Laduree
router.post("/forgotPassword",forgotPassword);//Laduree
router.patch("/resetPassword/:resetToken",resetPassword);//Laduree
router.patch("/changePassword",protect,changePassword);//Laduree
router.post("/sendLoginCode/:email", sendLoginCode);
router.post("/loginWithCode/:email", loginWithCode);



module.exports = router
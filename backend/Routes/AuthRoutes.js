const { register, googlelogin,login,editProfile,uploadPic,deletePost,userFeeds,getimage,deleteUsr} = require("../Controllers/AuthControllers");
const {checkUser} = require("../Middlewares/AuthMiddlewares");

const router = require("express").Router();

router.post("/",checkUser);

router.post("/register",register);
// router.post('/account-activation',accountActivation);
router.post('/googlelogin',googlelogin);
router.post("/login",login);
router.post('/editprofile',editProfile);
router.post('/uploadpic',uploadPic);
router.post('/delete',deletePost);
router.post('/feeds',userFeeds);
router.post('/getimage',getimage);
router.post('/deleteUsr',deleteUsr);

module.exports = router;

const router = require("express").Router();
const { signUp, login, myLoggedIn } = require("../controllers/User.controller");
const verifyToken = require("../middlewares/verifyToken");

// DEFINING ROUTES
router.post("/sign-up", signUp);
router.post("/log-in", login);
router.get("/me", verifyToken, myLoggedIn);

module.exports = router;

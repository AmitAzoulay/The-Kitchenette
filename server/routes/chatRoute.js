const authMiddleware = require('../middlewares/authMiddleware')
const express = require("express");
const router = express.Router();

router.get('/chat', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome to the chat!' })
});
module.exports = router;
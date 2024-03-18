const express = require('express');
const handlePrompt = require('../controllers/handePrompt');

const router = express.Router();

router.get("/", async (req, res) => {
    const question = req.query.q || req.query.question;

    console.log(req.query);

    if (!question) {
        return res.status(400).json({
            error: "must include question in your request"
        })
    }
    handlePrompt(question, req, res)
})

router.post("/", async (req, res) => {
    const question = req.body.q || req.body.question;

    if (!question) {
        return res.status(400).json({
            error: "must include question in your request"
        })
    }

    handlePrompt(question, req, res);
})

module.exports = router;
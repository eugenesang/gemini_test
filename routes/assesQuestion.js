const express = require('express');
const assessStudent = require('../controllers/studentAsesser');

const router = express.Router();

router.post("/", async (req, res)=>{
    console.log(req.body.answer);
    try {
        const answer = req.body.answer;

        if(!answer) throw "No answer";

        const question = {
            question:  "What is the central conflict driving the play?",
            marks: 5
        };

        const response = await assessStudent(question, answer);

        res.send(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
})

module.exports = router;
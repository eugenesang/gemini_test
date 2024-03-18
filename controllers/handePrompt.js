const { genAI } = require("../setup");

async function handlePrompt(prompt, req, res) {
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.json({
            answer: text
        })
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = handlePrompt;
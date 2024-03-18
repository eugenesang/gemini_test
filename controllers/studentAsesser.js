const { genAI } = require("../setup");

function cleanPrompt (question, answer){
    return `English Exam
    Subject: Literature,
    Topic: Book Review,
    Book: The Caucasian Chalk Circle by Bertolt Brecht
    maximum score attainable: ${question.marks}

    question: "${question.question}"
    students response: ${answer}

    
    how should I respond on how the student performed in json in the structure
    {
        "score": "Number",
        "remarks": "e.g very good, excellent, failed",
        "comments": "what can be done or how the student did"
    }
    `
}

async function assessStudent(question, studentResponse) {
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = cleanPrompt(question, studentResponse)

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        return text
    } catch (error) {
        throw error;
    }
}

module.exports = assessStudent;
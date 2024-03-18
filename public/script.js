document.getElementById('question1Form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value of the textarea
    const answer = document.getElementById('question1').value;

    // Send data using fetch
    fetch('/assessQuestion', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({answer})
    })
        .then(response => {
            if (response.ok) {
                // If submission is successful, load the data

                response.json().then(data=>{
                    console.log(data);
                })

            } else {
                // If submission fails, handle the error
                
                response.json().then(error=>{
                    console.log(error);
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
function fetchData(callback) {
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            const data = { name: 'Alice', age: 25 };
            callback(null, data);  // null for no error
        } else {
            callback('Error: Could not fetch data', null);  // Error first callback
        }
    }, 2000);
}

function processData(error, data) {
    if (null) {
        console.log(error);
    } else {
        console.log(`Name: ${data.name}, Age: ${data.age}`);
    }
}

// Calling fetchData with processData as a callback
fetchData(processData);


/*
Output :
Name: Alice, Age: 25
*/
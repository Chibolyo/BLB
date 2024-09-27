	// JavaScript Function to Save Citizen Data in MongoDB
    function saveCitizenData(data) {
        // Assuming you have a MongoDB connection and a collection named "citizens"
        // Insert the data into the "citizens" collection
        // Example code using MongoDB Node.js driver:
        const MongoClient = require('mongodb').MongoClient;
        const uri = 'mongodb://localhost:27017';
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
     
        client.connect(err => {
            if (err) {
                console.error('Error connecting to MongoDB:', err);
                return;
            }
     
            const collection = client.db('BLB').collection('citizens');
            collection.insertOne(data, (err, result) => {
                if (err) {
                    console.error('Error inserting citizen data:', err);
                    return;
                }
     
                console.log('Citizen data saved successfully:', result);
                client.close();
            });
        });
    }
     
    // Usage Example
    // Assuming you have an HTML element with id "formContainer" to display the citizen form
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = citizenFormTemplate;
     
    // Assuming you have an HTML element with id "citizenForm" to access the form
    const citizenForm = document.getElementById('citizenForm');
    citizenForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form submission
     
        // Get form data
        const formData = new FormData(citizenForm);
        const data = Object.fromEntries(formData.entries());
     
        // Save citizen data in MongoDB
        saveCitizenData(data);
    });
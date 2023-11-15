const mongoose = require('mongoose');
mongodb+srv://chibolyoc:<2nvty968UScDaWW3>@cluster0.oc2ngux.mongodb.net/

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chibolyoc:<2nvty968UScDaWW3>@cluster0.oc2ngux.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


 
/**
 * Function to connect to MongoDB for the Citizens Application.
 *
 * @param {string} BLB - The name of the database to connect to.
 * @returns {Promise} A promise that resolves when the connection is successful, or rejects with an error.
 */
async function connectToMongoDB(BLB) {
    try {
        // Connect to MongoDB using the provided database name
        await mongoose.connect(`mongodb://localhost/${BLB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
 
        console.log(`Connected to MongoDB database: ${BLB}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}
 
// Usage Example for connectToMongoDB function
connectToMongoDB('citizens')
    .then(() => {
        // Perform operations on the MongoDB database
        console.log('Connected to MongoDB successfully!');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });
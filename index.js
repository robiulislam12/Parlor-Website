const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();



//Initialize a express app
const app = express()
const port = process.env.PORT || 5000;

//express middleware
app.use(cors())
app.use(express.json())

/*======================================================
                Database
========================================================*/
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nbyjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run(){

    try{
        await client.connect();
        

        //Create a Database 
        const database = client.db('jerins_parlour');
        //Service collection
        const serviceCollection = database.collection('services');

        





    } 
    finally {
        // await client.close();
    }
}

run().catch(console.dir);







//First GET api for check
app.get('/', (req, res)=>{
    res.send('<h1>Node JS server is running</h1>')
})

//listening the port
app.listen(port, ()=>{
    console.log(`Server is running, http://localhost:${port}`)
})



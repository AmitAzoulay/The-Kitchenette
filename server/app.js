const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();


async function main() {
    const client = new MongoClient(process.env.MONGO_URL)

    try {
        await client.connect();
        console.log('Connected to MongoDB')
        console.log(process.env.DB_NAME)
        const db = client.db(process.env.DB_NAME)

        app.use(express.json())

        app.get('/', async (req, res) => {
            res.send('Server is running and connected to MongoDB!')
        })


        app.listen(process.env.PORT, () => {
            console.log(`Server listening on http://localhost:${process.env.PORT}`)
        })

    } catch (err) {
        console.error('Failed to connect to MongoDB:', err)
        process.exit(1)
    }
}

main()

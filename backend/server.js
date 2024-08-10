import express from 'express';
import dotenv from 'dotenv';
import connectdb from './database.js'

const app = express();
dotenv.config();

app.get('/products', (req, res) => {

})

const PORT = process.env.PORT || 7000;

//Database Connect
connectdb();

app.listen(PORT, () => {
	console.log("Server started at http://localhost:5000");
});
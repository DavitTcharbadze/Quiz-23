import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; 
import { Cars } from './models/cars.js';
import { connectDB } from './services/database.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())

connectDB()

app.get('/api/cars', async (req, res) => {
    try {
        const cars = await Cars.find({})
        res.json(cars)
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: "Internal server error" })
    }
})

app.get('/api/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Cars.findById(id);
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.json(car);
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: "Internal server error" })
    }
})

app.put('/api/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Cars.findById(id);
        if (!car) {
            return res.status(404).send('Car not found');
        }
        const result = await Cars.updateMany({color: "Cyan"}, {color: "Silver"})
        res.json(result);
    } catch (error) {
        console.error("Error handling request:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

app.delete('/api/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Cars.findById(id);
        if (!car) {
            return res.status(404).send('Car not found');
        }

        const result = await Cars.deleteOne({_id: `${id}`})
        res.json(result)
    } catch (error) {
        console.error("Error handling request:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
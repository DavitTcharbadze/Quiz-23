import { mongoose }  from "mongoose";

const carSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    mileage: {
        type: Number
    }
})

const Cars = mongoose.model("Cars", carSchema)

export { Cars }
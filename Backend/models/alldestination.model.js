import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    });
const Destination = mongoose.model('Destination', destinationSchema, 'destination');

export default Destination;

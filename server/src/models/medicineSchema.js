import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
    medImg: {
        type: String
    },
    brandName: {
        type: String,
        required: true,
    },
    genericName: {
        type: String,
        required: true,
    },
    dosageForm: String,
    strength: String,
    batchNumber: {
        type: String,
        unique: true,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    manufacturingDate: {
        type: Date,
        required: true,
    },
    price: Number,
    storageInstructions: String,
    directionsForUse: String,
    warningsAndPrecautions: String,
    contraindications: String,
    ingredients: [String], // Assuming an array of ingredient names
    manufacturer: {
        name: String,
        address: String,
    },
    registrationNumber: String,
    barcode: String,
});

export default mongoose.model('Medicine', medicineSchema)


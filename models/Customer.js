const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const customerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        auto:true
    },
    guid: {
      type: String,
      default: uuidv4, // Automatically generate a GUID
      unique: true, // Ensure it is unique
    },
    name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        match: /^\d{10}$/ // Validates a 10-digit mobile number
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true,
            match: /^\d{6}$/ // Validates a 5-digit zip code
        }
    },
    idProof: {
        type: String,
        required: true // e.g., "Aadhar", "Passport"
    },
    idProofValue: {
        type: String,
        required: true // Value of the ID proof (e.g., Aadhar number)
    },
    bookColour: {
        type: String,
        required: false // Optional field
    },
    middlePerson: {
        type: String,
        required: false // Optional field
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastPurchaseDate: {
        type: Date,
        required: false // Optional field
    },
    pendingBillAmount: {
        type: Number,
        required: false,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false // Indicates if the record is deleted
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;


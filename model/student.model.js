const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Add this line if names should be unique within a batch
    },
    batch: {
        type: String,
        required: true
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
        default: null, // Set default to null to make mentor optional
    }
});

module.exports = mongoose.model('Student', studentSchema);

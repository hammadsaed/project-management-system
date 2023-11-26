const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Project', projectSchema);

const mongoose = require("mongoose");

const touristPlaceSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: [true, 'Place name is required']
    },
    reviews: [
        {
            rating: Number,
            comment: String
        }
    ],
    distanceFromFamousLocation: {
        type: Number,
        required: [true, 'Distance is required']
    }
});

const stateSchema = new mongoose.Schema({
    stateName: {
        type: String,
        required: [true, 'State name is required']
    },
    touristPlaces: [touristPlaceSchema]
});

const stateModel = mongoose.model('State', stateSchema);

module.exports = stateModel;

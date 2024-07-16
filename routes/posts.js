const mongoose=require('mongoose');
const postSchema = new mongoose.Schema({
    name: String,
    email: String,
    occasion: String, // Birthday, Kitty, etc.
    meal: String, // Breakfast, Lunch, etc.
    guests: Number,
    date: Date,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    time: String,
    additionalRequirements: [String], // Cleaner, Utensils, etc.
});

module.exports = mongoose.model('Post', postSchema);



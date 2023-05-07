import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    userId: { type: String, unique: true },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: false,
    },
});

export default mongoose.model("Users", UserSchema);
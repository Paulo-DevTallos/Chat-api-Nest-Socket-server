import mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema({
    user: String,
    email: String,
    password: String,
})
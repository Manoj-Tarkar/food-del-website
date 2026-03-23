import mongoose from "mongoose";

export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://greatstack:781798@cluster0.f9xepud.mongodb.net/food-del').then(() =>console.log("DB Connected"));
}
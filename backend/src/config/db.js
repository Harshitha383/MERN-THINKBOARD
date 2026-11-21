import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://harshitha2935_db_user:vuslrZrBvgII3aKM@cluster0.i0x49ll.mongodb.net/?compressors=zlib");

      console.log("MONGODB CONNECTED SUCCESSFULLY!")
    } catch (error) {
        console.error("Error connecting to MONGODB:", error);
    }
};  

import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://sampathwgw_db_user:uGw4XAYiOtc1HCNv@cluster0.lcuyegg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("MONGODB CONNECTED SUCCESFULLY")
    } catch(error){
        console.error("Error connecting to MONGODB",error);
        process.exit(1);
    }
};
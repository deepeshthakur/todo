import mongoose from 'mongoose'

const connectDb = async (DATABASE_URL)=>{
    const DB_OPTIONS  = {
        dbName :"tododb"
    }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log("db connected");
}







export default connectDb
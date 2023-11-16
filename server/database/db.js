import mongoose from "mongoose";

export const Connection = async(USERNAME,PASSWORD) =>{
        const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce.5hx7xpr.mongodb.net/?retryWrites=true&w=majority`;
        try {
            await mongoose.connect(URL,{useUnifiedTopology:true ,useNewUrlParser:true});
            console.log("database connected✅✅✅ ")
        } catch (error) {
            console.log("Error while connection to database",error.message);
        }
}
export default Connection
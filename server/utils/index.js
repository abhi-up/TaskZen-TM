import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("DB connection established")
    } catch (error) {
        console.log("DB Error: " + error)
    }
}

export default dbConnection

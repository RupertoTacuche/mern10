import mongoose from "mongoose"

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://murcio2490:hvzDTYyrEnKiZs41@cluster0.xrbfnyb.mongodb.net/mern10?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`DB is connected in: ${url}`)
    } catch (error) {
        console.log>(`error: ${error.messaje}`)
        process.exit(1)
    }
}

export default conectarDB




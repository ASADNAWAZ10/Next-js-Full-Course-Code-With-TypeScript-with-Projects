import {connect} from 'mongoose'

const mongoUrl = process.env.MONGO_URI

if(!mongoUrl){
    throw new Error("mongodb url is not found");
}

let cached = globalThis.mongoose

if(!cached){
    cached = globalThis.mongoose = {conn:null, promise:null}
}

const connectDB = async()=> {
    if(cached.conn){
        console.log("database connection reuse")
        return cached.conn
    }
}

if(!cached.promise){
    console.log("connecting to mongoDB for the first time...")
    cached.promise = connect(mongoUrl).then((c)=>c.connection)
}

try {
    cached.conn = await cached.promise
    console.log("mongo db connected sucessfully into globalThis cache")
} catch (error) {
    throw error
}

export default connectDB



import mongoose from 'mongoose';



const connect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose?.connect(`${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch(error) {
        throw new Error("Cannot Connect To Mongoose");
    }
};

export default connect
const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.nlv2o.mongodb.net/dbCip?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('DB Conectado!');
}

module.exports = connectDB; 
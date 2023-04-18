const mongoose = require('mongoose');

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Banco de dados conectado com sucesso!")
    } catch(error){
        console.error(error)
    }
};

module.exports = {connect};
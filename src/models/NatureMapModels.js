const mongoose = require("mongoose");

const natureMapSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId},

    nomeCientifico: {type: String, require: true, unique: true},
    nomePopular: {type: String, require: true},
    localizacaoNaUfpb: {type: String, require: true},
    caracteristicas: [{type: String, require: true}],
    
},
{
    versionKey: false,
});

const collection = mongoose.model("plantas", natureMapSchema);

module.exports = collection;
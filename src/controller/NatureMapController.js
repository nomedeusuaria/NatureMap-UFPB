const NatureMapModels = require("../models/NatureMapModels");

const addEspecies = async (req, res) => {
    try {
        const {nomeCientifico, nomePopular, localizacaoNaUfpb, caracteristicas} = req.body;
        
        console.log(1);
        const novasPlantas = new NatureMapModels({
            nomeCientifico, nomePopular, localizacaoNaUfpb, caracteristicas
        })
        console.log(1);
        const plantasSalvas = await novasPlantas.save()
        console.log(1);

        res.status(201).json(plantasSalvas)
    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
};

const retornarTodasPlantas = async(req, res) => {
    try {
        const todasPlantas = await NatureMapModels.find()
        res.status(200).json(todasPlantas)
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

const excluirEspeciePorId = async (req, res) => {
    try {
        const {id} = req.params
        const excluirEspecie = await NatureMapModels.findByIdAndRemove(id)

        if( excluirEspecie == null){
            return res.status(404).json({
                message: `A espécie com id: ${id} não foi encontrada`
            })
        }
        await excluirEspecie.remove()

        res.status(200).json({message: `A espécie ${id} foi removida com sucesso.`})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    addEspecies,
    retornarTodasPlantas,
    excluirEspeciePorId,
}
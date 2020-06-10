const {Item} = require('../models');

const ItensController = {
    listar: async (req, res) => {
        const listaDeItens = await Item.findAll();
        return res.status(200).json({listaDeItens});
    },
    create: async (req, res) => {
        const {nome, descricao} = req.body;
        const item = await Item.create({nome, descricao});
        return res.status(200).json({item});
    },
    delete: async (req, res) => {
        const {id} = req.params;
        const resultado = await Item.destroy({
            where:{
                id_item: id
            }
        })
        return res.status(200).json({mensagem: `Item com id: ${id} deletado`});
    }
}

module.exports = ItensController;
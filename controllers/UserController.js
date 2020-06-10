const {Usuario} = require('../models')

const UserController = {
    index: async (req, res) =>{
     const {nome, email, telefone} = req.body
     const [usuario, criado] = await Usuario.findOrCreate({
         where:{
            email: email
         },
         defaults: {
            nome,
            email,
            telefone,
         }
     })

     if(criado){
        return res.status(200).json({usuario})
     }else{
        return res.status(400).json({Message : 'Usuário já cadastrado!'})
     }

    },
    autenticacao: async (req, res) =>{
     const {email} = req.body

     const usuario = await Usuario.findOne({where: {email: email}})

     if(!usuario) return res.status(400).json({erro: 'Email não está cadastrado'})

     return res.json({id: usuario.id_usuario, nome: usuario.nome})
    }
}

module.exports = UserController;
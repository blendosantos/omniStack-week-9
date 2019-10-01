const User = require('../models/User');

module.exports = {

    async store(req, res){
        const {email, nome} = req.body;
        const ativo = false;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email, nome, ativo });
        }

        return res.json(user);
    }

};
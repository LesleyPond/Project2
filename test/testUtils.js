const db = require('../models')

module.exports.createUser = async () => {
    db.User.create({
        id: 1,
        email_address: 'test@test.com',
        password: 'testy'
    })
}
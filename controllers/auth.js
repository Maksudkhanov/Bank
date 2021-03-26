const data = require('../repository/data')

module.exports.login = function(req, res) {

    const candidate = data.username

    if (candidate == req.body.username) {
        res.json(data)
    } else {
        res.json({
            authorized: false
        })
    }
}


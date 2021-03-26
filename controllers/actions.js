const fs = require('fs')
const data = require('../repository/data')

const add = function(req, res) {

    if (!typeof req.body.value == Number) {
        res.json({
            "type of add" : "not a number"
        })
     }
        else {
            const amount = data.amount
            const newAmount = amount + req.body.value 
            data.amount = newAmount
            dataJSON = JSON.stringify(data)
            fs.writeFileSync('repository/info.json', dataJSON)
            res.json(data)
     }
}

const minus = function(req, res) {

    if (!typeof req.body.value == Number) {
        res.json({
            "type of add" : "not a number"
        })
     }
        else {
            const amount = data.amount
            const newAmount = amount - req.body.value
            if (newAmount < 0) {
                res.json({
                    amount: "not enough"
                })
            } else {
                data.amount = newAmount
                dataJSON = JSON.stringify(data)
                fs.writeFileSync('repository/info.json', dataJSON)
                res.json(data)
            } 
            
     }
}


module.exports = {
    add,
    minus
} 
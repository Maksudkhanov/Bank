const fs = require('fs')

class Card{
    constructor(money){
        this.money = money
    }
}

const card1 = new Card(100000)


class User {
    constructor(username, surname, password, amount = card1.money || 0){

    this.username = username;
    this.surname = surname;
    this.password = password;
    this.id = 1;
    this.amount = amount;
    }
    
}

const user1 = new User('saidazizkhon', 'maksukhanov', 'coca-cola')

const userJSON = JSON.stringify(user1);

fs.writeFileSync('repository/info.json', userJSON)


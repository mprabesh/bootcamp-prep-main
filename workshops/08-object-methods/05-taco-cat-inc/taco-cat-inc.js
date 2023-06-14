let tacoCatInc = {
    gourmetShell: {
        'hard treat shell': { cost: 2, quantity: 100 },
        'soft treat shell': { cost: 1.5, quantity: 100 },
    },

    gourmetFishFilling: {
        salmon: { cost: 5, quantity: 100 },
        tuna: { cost: 5.5, quantity: 100 },
        sardines: { cost: 1.5, quantity: 100 },
    },

    gourmetVeggie: {
        'cat grass': { cost: 1, quantity: 100 },
    },

    gourmetSeasoning: {
        'cat nip': { cost: 0.5, quantity: 100 },
        'treat dust': { cost: 0.1, quantity: 100 },
    },

    cash: 0,
    currentInventory: function () {
        let total_value = 0
        for (keys in tacoCatInc) {
            for (keys1 in tacoCatInc[keys]) {
                let tempVal = tacoCatInc[keys][keys1]
                console.log(tempVal, tempVal['cost'], tempVal['quantity'])
                let individual_item = tempVal['cost'] * tempVal['quantity']
                total_value = total_value + individual_item
            }
        }
        if (this.cash !== 0) {
            return total_value
        }
        total_value = total_value + this.cash
        return total_value
    },
    sale: function (order) {
        let finalcost = 0
        for (keys in order) {
            tacoCatInc[keys][order[keys]]['quantity']--
            let items = tacoCatInc[keys][order[keys]]
            finalcost = finalcost + items['cost']
        }
        this.cash = this.cash + finalcost
        // console.log(tacoCatInc.cost)
        return finalcost
    },
}
// console.log(tacoCatInc.currentInventory())

// YOUR CODE BELOW
// let order = {
//     gourmetShell: 'hard treat shell',
//     gourmetFishFilling: 'tuna',
// }
let order = {
    gourmetShell: 'hard treat shell',
    gourmetFishFilling: 'sardines',
    gourmetSeasoning: 'treat dust',
}
// tacoCatInc.sale(order)
// tacoCatInc.sale(order)
// console.log(tacoCatInc.cash)
// console.log(tacoCatInc.gourmetShell['hard treat shell'].quantity)
// console.log(tacoCatInc.gourmetFishFilling['tuna'].quantity)
// console.log(tacoCatInc.cash)
console.log(tacoCatInc.currentInventory())

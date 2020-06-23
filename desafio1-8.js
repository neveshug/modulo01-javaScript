const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

// add transactions

function createTransaction(transacition){
    user.transactions.push(transacition)

    if(transacition.type === "credit"){
        user.balance += transacition.value
    } else {
        user.balance -= transacition.value
    }
}

//transaction report

function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue = 0

    for(let transacition of user.transactions){
        if(transacition.type == type && transacition.value > higherValue){
            higherValue = transacition.value
            higherTransaction = transacition
        }
    }

    return higherTransaction
}

// Average values

function getAverageTransactionValue(){
    let avarege = 0

    for(let transacition of user.transactions){
        avarege = avarege + transacition.value
    }

    return avarege / user.transactions.length
}

// number of transactions

function getTransactionsCount(){
    let sumCredit = 0
    let sumaDebit = 0
    
    for(let transacition of user.transactions){
        if(transacition.type === "credit"){
            sumCredit++
        }else{
            sumaDebit++
        }
    }

    return {credit: sumCredit, debit: sumaDebit}
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())
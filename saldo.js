//usuários definidos como Array de objetos
const users = [
    {
        name: 'Richie',
        incomes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },

    {
        name: 'Billy',
        incomes: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120]
    },

    {
        name: 'Mike',
        incomes: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

//function para cálculo de saldo
function calculateBalance(incomes, expenses) {
    const sumOfIncomes = sumOfNumbers(incomes)
    const sumOfExpenses = sumOfNumbers(expenses)

    return sumOfIncomes - sumOfExpenses
}

//function para soma dos valores
function sumOfNumbers(numbers) {
    let sum = 0

    for (let number of numbers) {
        sum += number
    }

    return sum
}

//loop for para percorrer array
for (let user of users) {
    const balance = calculateBalance(user.incomes, user.expenses)

    if (balance >= 0) {
        console.log(`${user.name} has a positive balance of $ ${balance.toFixed(2)}`)
    } else {
        console.log(`${user.name} has a negative balance of $ ${balance.toFixed(2)}`)
    }
}

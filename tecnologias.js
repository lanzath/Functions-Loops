//Declaração de usuários como um array de objetos
const users = [
    { name: 'Richie', tecnologies: ['HTML', 'CSS', 'JS'] },
    { name: 'Billy', tecnologies: ['Python', 'SQL', 'HTML', 'CSS'] },
    { name: 'Mike', tecnologies: ['C#', 'Assembly', 'COBOL'] }
]

//loop para percorrer o array
for (let user of users) {
    console.log(`${user.name} works with ${user.tecnologies}`)
}

//function para checagem SE usuário trabalha com CSS
function checkIfWorksWithCSS(user) {
    for (let tecnologie of user.tecnologies) {
        if (tecnologie == 'CSS') return true
    }
    return false
}

//loop para buscar quais usuários trabalham com CSS
for (let i = 0; i < users.length; i++) {
    const worksWithCSS = checkIfWorksWithCSS(users[i])

    if (worksWithCSS) {
        console.log(`${users[i].name} works with CSS!`)
    }
}

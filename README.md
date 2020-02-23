# Functions-Loops
Funções e estruturas de repetição

## Desafios para fortalecer alguns conceitos, entre eles:
* Funções e Métodos;
* Estruturas de Repetição;
* Escopos.

## Usuários e tecnologias 
Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

```
const usuarios = [
  { nome: "Richie", tecnologias: ["HTML", "CSS"] },
  { nome: "Billy", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Mike", tecnologias: ["HTML", "Node.js"] }
];
```
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

```
Richie trabalha com HTML, CSS
Billy trabalha com JavaScript, CSS
Mike trabalha com HTML, Node.js
```

## Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean ``true/false``

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário.

## Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo ``(receitas - despesas)``
* Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário
* Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função ``calculaSaldo``
* A função ``calculaSaldo`` deve utilizar a função ``somaNumeros`` para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja ``receitas - despesas``

__No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO__

// usado quando, em uma aplicação, ocorre algo inesperado, como uma API fora do ar, um input incorreto. Nestes casos a aplicação precisa trazer uma resposta ao problema, aí entra o fluxo de exceção, ou seja, um fluxo de execução que vem para tratar algo "inesperado", uma exceção ao funcionamento normal

// throw
// o throw lança uma exceção, por exemplo, um erro qualquer, previsível ou não

// try... catch... finally
// uma vez que o erro seja lançado, o catch vai "capturá-lo" e executar o bloco determinado, que pode ser, por exemplo, uma mensagem/alerta de erro. Este bloco não fica na função que tem o throw (pode ser uma função pro throw e outra pro try... catch)

try {
  'código que se quer executar'
} catch(e) {
  'erro que veio do throw'
}

// ou seja, "tente executar essa função", se não conseguir "entre no bloco catch"
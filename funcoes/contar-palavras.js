const countWords = phrase => phrase.split(' ').length;

// esta é uma versão resumida de uma arrow function. Retorno implícito e parâmetro fora dos parênteses (phrase). Pode-se fazer assim sempre que a função tiver só uma linha de execução (retorno implícito). A do parâmetro, quando tem só um tb.

// EXPLICANDO O FUNCIONAMENTO DA FUNÇÃO:
// ela recebe uma string e o método .split() vai dividí-la sempre que encontrar umm espaço (' '), formando um array.
// depois é só verificar quantos elementos tem esse array, o que vai dizer quantas palavras têm, já que os espaços as separam.
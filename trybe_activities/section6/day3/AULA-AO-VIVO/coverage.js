// pode-se verificar a cobertura dos testes usando o comando
// npm test -- --coverage
// esse comando vai listar uma linha com a cobertura total dos testes, ou sseja, levando em conta todos os arquivos de teste; e depois vai mostrar cada um dos arquivos em cada linha seguinte (os resultados são dados em %)

// o resultado do teste de cobertura possui 5 colunas:
  // % Stats -> statements: são ass declarações feitas (variáveis), as atribuições, o próprio nome da função (let, const)
  // % Branch -> ramificações: códigos como o if (1 ramificação), if/else (2 ramificações), if/else if/else (3 ramificações), switch/case, etc
  // % Funcs -> funções: verifica se as funções estão cobertas. Não indica se foram feitos testes suficientes para a função, só que ela está sendo testada. 100% só indica que existe pelo menos um teste para cada função
  // % Lines -> linhas: indica qual o percentual de linhas que compõem o código que estão cobertas por testes, que estão sendo testadas
    // Uncovered Line: aponta, caso a cobertura de linhas não seja de 100%, onde ficam as linhas não cobertas (as linhas que começam o bloco não coberto)

// ao rodar o comando de cobertura, é gerada uma nova pasta "coverage" dentro do projeto. Coloca-se ela dentro do .gitignore para não ser mandada ao repositório
// nessa pasta existe uma subpasta icov-report e dentro dela um index.html. Executando o live server nesse arquivo obtém-se uma página mostrando uma tabela com os dados e é possível clicar no nome da função e ela mostrará os detalhes de cobertura no próprio código
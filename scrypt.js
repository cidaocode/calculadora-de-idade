// Algoritmo:

// 1. Pegar os valores
// 2. Calcular a Idade
//   a. Com base no ano
//   b. Com mês (EXTRA)
//   c. Com dia (EXTRA)

// 3. Gerar a faixa etária

// Resultado            Faixa
// 0 à 12                Criança
// 13 à 17                Adolescente
// 18 à 65               Adulto
// Acima de 65         Idoso


// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;

alert("tomara que funcione")

function calcular(event) {
    event.preventDefault();

    console.log("foi executada a funcao calcular idade");

    // let nome = dadosUsoario ()

    // let anoNascimento = anoAtual()

    // let mesNascimento = mes()

    // let diaNascimento = dia()

    console.log("valor da idade atual")
    // 1 pegar os valores
    let usuario = dadosUsuario()

    let idadeCalculada = calcularIdade(usuario.ano)

    let classificacaoIdade = faixaIdade(idadeCalculada)

    console.log(classificacaoIdade)



    function dadosUsuario() {

        let nomeRecebido = document.getElementById("nome").value.trim()
        let anoNascimento = document.getElementById("ano-nascimento").value
        let mesNascimento = document.getElementById("mes-nascimento").value
        let diaNascimento = document.getElementById("dia-nascimento").value

        let dadoUsuario = {

            nome: nomeRecebido,
            ano: anoNascimento,
            mes: mesNascimento,
            dia: diaNascimento,


        }
        console.log(dadoUsuario)
        return dadoUsuario;
    }

    function calcularIdade(anoNascimento) {
        let anoAtual = 2023
        let idadeCalculada = anoAtual - anoNascimento
        return idadeCalculada;

    }



    function faixaIdade(idadeCalculada) {


        if (idadeCalculada < 12) {
            return "Crianca"
        } else if (idadeCalculada >= 13 && idadeCalculada < 17) {
            return "Adolescente"
        } else if (idadeCalculada >= 18 && idadeCalculada < 65) {
            return "Adulto"
        } else {
            return "Idoso"
        }
    }
    function organizarDados(dadosUsuario, idadeCalculada, classificacaoIdade) {



        console.log(idadeCalculada)

        let objeto = {
            ...dadosUsuario,
            idade: idadeCalculada,
            situacao: classificacaoIdade,

        }
        return objeto




    }



    return dadosUsuarioAtualizado;
// }

// function cadastrarUsuario(dadosUsuario) {
    // let listaUsuarios = []

    // Se houver uma lista de usuarios no localStorage, carregar isso para a variavel listaUsuarios
    // if (localStorage.getItem("usuariosCadastrados") != null) {
        // listaUsuarios = JSON.parse( localStorage.getItem("usuariosCadastrados") )
    // }

    // Adiciona o usuario na lista de usuarios
    // listaUsuarios.push(dadosUsuario)

    // Salva a listaUsuarios no localStorage
    // localStorage.setItem("usuariosCadastrados",  JSON.stringify(listaUsuarios) )








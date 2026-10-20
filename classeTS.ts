//==============================================================================
// Camada Repository
// No futuro 
//    - estará dentro da pasta repositories (camada responsavel apenas pelo banco)
//    - Trocaremos a implementação de salvamento dentro de array para tabela
//==============================================================================

// Esse cara é responsavel pelo armazenamento
class LivroRepository {

    private livros:Livro[] = [];

    //adiciona o livro no banco de dados(array livros)
    salvar(livro:Livro):void{
        // adicionar no array
        this.livros.push(
            {
                titulo: livro.titulo,
                subtitulo: livro.subtitulo,
                isbn: livro.isbn,
                editora: livro.editora,
                ano:livro.ano
            }
        )
    };

    //obter todos os livros que foram salvos
    consultarLivros():void{
        console.log(this.livros)
    }
}


//===========================================================================================
// Camada Model
// No futuro estará dentro da pasta models (camada que fica responsavel apenas pelos objetos)
//===========================================================================================

// Esse cara respresenta um livro
class Livro {
    // atributos da classe
    titulo:string;
    subtitulo:string;
    isbn:string;
    editora:string;
    ano:number;

    //metodo construtor
    //chamado ao instanciar a classe (ao usar new)
    constructor(titulo:string,subtitulo:string,isbn:string,editora:string,ano:number){
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.isbn = isbn;
        this.editora = editora;
        this.ano = ano
    }
}


//===========================================================================================
// Testando a aplicação
//===========================================================================================

//cria o livro do racionais
const racionais = new Livro(
    "Racionais Mcs",
    "sobrevivendo no inferno",
    "978-85-359-3173-0",
    "Companhia das Letras",
    2018
);

// objeto que representa a tabela livros
const tabelaLivros = new LivroRepository()


//salva e consulta todos os livros cadastrados
tabelaLivros.salvar(racionais)
tabelaLivros.consultarLivros()
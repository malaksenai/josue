
class Pratos {
    constructor(
        public nome: string,
        public dataValidade: Date,
        public nacionalidade: string
    ) {}
}

class FuncionarioGeral {
    constructor(
        public nomeFuncionario: string,
        public sexo: string,
        public dataContratacao: Date,
        public cpf: string,
        public rg: string
    ) {}
}

class FuncionarioContratado extends FuncionarioGeral {
    constructor(
        nomeFuncionario: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string,
        public salariofixo: number,
        public horasTrabalhadas: number
    ) {
        super(nomeFuncionario, sexo, dataContratacao, cpf, rg);
    }
}

class FuncionarioFreelancer extends FuncionarioGeral {
    constructor(
        nomeFuncionario: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string,
        public salariohora: number,
        public dataLimiteContrato: Date,
        public horasTrabalhadas: number
    ) {
        super(nomeFuncionario, sexo, dataContratacao, cpf, rg);
    }
}

class Entrega {
    constructor(
        public dataHoraSaida: Date,
        public numeroPedido: number,
        public enderecoEntrega: string
    ) {}
}

// OBJETOS

const funcionario1 = new FuncionarioContratado(
    "Davi Yuri dos Santos",
    "Feminino",
    new Date(2026, 6, 6),
    "123.456.678-67",
    "19.569.170-2",
    67000,
    160
);

const funcionario2 = new FuncionarioFreelancer(
    "Davi Malachias Cruz",
    "Masculino",
    new Date(2026, 6, 7),
    "123.456.678-67",
    "19.569.170-2",
    190,
    new Date(2026, 11, 5),
    40
);

const feijoada = new Pratos(
    "Feijoada",
    new Date(2026, 6, 7),
    "Brasil"
);

const entrega1 = new Entrega(
    new Date(2026, 6, 7, 14, 30),
    1001,
    "Rua das Flores, 123"
);

// ARRAYS

const funcionarios: FuncionarioGeral[] = [
    funcionario1,
    funcionario2
];

const pratos: Pratos[] = [
    feijoada
];

const entregas: Entrega[] = [
    entrega1
];

// 1 - RELATORIO DE FUNCIONARIOS

console.log("=== FUNCIONARIOS ===");

for (const funcionario of funcionarios) {
    console.log("Nome:", funcionario.nomeFuncionario);
    console.log("Sexo:", funcionario.sexo);
    console.log("CPF:", funcionario.cpf);
    console.log("RG:", funcionario.rg);
    console.log(
        "Data de contratacao:",
        funcionario.dataContratacao.toLocaleDateString("pt-BR")
    );

    if (funcionario instanceof FuncionarioContratado) {
        console.log("Tipo: Contratado");
    } else if (funcionario instanceof FuncionarioFreelancer) {
        console.log("Tipo: Freelancer");
    }

    console.log("--------------------");
}

// 2 - RELATORIO DE PRATOS

console.log("=== PRATOS ===");

for (const prato of pratos) {
    console.log("Nome:", prato.nome);
    console.log(
        "Validade:",
        prato.dataValidade.toLocaleDateString("pt-BR")
    );
    console.log("Nacionalidade:", prato.nacionalidade);
    console.log("--------------------");
}

// 3 - RELATORIO DE SALARIOS

console.log("=== SALARIOS ===");

for (const funcionario of funcionarios) {
    console.log("Funcionario:", funcionario.nomeFuncionario);

    if (funcionario instanceof FuncionarioContratado) {
        console.log("Salario fixo:", funcionario.salariofixo);
        console.log("Horas trabalhadas:", funcionario.horasTrabalhadas);
    } else if (funcionario instanceof FuncionarioFreelancer) {
        const pagamento =
            funcionario.salariohora * funcionario.horasTrabalhadas;

        console.log("Valor por hora:", funcionario.salariohora);
        console.log("Horas trabalhadas:", funcionario.horasTrabalhadas);
        console.log("Pagamento:", pagamento);
    }

    console.log("--------------------");
}

// 4 - RELATORIO DE ENTREGAS

console.log("=== ENTREGAS ===");

for (const entrega of entregas) {
    console.log(
        "Data e hora:",
        entrega.dataHoraSaida.toLocaleString("pt-BR")
    );
    console.log("Pedido:", entrega.numeroPedido);
    console.log("Endereco:", entrega.enderecoEntrega);
    console.log("--------------------");
}

// 5 - RELATORIO DE CONTRATOS

console.log("=== CONTRATOS FREELANCERS ===");

const hoje = new Date();

for (const funcionario of funcionarios) {
    if (funcionario instanceof FuncionarioFreelancer) {
        const limite = funcionario.dataLimiteContrato;
        const ativo = hoje <= limite;

        let diasRestantes = Math.ceil(
            (limite.getTime() - hoje.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        if (diasRestantes < 0) {
            diasRestantes = 0;
        }

        console.log("Nome:", funcionario.nomeFuncionario);
        console.log("Contrato ativo:", ativo ? "Sim" : "Nao");
        console.log("Dias restantes:", diasRestantes);
        console.log("--------------------");
    }
}

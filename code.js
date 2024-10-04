const readline = require('readline');

// Criando a interface para ler entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Classe Hero
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'uma habilidade desconhecida';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Função para capturar entradas
const capturarEntradas = () => {
    rl.question('Digite o nome do herói: ', (nomeHeroi) => {
        rl.question('Digite a idade do herói: ', (idadeHeroi) => {
            rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipoHeroi) => {
                // Criação do herói
                const heroi = new Hero(nomeHeroi, parseInt(idadeHeroi), tipoHeroi);

                // Chamada do método atacar
                heroi.atacar();

                // Fecha a interface readline
                rl.close();
            });
        });
    });
};

// Inicia a captura de entradas
capturarEntradas();

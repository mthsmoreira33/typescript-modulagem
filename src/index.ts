class Contador {
    private _num: number;
    constructor(num: number) {
        this._num = num;
    }

    public zerar(): void {
        this._num = 0;
    }

    public incrementar(): void {
        this._num++;
    }

    public retornarValor(): number {
        return this._num;
    }
}

const contador1 = new Contador(1);
contador1.zerar();
contador1.incrementar();
console.log(contador1.retornarValor());

class Bola {
    private _cor: string;
    private _circunferencia: number;
    private _material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this._cor = cor;
        this._circunferencia = circunferencia;
        this._material = material;
    }

    public get cor(): string {
        return this._cor;
    }

    public get circunferencia(): number {
        return this._circunferencia;
    }

    public get material(): string {
        return this._material;
    }

    public set trocarCor(cor: string) {
        this._cor = cor;
    }
}
const bola1 = new Bola("azul", 100, "plástico");
console.log(bola1.cor);
console.log(bola1.circunferencia);
console.log(bola1.material);
bola1.trocarCor = "branca";
console.log(bola1.cor);


class ContaCorrente {
    private _numConta: string;
    private _nomeCorrentista: string;
    private _saldo?: number = 0;

    constructor(numConta: string, nomeCorrentista: string, saldo?: number) {
        this._numConta = numConta;
        this._nomeCorrentista = nomeCorrentista;
        this._saldo = saldo;
    }

    public get numConta(): string {
        return this._numConta;
    }

    public get nomeCorrentista(): string {
        return this._nomeCorrentista;
    }

    public get saldo(): number | undefined {
        return this._saldo;
    }

    public alterarNome(novoNomeCorrentista: string): void {
        this._nomeCorrentista = novoNomeCorrentista;
    }

    public deposito(valor: number): void {
        if (this._saldo != undefined) {
            this._saldo += valor;
        }
    }

    public saque(valor: number): void {
        if (this._saldo != undefined) {
            this._saldo -= valor;
        }
    }
}


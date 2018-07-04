export class User {
    id: string;
    nome: string;
    foto: string;
    nascimento: string;
    genero: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    latitude: string;
    longitude: string;
    tags: string;
    experiencias: Experiencias [];
    formacoes: Formacoes [];

    public constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class Experiencias {
    empresa: string;
    cargo: string;
    inicio: string;
    saida: string;
    atividades: string;

    public constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

export class Formacoes {
    instituicao: string;
    curso: string;
    inicio: string;
    termino: string;

    public constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

CREATE TABLE departamentos ( 
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nome VARCHAR(120) NOT NULL,
email VARCHAR(100) NOT NULL
);


CREATE TABLE funcionarios ( 
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nome VARCHAR(100) NOT NULL,
email VARCHAR(1000) NOT NULL
);

ALTER TABLE funcionarios ADD COLUMN cargo VARCHAR(100) NOT NULL;


CREATE TABLE funcionarios_departamento (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
id_funcionario UUID NOT NULL,
id_departamento UUID NOT NULL,

CONSTRAINT fk_funcionario_departamento
 FOREIGN KEY (id_funcionario)
 REFERENCES funcionarios(id),

CONSTRAINT fk_departamento_funcionarios
 FOREIGN KEY (id_departamento)
 REFERENCES departamentos(id)
);


CREATE TABLE categorias ( 
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nome VARCHAR(120) NOT NULL
);


CREATE TABLE equipamentos ( 
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nome VARCHAR(220) NOT NULL,
preco NUMERIC(10,2) NOT NULL,
estoque INT NOT NULL,
descricao TEXT NOT NULL
);


CREATE TABLE equipamento_categoria (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
id_categoria UUID NOT NULL,
id_equipamento UUID NOT NULL,

CONSTRAINT fk_categorias_equipamento
 FOREIGN KEY (id_categoria)
 REFERENCES categorias(id),

CONSTRAINT fk_equipamentos_categoria
 FOREIGN KEY (id_equipamento)
 REFERENCES equipamentos(id)
);


CREATE TABLE distribuicoes ( 
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
id_funcionario UUID NOT NULL,
data DATE NOT NULL,
id_equipamento UUID NOT NULL,

CONSTRAINT fk_funcionario_distribuicao
FOREIGN KEY (id_funcionario)
REFERENCES funcionarios(id),

CONSTRAINT fk_equipamento_distribuicao
FOREIGN KEY (id_equipamento)
REFERENCES equipamentos(id)
);
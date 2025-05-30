// Etapa 1
let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de matemática",
  "Lavar a louça",
  "Comprar mercado",
  "Ir à academia",
  "Ler um livro",
  "Fazer revisão para o teste",
  "Limpar o quarto",
  "Estudar para concurso",
  "Organizar o computador",
];

tarefas.push(`Jogar`, `Tomar banho`);
console.log(`Com as novas tarefas adicionadas:`, tarefas);

// Etapa 2

let ultimaTarefaRemovida = tarefas.pop();
console.log(`Com a última tarefa removida: ${tarefas}`);

// Etapa 3

tarefas.unshift(`Tomar banho`);
let addTarefaNoInicio = tarefas.unshift();

console.log(`Com a nova tarefa adicionada no ínico: ${tarefas}`);

// Etapa 4

let primeiraTarefaRemovida = tarefas.shift();
console.log(`Com a primeira tarefa removida: ${tarefas}`);

// Etapa 5

console.log(
  `Tem ir na academia nas tarefas? ${tarefas.includes("Ir à academia")}`
);

// Etapa 6

console.log(`String separada por vírgulas: ${tarefas.join(", ")}`);

// Etapa 7

console.log(`Parte extraida do índice 2 ao 4: ${tarefas.slice(2, 5)}`);

// Etapa 8

console.table(tarefas);

let tarefasRemovidas = tarefas.splice(3, 1, "Lavar roupa");


console.table(tarefasRemovidas);

console.table(tarefas);

// Etapa 9

let listaTarefa2 = ['Passar aspirador de pó', 'Ouvir música'];

console.log(`Lista combinada: ${tarefas.concat(listaTarefa2).join(', ')}`);


// Etapa 10

let clone = tarefas.map(tarefa => "Fazer: " + tarefa);

console.log(`Clonagem lista de Tarefas(): ${clone.join(', ')}`);


// Etapa 11

let listaTarefasFiltrada = tarefas.filter(tarefas => tarefas.length > 15);

console.log(`A lista de tarefas filtrada (tarefas com mais de 15 letras): ${listaTarefasFiltrada}`);




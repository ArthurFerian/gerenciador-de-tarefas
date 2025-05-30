// Etapa 1
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

tarefas.push(`Jogar`, `Tomar banho`)
console.log(`Com as novas tarefas adicionadas:`, tarefas);

// Etapa 2

let ultimaTarefaRemovida = tarefas.pop()
console.log(`Com a última tarefa removida: ${tarefas}`)

// Etapa 3

tarefas.unshift(`Tomar banho`)
let addTarefaNoInicio = tarefas.unshift()

console.log(`Com a nova tarefa adicionada no ínico: ${tarefas}`);



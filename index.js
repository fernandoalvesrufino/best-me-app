// stdout - vai escrever alguma coisa de saida 
// process.stdout.write("Algumma coisa\n")

const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
  process.stdout.write(questions[index] + "\n")
}

ask()
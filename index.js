// stdout - vai escrever alguma coisa de saida 
// process.stdout.write("Algumma coisa\n")

const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
// O on como que fica ouvindo eventos 
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length){
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Bacana, Fernando!

  O que você aprendeu hoje foi:
  ${answers[0]}
  
  O que te aborreceu e você poderia fazer para melhorar foi:
  ${answers[1]}
  
  O que te deixou feliz hoje foi:
  ${answers[2]}
  
  Você ajudou ${answers[3]} pessoas hoje.

  Volte amanhã para novas reflexões...
  `)
})
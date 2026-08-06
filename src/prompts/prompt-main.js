import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta:\n1 - Gerar QR CODE\n2 - Gerar SENHA\n"),
    pattern: /^[1-2]+$/, /*regex*/
    message: chalk.red("Escolha 1 ou 2 apenas"),
    required: true
  }
]

export default mainPrompt;
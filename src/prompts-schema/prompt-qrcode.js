import chalk from "chalk";

const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QrCode: "),
    message: chalk.red("URL inválida"),
    required: true
  },
  {
    name: "type",
    description: chalk.yellow.bold("Selecione o tipo de Qr Code:\n1- Gerar imagem\n2- Gerar no terminal\n"),
    pattern: /^[1,2]$/,
    message: chalk.red("Escolha entre 1 ou 2"),
    required: true
  }
]

export default promptQrCode;
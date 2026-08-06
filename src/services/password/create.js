import chalk from "chalk";
import handle from "./handle.js";

async function cratePassword() {
  console.log(chalk.green.bold("Ferramenta PASSWORD"));
  const password = await handle();

  console.log(chalk.green('Senha gerada: ') + chalk.blue.bold(password));
}

export default cratePassword;
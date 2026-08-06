
async function permittedCharacters() {
  let permitted = [];

  if(process.env.UPPERCASE_LETTERS === "true") permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  if(process.env.LOWERCASE_LETTERS === "true") permitted.push(..."abcdefghijklmnopqrstuvwxyz")
  if(process.env.NUMBERS === "true") permitted.push(..."0123456789")
  if(process.env.SPECIAL_CHARACTERS === "true") permitted.push(..."!@#$%^&*()_+")

  return permitted;
}

async function handle(){
  let characters = []
  let password_length = process.env.PASSWORD_LENGTH
  let password = ""

  characters = await permittedCharacters();

  for(let i = 0; i < password_length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }

  return password;
}

export default handle;
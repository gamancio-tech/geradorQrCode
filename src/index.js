import prompt from 'prompt';

import mainPrompt from './prompts-schema/prompt-main.js';

import createQrCode from './services/qr-code/create.js';
import cratePassword from './services/password/create.js';

async function main(){
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) await createQrCode();
    if (choose.select == 2) await cratePassword()
  });
  prompt.start();
  
}

main();
import prompt from "prompt";
import handle from "./handle.js";
import promptQrCode from "../../prompts/prompt-qrcode.js";

async function createQrCode() {
    prompt.get(promptQrCode, handle);
    prompt.start();
}

export default createQrCode;
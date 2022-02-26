import { expose } from "comlink";
import { initializeImageMagick } from "imagemagick-wasm-builds";

export const sayHi = () => {
  console.log("hi! (console.log)")
  return "hi (return)!"
}

const worker = {
  sayHi
};

expose(worker);
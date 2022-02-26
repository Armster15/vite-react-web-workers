import { wrap } from "comlink";
import type { Hello } from "./worker";

export const importWorker = async () => {
    // @ts-ignore
    await import("./module-workers-polyfill.js");
    const {default: baseWorker} = await import("./worker?worker");
    const worker = wrap<Hello>(new baseWorker())
    return worker;
}
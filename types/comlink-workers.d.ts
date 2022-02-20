declare module "comlink:./worker" {
  const mod: () => import("comlink").Remote<typeof import("../src/worker")>;
  export default mod;
}

# Vite React Web Workers
Setting up web workers in Vite was painful, especially with the dev environment using module workers which are only supported
in Chrome 80+ and not in any other browsers

What this repository has:
1. The [`module-workers-polyfill](https://gist.github.com/developit/220246bc99044af74a6680ce13284f59) for the dev environment
2. Comlink using [`vite-plugin-comlink`](https://github.com/mathe42/vite-plugin-comlink)

Hope you don't have to suffer as much as I did implementing this, or I hope Vite in the future doesn't make it this painful just to add web workers 😁
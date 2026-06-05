import ln from "./libnut";

const libnut: typeof ln = (process.platform === 'win32') ?
    require("@orionstario/libnut-win32") :
    (process.platform === 'linux') ?
        require("@orionstario/libnut-linux") :
        require("@orionstario/libnut-darwin")

export {
    libnut,
}

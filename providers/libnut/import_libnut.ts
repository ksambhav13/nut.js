import ln from "./libnut";

const libnut: typeof ln = (process.platform === 'win32') ?
    require("@computer-use/libnut-win32") :
    (process.platform === 'linux') ?
        require("@computer-use/libnut-linux") :
        require("@computer-use/libnut-darwin")

export {
    libnut,
}

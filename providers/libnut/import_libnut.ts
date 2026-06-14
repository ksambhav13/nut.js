import ln from "./libnut";

const libnut: typeof ln = (process.platform === 'win32') ?
    require("@kumar-sambhav/libnut-win32") :
    (process.platform === 'linux') ?
        require("@kumar-sambhav/libnut-linux") :
        require("@kumar-sambhav/libnut-darwin")

export {
    libnut,
}

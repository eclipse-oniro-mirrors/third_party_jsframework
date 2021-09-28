import { paramMock } from "../utils"

export function mockProcess() {
    const result = {
        runCmd: function(...args) {
            console.warn("process.runCmd interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return ChildProcessMock;
        },
        abort: function(...args) {
            console.warn("process.abort interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        on: function(...args) {
            console.warn("process.on interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        off: function(...args) {
            console.warn("process.off interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        exit: function(...args) {
            console.warn("process.exit interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        cwd: function(...args) {
            console.warn("process.cwd interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramStringMock;
        },
        chdir: function(...args) {
            console.warn("process.chdir interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        uptime: function(...args) {
            console.warn("process.uptime interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramNumberMock;
        },
        kill: function(...args) {
            console.warn("process.kill interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return paramMock.paramBooleanMock;
        },
        getEgid: '[PC preview] unknow getEgid',
        getEuid: '[PC preview] unknow getEuid',
        getGid: '[PC preview] unknow getGid',
        getUid: '[PC preview] unknow getUid',
        getGroups: '[PC preview] unknow getGroups',
        getPid: '[PC preview] unknow getPid',
        getPpid: '[PC preview] unknow getPpid',

    }
    const ChildProcessMock = {
        pid: '[PC preview] unknow pid',
        ppid: '[PC preview] unknow ppid',
        exitCode: '[PC preview] unknow exitCode',
        killed: '[PC preview] unknow killed',
        wait: function(...args) {
            console.warn("ChildProcess.wait interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            return new Promise((resolve, reject) => {
                resolve(paramMock.paramNumberMock);
            })
        },
        getOutput: function(...args) {
            console.warn("ChildProcess.getOutput interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return new Promise((resolve, reject) => {
                resolve(arr);
            })
        },
        getErrorOutput: function(...args) {
            console.warn("ChildProcess.getErrorOutput interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
            const arr = new Uint8Array()
            return new Promise((resolve, reject) => {
                resolve(arr);
            })
        },
        close: function (...args) {
            console.warn("ChildProcess.close interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        },
        kill: function (...args) {
            console.warn("ChildProcess.kill interface mocked in the Previewer. How this interface works on the Previewer" +
                " may be different from that on a real device.")
        }
    }
    return result;
}
export function mockZlib(){
    const zlib = {
        zipFile(...args) {
            console.warn("zlib.zipFile interface mocked in the Previewer. How this interface works on the Previewer may be different from that on a real device.")
            return new Promise((resolve, reject) => {
                resolve()
            })
        },

        unzipFile(...args){
            console.warn("zlib.unzipFile interface mocked in the Previewer. How this interface works on the Previewer may be different from that on a real device.")
            return new Promise((resolve, reject) => {
                resolve()
            })
        }
    }
    global.ohosplugin.zlib = zlib
}
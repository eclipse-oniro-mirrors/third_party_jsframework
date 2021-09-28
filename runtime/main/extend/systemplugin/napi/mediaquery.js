export function mockMediaQuery() {
  const mediaquery = {
    matchMediaSync: function (...args) {
      console.warn("mediaquery.matchMediaSync interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
      var listener = {
        on: function (...args) {
          console.warn("listener.on interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        },
        off: function (...args) {
          console.warn("listener.off interface mocked in the Previewer." +
            " How this interface works on the Previewer may be different from that on a real device.")
        },
        matches:false,
        media:String
      };
      if (args.length === 1 && typeof args[0] === 'string') {
        listener.media = args[0];
      }
      return listener;
    }
  }
  return mediaquery
}
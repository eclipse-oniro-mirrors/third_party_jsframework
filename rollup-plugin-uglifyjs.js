const uglifyJS = require('uglify-js');

module.exports = function uglifyJs() {
  return {
    name: 'uglifyjs',
    renderChunk(code) {
      const res = uglifyJS.minify(code);
      if (res.error) {
        return;
      }
      return {
        code: res.code,
        map: { mappings: '' }
      };
    }
  };
}

const path = require('path');

module.exports = {
  // ...inne ustawienia
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
    },
  },
};
export default path;
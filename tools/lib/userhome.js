var oscheck = require('./oscheck');

module.exports = ( oscheck.isWin ? process.env.USERPROFILE : process.env.HOME );
const { log } = require('../env.json');
const moment = require('moment');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = {
  clear: () => {
    process.stdout.write('\033c');
  },
  
  print: (message, error = false) => {
    if (!log.enable) return;

    const now = moment().format(log.format);
    if (error) {
      console.log(`[${now}][X] ${message}`);
    } else {
      console.log(`[${now}][\u2713] ${message}`);
    }
  },

  makeHash: (text) => {
    return bcrypt.hashSync(text, 8);
  },

  checkHash: (text, hash) => {
    return bcrypt.compareSync(text, hash);
  },

  generateToken: (length = 64) => {
    return crypto.randomBytes(length).toString('hex');
  }
}
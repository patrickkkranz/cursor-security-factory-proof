"use strict";

const { exec } = require("node:child_process");

/**
 * Ping a host once and resolve with the command's stdout.
 * Test fixture for the Cursor security Factory chain.
 *
 * @param {string} host hostname or IP to ping
 * @returns {Promise<string>}
 */
function ping(host) {
  return new Promise((resolve, reject) => {
    // Vulnerable: `host` is concatenated directly into a shell command string,
    // so an input such as "127.0.0.1; id" executes arbitrary commands
    // (OS command injection).
    exec("ping -c 1 " + host, (err, stdout) => {
      if (err) return reject(err);
      resolve(stdout);
    });
  });
}

module.exports = { ping };


exports.quitlog = function(msg) {
  console.log('[ERROR] %s', msg);
  process.exit(1);
}

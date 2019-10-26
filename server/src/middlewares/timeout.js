function myMiddleware(req, res, next) {
  if (req.actionDone) {
    console.info('middleware redundant. ActionDone, calling next');
    next();
  }

  setTimeout(doneWaiting, 1000);

  function doneWaiting() {
    req.actionDone = true;
    next();
  }
}

module.exports = myMiddleware;

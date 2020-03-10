const exportCommands = require('./commands/export-commands');


function init() {
    app.commands.register('staruml-pgm:export-commands.export-edges', exportCommands.exportEdges);
}


exports.init = init;

function getSelectedConnectors() {
    // return an array of the selected items which are of type `Connector`
    return app.selections.getSelectedModels().filter(model => model.getDisplayClassName() === 'Connector');
}

function getSelectedFCFlows() {
    // return an array of the selected items which are of type `FCFlow`
    return app.selections.getSelectedModels().filter(model => model.getDisplayClassName() === 'FCFlow');
}


exports.getSelectedFCFlows = getSelectedFCFlows;
exports.getSelectedConnectors = getSelectedConnectors;

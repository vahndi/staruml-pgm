const fs = require('fs');
const path = require('path');


function selectJsonFileToLoad() {
    let filters = [
        {name: "Json files", extensions: ["json"]}
    ];
    return app.dialogs.showOpenDialog("Select a json file...", null, filters);
}

function selectJsonFileToSave() {
    var filters = [
        {name: "Json Files", extensions: ["json"]}
    ];
    return app.dialogs.showSaveDialog("Save as...", null, filters);
}

function writeObjectToFile(object, fileName, alertMessage) {

    fs.writeFile(fileName, JSON.stringify(object), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        if (alertMessage) {
            alert(alertMessage)
        } else {
            alert("The file was saved as " + fileName + "!")
        }
    });
}

exports.selectJsonFileToLoad = selectJsonFileToLoad;
exports.selectJsonFileToSave = selectJsonFileToSave;
exports.writeObjectToFile = writeObjectToFile;

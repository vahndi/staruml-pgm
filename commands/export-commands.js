const flowH = require('./flowchart-helpers');
const utils = require('../utils');

function exportEdges() {

    let edges = flowH.getSelectedFCFlows();
    if (!edges) {
        alert('No Edges Selected!')
    }
    let nodePairs = [];
    $.each(edges, function (i_edge, edge) {
        nodePairs.push({
            'source': edge.source.name,
            'target': edge.target.name
        });
    });
    let output_fn = utils.selectJsonFileToSave();
    utils.writeObjectToFile(nodePairs, output_fn)
}

exports.exportEdges = exportEdges;

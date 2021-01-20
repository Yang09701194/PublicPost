function convertCSharpToJava(slashesCou){
    try {
        var inputTA = document.getElementById('solTxt');
        var inputT = inputTA.value; 
        var outputT = document.getElementById('resultTxt');

        inputT = inputT.replace(/\\text/g, '');
        inputT = inputT.replace(/\\mathcal{O}/g, '');
        inputT = inputT.replace(/{{\(/g, '');
        inputT = inputT.replace(/{{/g, '');
        inputT = inputT.replace(/}}/g, '');
        // inputT = inputT.replace(/.abs/g, '.Abs');
        
        var lines = inputT.split('\n');

        var slash2 = '//';
        if (slashesCou == 3){
            slash2 = '///';
        }

        var commentLines = [];
        for (let index = 0; index < lines.length; index++) {
            const element = lines[index];
            commentLines.push(slash2 + element);
        }

        //https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
        var res =  commentLines.join('\n');
        outputT.value = res;
        navigator.clipboard.writeText(res).then(function() {
            console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
            alert('Async: Could not copy text: ', err);
        });

    } catch (e) {
        alert('convert error: ' + e);
    }
}
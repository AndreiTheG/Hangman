let word = '';
let guessWord = '';
let numChances = 15;

function mysteriousWord() {
    word = document.getElementById('text').value;
    word = word.toUpperCase();
    document.getElementById('text').value = '';
    document.getElementById('submit').disabled = true;
    document.getElementById('text-input').innerHTML = '';
    let len = word.length;
    for (let i = 0; i < len; ++i) {
        guessWord = guessWord.substring(0, i) + '_' + guessWord.substring(i, len);
        //document.getElementById('output').innerHTML += '_ ';
    }
    for (let i = 0; i < len; ++i) {
        document.getElementById('output').innerHTML += guessWord[i] + ' ';
        //document.getElementById('output').innerHTML += '_ ';
    }
    //document.getElementById('output').innerHTML = guessWord;
    document.getElementById('newInput').innerHTML = '<input id="letter" type="text" maxlength=1' +
    'aria-describedby="button-addon2"><button id="sendLetter" type="button" class="btn btn-secondary"' +
    'onclick="verifyLetter()">Submit</button>'
}

String.prototype.replaceAt = function(index, letter) {
    let arr = this.split('');
    arr[index] = letter;
    return arr.join('');
}

function verifyLetter() {
    let letter = document.getElementById('letter').value;
    let len = word.length, letterCount = 0;
    letter = letter.toUpperCase();
    for (let i = 0; i < len; ++i) {
        if (word[i] == letter) {
            guessWord = guessWord.replaceAt(i, letter);
            ++letterCount;
        }
    }
    if (letterCount == 0) {
        --numChances;
    }
    if (numChances == 0) {
        document.getElementById('sendLetter').disabled = true;
    }
    document.getElementById('output').innerHTML = '';
    for (let i = 0; i < len; ++i) {
        document.getElementById('output').innerHTML += guessWord[i] + ' ';
    }
    console.log(numChances);
}
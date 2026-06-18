let index = 0;
let wrongWords = [];

let currentList = words;

function wrongWord(){

const currentWord = currentList[index];

if(!wrongWords.includes(currentWord)){
    wrongWords.push(currentWord);
}

alert("答错单词已保存！");
}

function reviewWrongWords(){

if(wrongWords.length === 0){
    alert("まだ苦手単語がありません");
    return;
}

currentList = wrongWords;
index = 0;
showWord();

}

function showWord(){

const word = currentList[index];

document.getElementById("hanzi").innerText =
word.cn;

document.getElementById("pinyin").innerText =
"";

document.getElementById("english").innerText =
"";

document.getElementById("japanese").innerText =
"";

document.getElementById("progress").innerText =
(index + 1) + " / " + currentList.length;

}

function showPinyin(){

document.getElementById("pinyin").innerText =
currentList[index].py;

}

function showEnglish(){

document.getElementById("english").innerText =
currentList[index].en;

}

function showJapanese(){

document.getElementById("japanese").innerText =
currentList[index].jp;

}

function nextWord(){

index++;

if(index >= currentList.length){
    index = 0;
}

showWord();

}

function prevWord(){

index--;

if(index < 0){
    index = currentList.length - 1;
}

showWord();

}

function speakChinese(){

let speech =
new SpeechSynthesisUtterance(
currentList[index].cn
);

speech.lang = "zh-CN";

speechSynthesis.speak(speech);

}

showWord();

function showTextWords(){

currentList =
words.filter(word => word.type === "text");

index = 0;

showWord();

}

function showWriteWords(){

currentList =
words.filter(word => word.type === "write");

index = 0;

showWord();

}

function showReadWords(){

currentList =
words.filter(word => word.type === "read");

index = 0;

showWord();

}

function showExtendedWords(){

currentList =
words.filter(word => word.type === "extended");

index = 0;

showWord();

}

function showTextWords(){

    currentList = words.filter(
        w => w.type === "text"
    );

    index = 0;
    showWord();

}

function showWriteWords(){

    currentList = words.filter(
        w => w.type === "write"
    );

    index = 0;
    showWord();

}

function showReadWords(){

    currentList = words.filter(
        w => w.type === "read"
    );

    index = 0;
    showWord();

}

function showExtendedWords(){

    currentList = words.filter(
        w => w.type === "extended"
    );

    index = 0;
    showWord();

}

function showVocabWords(){

    currentList = words.filter(
        w => w.type === "vocab"
    );

    index = 0;
    showWord();

}
/* Details */

prompt("aoeu auto-typer by pseudophpt 2017 for lulz. 5 seconds after selecting cpm, it will start auto-typing.");

/* Ask user for CPM */

var ms = 60000 / parseInt(prompt("Enter desired CPM"));

/* Pause function, do nothing. Ripped from stackexchange */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Array of given words */
var words_array = document.getElementById("wordsbox").innerHTML.replace(/<(?:.|\n)*?>/gm, ' ').match(/\S+/g);

/* For each word in the array, type it */
async function bot () { 
    await sleep(5000);
    for (var i = 0; i < words_array.length; i ++) {
        var word = words_array[i];
        for (var j = 0; j < word.length; j++) {
            var letter = word[word.length - 1 - j];
            document.getElementById("input").value = letter + document.getElementById("input").value;
            document.getElementById("input").onkeyup(new Event('lol_nice_bot'));
            await sleep(ms);
        }
        document.getElementById("input").value += ' ';
        document.getElementById("input").onkeyup(new Event('test')); 
    }   
}

bot();

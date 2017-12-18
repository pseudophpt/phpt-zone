/* Insert invisible text box */

document.getElementById("introcontainer").innerHTML += "<input style=\"background-color: #f8f8f0; color: #f8f8f0; border: 0px\" type=\"text\" onkeydown=\"type_letter();\">";

/* Details */

alert("aoeu auto-typer by pseudophpt 2017 for lulz. there should be a text box right below \"Most recent score\" thats invisible. use this to press space without the page scrolling down. start typing in that box to fill the correct characters");

/* Array of given words */

var words_array = document.getElementById("wordsbox").innerHTML.replace(/<(?:.|\n)*?>/gm, ' ').match(/\S+/g);
var current_word_index = 0;
var current_letter_index = 0;

/* Add space to end of each word */

for (var i = 0; i < words_array.length; i ++) {
    words_array[i] += ' ';
}

function type_letter() {
    var word = words_array[current_word_index];
    
    document.getElementById("input").value += word[current_letter_index];
    document.getElementById("input").onkeyup(new Event('lol_nice_bot'));
    
    current_letter_index ++;
    
    if (current_letter_index == word.length) {
        current_letter_index = 0;
        current_word_index ++;
    }
}

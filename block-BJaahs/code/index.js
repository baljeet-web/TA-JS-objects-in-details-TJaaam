// without object

const title = "where is the capital of Jordan ?"
const options =['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
const correctAnswerIndex = 1;

function isAnswerCorrect(index){
    if (index == correctAnswerIndex){
        return true;
    }return false;
}

function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

// organising using object

var findCapital = function(){
    title : "where is the capital of Jordan ?"
    options : ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
    correctAnswerIndex : 1;
    function isAnswerCorrect(index){
        if (index == correctAnswerIndex){
            return true;
        }return false;
    }
    function getCorrectAnswer(){
        return options[correctAnswerIndex];
    }
}

// Using a function to create object

var findCapital = function(title, options, correctAnswerIndex){
    let capital = {};
    capital.title = title;
    capital.options = options;
    capital.correctAnswerIndex = correctAnswerIndex;
    capital.isAnswerCorrect = function(index){
            return index === capital.correctAnswerIndex;
        }
    capital.getCorrectAnswer = function(){
        return capital.options[correctAnswerIndex];
    }
}


// Using this

var findCapital = function(title, options, correctAnswerIndex){
    let capital = {};
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.isAnswerCorrect = function(index){
        return index === this.correctAnswerIndex;
    }
    this.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex];
    }
}
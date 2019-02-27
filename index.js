
//code for question 3--printing quotes
document.querySelector('#quotes');
var quoteAsk = document.querySelector('#firstquestion');
var authorAsk = document.querySelector('#secondquestion');
var displayAnswer = document.querySelector('#display');

//create an eventListener
quotes.addEventListener('submit', function(event){

  //prevent form from empty submissions
  event.preventDefault();
  
  //check length of input?
  if(quoteAsk.value.length < 1) return;
  if(authorAsk.value.length < 1) return;

  
  //add quote
  displayAnswer.innerHTML += '<p>'+ 'What is the quote?'+ '' + quoteAsk.value + '</p>';
  //add author
  displayAnswer.innerHTML += '<p>'+ 
    'Who said it?'+ '' + authorAsk.value + '</p>';
  
  //clear inputs
  quoteAsk.value = '';
  authorAsk.value = '';
  
   //save the quote/author to localStorage
    localStorage.setItem('firstquestion',firstquestion.innerHTML);
 localStorage.setItem('secondquestion', secondquestion.innerHTML);
  
  //check for saved quote/author items
  var saved1 = localStorage.getItem('firstquestion');
  var saved2 = localStorage.getItem('secondquestion');
  
  //if any saved items,update our list'
  if(saved1){
    firstquestion.innerHTML = saved1;
    secondquestion.innerHTML = saved2;
  }
}, false);


//Code for madlibs problem--question #4
function madLib(){
  var mainStory = document.getElementById('mainstory');
  var noun = document.getElementById('noun-box').value;
  var verb = document.getElementById('verb-box').value;
  var adjective = document.getElementById('adjective-box').value;
	var adverb = document.getElementById('adverb-box').value;
	 mainStory.innerHTML = noun + " " + adverb + " " + "kitchen" + " " + adjective + " " + verb + "today.";
	 
	 //to stop the page from refresh
	 event.preventDefault();
}


//question 5-simple math code
function simpleMath(){
  var answer = document.getElementById('displayanswer');
  var a = parseInt(document.getElementById('firstnum').value);
  var b = parseInt(document.getElementById('secondnum').value);
  
  displayanswer.innerHTML = (a+b) + " " + "<br>" + " " + (a-b) + " " + "<br>" + (a/b) + " " + "<br>" + (a*b);
}







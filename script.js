
//////////////////// Questions Objects ////////////////////
// let datascript = document.createElement('script');
// datascript.src = "./data.js";
// document.head.appendChild(datascript);
//////////////////END QUESTIONS ///////////////////////////

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
const image = new Image(canvas.width,canvas.height); 
//image.onload = drawImageActualSize; 
image.src='./background.jpg';
//ctx.draImage(image,0,0);
var currentQuestions = [];
var currentQuestion;
var answered = false;
var score = 0;
var temp = [];
var questions = [];
let x =50, y=100;

//Draw LifeLines/////////////////////////////////////
let lifelinesCanvas = document.getElementById('lifelines');
let llCtx = lifelinesCanvas.getContext('2d');
/////////////////////////////////////////////////////

//Padao Canvas/////////////////////////////////////
let padaoCanvas = document.getElementById('padao');
let padaoCtx = padaoCanvas.getContext('2d');
/////////////////////////////////////////////////////

//Owner Canvas/////////////////////////////////////
// let ownerCanvas = document.getElementById('owner');
// let ownerCtx = padaoCanvas.getContext('2d');
// //ownerCtx.fillStyle = fgcolor;
// //ctx.fill();
// ownerCtx.fillStyle = rgba(0,0,100,0.3);
// ownerCtx.fillRect(x, y, width, height);

// ownerCtx.fillStyle = 'white';
// ownerCtx.font = '16px Arial bold';
//     //ctx.font = myfont;
//     ctx.fillText("@Ganesh 2023", x + 10, y + 25);

/////////////////////////////////////////////////////

function drawButton(x, y, width, height, text,color,fgcolor,myfont, clickHandler) {
ctx.fillStyle = fgcolor;
ctx.fill();
ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

    ctx.fillStyle = fgcolor;
    // ctx.font = '16px Arial';
    ctx.font = myfont;
    ctx.fillText(text, x + 10, y + 25);

    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
            clickHandler();
        }
    });
}
/////LifeLines Buttons function
function drawLLButton(x, y, width, height, text,bgcolor, clickHandler) {
    llCtx.fillStyle = bgcolor;
    llCtx.fill();
    llCtx.fillStyle = bgcolor;
    llCtx.fillRect(x, y, width, height);
    
    llCtx.fillStyle = 'white';
        llCtx.font = '16px Arial bold';
        //ctx.font = myfont;
        llCtx.fillText(text, x + 10, y + 25);
    
        lifelinesCanvas.addEventListener('click', function(event) {
            const rect1 = lifelinesCanvas.getBoundingClientRect();
            const mouseX1 = event.clientX - rect1.left;
            const mouseY1 = event.clientY - rect1.top;
    
            if (mouseX1 > x && mouseX1 < x + width && mouseY1 > y && mouseY1 < y + height) {
                clickHandler();
            }
        });
    }
////////////////////

/////Padao Buttons function
function drawPadaoButton(x, y, width, height, text,fgcolor,bgcolor, clickHandler) {
    padaoCtx.fillStyle = bgcolor;
    padaoCtx.fill();
    padaoCtx.fillStyle = bgcolor;
    padaoCtx.fillRect(x, y, width, height);
    
    padaoCtx.fillStyle = fgcolor;
    padaoCtx.font = '16px Arial bold';
        //ctx.font = myfont;
        padaoCtx.fillText(text, x + 10, y + 25);
    
        padaoCanvas.addEventListener('click', function(event) {
            const rect1 = lifelinesCanvas.getBoundingClientRect();
            const mouseX1 = event.clientX - rect1.left;
            const mouseY1 = event.clientY - rect1.top;
    
            if (mouseX1 > x && mouseX1 < x + width && mouseY1 > y && mouseY1 < y + height) {
                clickHandler();
            }
        });
    }
////////////////////

//Display Title
drawButton(200, 20, 800, 40, "Kaun Banega Javascript pati",'rgba(0,0,100,0.3)','cyan','30px Cursive', function() {});

//Display Lifelines
drawLLButton(15, 145, 160, 50, "",'blue', function() {});  
drawLLButton(20, 150, 150, 40, "  Public Opinion",'black', function() {
    alert("Only 50-50 option is implemented");
});

drawLLButton(15, 245, 160, 50, "",'blue', function() {}); 
drawLLButton(20, 250, 150, 40, "          50-50",'black', function() {
    // alert("50-50 Clicked");
    drawFiftyFifty();
});

drawLLButton(15, 345, 160, 50, "",'blue', function() {}); 
drawLLButton(20, 350, 150, 40, "  Phone a friend",'black', function() {
    alert("Only 50-50 option is implemented");
});

///////////////////////////////

//Display Padao///////////////
drawPadaoButton(0, 50, 200, 30, "Rs.1,00,00,000",'white','gray', function() {});  
drawPadaoButton(0, 80, 200, 30, "Rs.50,00,000",'white','black', function() {}); 
drawPadaoButton(0, 110, 200, 30, "Rs.25,00,000",'white','black', function() {}); 
drawPadaoButton(0, 140, 200, 30, "Rs.12,50,000",'white','black', function() {}); 
drawPadaoButton(0, 170, 200, 30, "Rs.6,25,000",'white','black', function() {}); 
drawPadaoButton(0, 200, 200, 30, "Rs.3,20,000",'white','gray', function() {}); 
drawPadaoButton(0, 230, 200, 30, "Rs.1,60,000",'white','black', function() {}); 
drawPadaoButton(0, 260, 200, 30, "Rs.80,000",'white','black', function() {}); 
drawPadaoButton(0, 290, 200, 30, "Rs.40,000",'white','black', function() {}); 
drawPadaoButton(0, 320, 200, 30, "Rs.20,000",'white','black', function() {}); 
drawPadaoButton(0, 350, 200, 30, "Rs.10,000",'white','gray', function() {}); 
drawPadaoButton(0, 380, 200, 30, "Rs.5,000",'white','black', function() {}); 
drawPadaoButton(0, 410, 200, 30, "Rs.3,000",'white','black', function() {}); 
drawPadaoButton(0, 440, 200, 30, "Rs.2,000",'white','black', function() {}); 
drawPadaoButton(0, 470, 200, 30, "Rs.1,000",'white','black', function() {}); 
//////////////////////////////


drawButton(canvas.width-220, 420, 200, 40, "NEXT QUESTION",'blue','white','16px Arial', function() {
    
    answered = false;
    // clearText(50, 100, 300, 40,"blck",currentQuestion.q);
    // let qno = Math.floor(Math.random()*questions.length);
    // currentQuestion = questions[qno];
    // currentQuestions = getQuestionData();
    currentQuestion = getQuestionData();
    // currentQuestion.q.replace("&quot;","\'");
    // currentQuestion.A.replace("&quot;","\'");
    // currentQuestion.B.replace("&quot;","\'");
    // currentQuestion.C.replace("&quot;","\'");
    // currentQuestion.D.replace("&quot;","\'");
    // currentQuestion = questions[0];
    console.log("Question ",currentQuestion);
    // if(currentQuestion == undefined || currentQuestion == null || currentQuestion == ""){
    //     drawButton(50, 20, 800, 400, "",'black','blue','24px Courier', function() {}); 
    //     drawButton(250, 200, 600, 40, "SITE UNDER MAINTENCE",'black','yellow','30px Courier', function() {}); 
    //     // drawButton(500, 300, 600, 40, "--- @Ganesh",'black','white','18px Comic Sans MS', function() {}); 
    //     setTimeout(whiteText,20);
    // }else{
        {
     arrayStr = splitString(currentQuestion.q.replaceAll("&quot;","\'").replaceAll("&ldquo;","\'").replaceAll("&rdquo;","\'").replaceAll("&oacute;","").replaceAll("&#039;","\'"));
    // arrayStr = splitString(currentQuestion.q);

  
    if(arrayStr.length == 1) {
    drawButton(50, 100, 800, 40, arrayStr[0],'black','white','18px Courier', function() {}); 
    drawButton(50, 150, 800, 40, "",'black','white','18px Courier', function() {});     
    } else{
        drawButton(50, 100, 800, 40, arrayStr[0],'black','white','18px Courier', function() {});    
        drawButton(50, 150, 800, 40, arrayStr[1],'black','white','18px Courier', function() {});  
    }

    drawButton(20, 200, 300, 40, 'A. '+currentQuestion.A.replace("&quot;","\'"),'yellow','black','16px Arial', function() {
        if(answered == false) {
        drawButton(20, 200, 300, 40, 'A. '+currentQuestion.A.replace("&quot;","\'"),'orange','black','16px Arial', function() {});          
        setTimeout(callA,5000); 
        answered = true;
        }
    });
    drawButton(canvas.width-320, 200, 300, 40, 'B. '+currentQuestion.B.replace("&quot;","\'"),'yellow','black','16px Arial', function() {
        if(answered == false) {
        drawButton(canvas.width-320, 200, 300, 40, 'B. '+currentQuestion.B.replace("&quot;","\'"),'orange','black','16px Arial', function() {});
        setTimeout(callB,5000); 
        answered = true;
        }
    });
    drawButton(20, 300, 300, 40, 'C. '+currentQuestion.C.replace("&quot;","\'"),'yellow','black','16px Arial', function() {
        if(answered == false) {
        drawButton(20, 300, 300, 40, 'C. '+currentQuestion.C.replace("&quot;","\'"),'orange','black','16px Arial', function() {});
        setTimeout(callC,5000); 
        answered = true;
        }
     });
     drawButton(canvas.width-320, 300, 300, 40, 'D. '+currentQuestion.D.replace("&quot;","\'"),'yellow','black','16px Arial', function() {
        if(answered == false) {
        drawButton(canvas.width-320, 300, 300, 40, 'D. '+currentQuestion.D,'orange','black','16px Arial', function() {});
        setTimeout(callD,5000); 
        answered = true;
        }
     });
     drawButton(20, 440, 200, 40, '@Ganesh 2023','rgba(0,0,100,0.3)','white','20px Arial', function(){});
    }
});
function callA() {
    if(currentQuestion.ans == 'A'){ 
    drawButton(20, 200, 300, 40, 'A. '+currentQuestion.A,'green','black','16px Arial', function() {});
    score++;
    redrawPadao(score);
    }else {
        drawButton(20, 200, 300, 40, 'A. '+currentQuestion.A,'red','black','16px Arial', function() {}); 
    }
}
function callB() {
    if(currentQuestion.ans == 'B'){
        drawButton(canvas.width-320, 200, 300, 40, 'B. '+currentQuestion.B,'green','black','16px Arial', function() {});
        score++;
        redrawPadao(score);
    }else{
        drawButton(canvas.width-320, 200, 300, 40, 'B. '+currentQuestion.B,'red','black','16px Arial', function() {});
    }
}
function callC(){
    if(currentQuestion.ans == 'C'){
        drawButton(20, 300, 300, 40, 'C. '+currentQuestion.C,'green','black','16px Arial', function() {});
        score++;
        redrawPadao(score);
    }else{
        drawButton(20, 300, 300, 40, 'C. '+currentQuestion.C,'red','black','16px Arial', function() {});
    }
}
function callD(){
    if(currentQuestion.ans == 'D'){
        score++;
        drawButton(canvas.width-320, 300, 300, 40, 'D. '+currentQuestion.D,'green','black','16px Arial', function() {}); 
        redrawPadao(score);
    }else{
        drawButton(canvas.width-320, 300, 300, 40, 'D. '+currentQuestion.D,'red','black','16px Arial', function() {}); 
    }
}
function clearText(x, y, width, height,color) {
    ctx.fillStyle = 'rgba(0,0,100,0.3)';
    // ctx.clearRect(x, y, width, height);
    ctx.fillText(currentQuestion.q,50,100);
    console.log("clear text called ",x,y,width,height);
}
function redrawPadao(myscore){
if(score == 15){
drawPadaoButton(0, 50, 200, 30, "Rs.1,00,00,000",'red','gray', function() {});  
}else{
drawPadaoButton(0, 50, 200, 30, "Rs.1,00,00,000",'white','gray', function() {});
}
if(score == 14){
drawPadaoButton(0, 80, 200, 30, "Rs.50,00,000",'red','black', function() {}); 
}else{
drawPadaoButton(0, 80, 200, 30, "Rs.50,00,000",'white','black', function() {});
}
if(score == 13){
drawPadaoButton(0, 110, 200, 30, "Rs.25,00,000",'white','black', function() {}); 
}else{
drawPadaoButton(0, 110, 200, 30, "Rs.25,00,000",'white','black', function() {});
}
if(score == 12){
drawPadaoButton(0, 140, 200, 30, "Rs.12,50,000",'red','black', function() {}); 
}else{
drawPadaoButton(0, 140, 200, 30, "Rs.12,50,000",'white','black', function() {});
}
if(score == 11){
drawPadaoButton(0, 170, 200, 30, "Rs.6,25,000",'red','black', function() {});
}else{
drawPadaoButton(0, 170, 200, 30, "Rs.6,25,000",'white','black', function() {});   
} 
if(score == 10){ 
drawPadaoButton(0, 200, 200, 30, "Rs.3,20,000",'red','gray', function() {}); 
}else{
drawPadaoButton(0, 200, 200, 30, "Rs.3,20,000",'white','gray', function() {});    
}
if(score == 9){ 
drawPadaoButton(0, 230, 200, 30, "Rs.1,60,000",'red','black', function() {});
}else{
drawPadaoButton(0, 230, 200, 30, "Rs.1,60,000",'white','black', function() {});
}
if(score == 8){ 
drawPadaoButton(0, 260, 200, 30, "Rs.80,000",'red','black', function() {}); 
}else{
drawPadaoButton(0, 260, 200, 30, "Rs.80,000",'white','black', function() {}); 
}
if(score == 7){
drawPadaoButton(0, 290, 200, 30, "Rs.40,000",'red','black', function() {}); 
}else{
drawPadaoButton(0, 290, 200, 30, "Rs.40,000",'white','black', function() {});    
}
if(score == 6){
drawPadaoButton(0, 320, 200, 30, "Rs.20,000",'red','black', function() {}); 
}else{
drawPadaoButton(0, 320, 200, 30, "Rs.20,000",'white','black', function() {});    
}
if(score == 5){
drawPadaoButton(0, 350, 200, 30, "Rs.10,000",'red','gray', function() {}); 
}else {
drawPadaoButton(0, 350, 200, 30, "Rs.10,000",'white','gray', function() {}); 
}
if(score == 4){
drawPadaoButton(0, 380, 200, 30, "Rs.5,000",'red','black', function() {}); 
}else{
drawPadaoButton(0, 380, 200, 30, "Rs.5,000",'white','black', function() {});   
}
if(score == 3){
drawPadaoButton(0, 410, 200, 30, "Rs.3,000",'red','black', function() {}); 
}else{
    drawPadaoButton(0, 410, 200, 30, "Rs.3,000",'white','black', function() {}); 
}
if(score == 2){
drawPadaoButton(0, 440, 200, 30, "Rs.2,000",'red','black', function() {}); 
}else{
    drawPadaoButton(0, 440, 200, 30, "Rs.2,000",'white','black', function() {});
}
if(score == 1){
drawPadaoButton(0, 470, 200, 30, "Rs.1,000",'red','black', function() {}); 
}else {
    drawPadaoButton(0, 470, 200, 30, "Rs.1,000",'white','black', function() {});    
}
}

//FiftyFifty implementation
function fiftyFifty() {
    let choice = ['A','B','C','D'];
    selectFiftyFifty(choice);

}
function selectFiftyFifty(array) {
    temp = [];
    var x = 0;
    var xx = 0;
    for (;;) {
        if(temp.length >= 2){
            break;
        }
        var j = Math.floor(Math.random() * 4);
        console.log("XXXXX = ",j+","+array[j]);
        if(array[j] != currentQuestion.ans){
            if(!temp.includes(array[j])){
                if(array[j] != undefined){
            temp[x] = array[j]; 
                }
            }
            
        }
        x++;
    }
}

function drawFiftyFifty() {
    fiftyFifty();
    // alert(temp[0]+" and "+temp[1]);
    if(temp[0] == 'A' || temp[1] == 'A') {
    drawButton(20, 200, 300, 40, "",'black','black','16px Arial', function() {
        if(answered == false) {
        drawButton(20, 200, 300, 40, "",'black','black','16px Arial', function() {});          
        setTimeout(callA,5000); 
        answered = true;
        }
    });
}
if(temp[0] == 'B' || temp[1] == 'B') {
    drawButton(canvas.width-320, 200, 300, 40, "",'black','black','16px Arial', function() {
        if(answered == false) {
        drawButton(canvas.width-320, 200, 300, 40, "",'black','black','16px Arial', function() {});
        setTimeout(callB,5000); 
        answered = true;
        }
    });
}
if(temp[0] == 'C' || temp[1] == 'C') {
    drawButton(20, 300, 300, 40, "",'black','black','16px Arial', function() {
        if(answered == false) {
        drawButton(20, 300, 300, 40, "",'black','black','16px Arial', function() {});
        setTimeout(callC,5000); 
        answered = true;
        }
     });
    }
    if(temp[0] == 'D' || temp[1] == 'D') {
     drawButton(canvas.width-320, 300, 300, 40, "",'black','black','16px Arial', function() {
        if(answered == false) {
        drawButton(canvas.width-320, 300, 300, 40, "",'black','black','16px Arial', function() {});
        setTimeout(callD,5000); 
        answered = true;
        }
     });
    }
}

/////Questions from Cloud ///////
// const API_URL = "https://opentdb.com/api.php?amount=1&type=multiple";
 //const API_URL = "https://opentdb.com/api.php?amount=1&category=18&type=multiple";
const API_URL = "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";

async function getQuizData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results[0];
}
function getQuestionData() {
    getQuizData().then((quizData) => {
      let question = quizData.question;
      let options = quizData.incorrect_answers.concat(quizData.correct_answer);
      let correctAnswer = quizData.correct_answer;
     
      let answers = ['A','B','C','D'];
      options.sort();
      let key = Object.keys(options).find(k=>options[k]===correctAnswer);
      questions = {q:quizData.question,A:options[0],B:options[1],C:options[2],D:options[3],ans:answers[key]};
    });
    return questions;
  }

/////////////////////////////////
function splitString(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(/\s+/);

    // Check if the length of words is greater than 10
    if (words.length > 10) {
        // If yes, split the array into two parts
        const firstPart = words.slice(0, 10).join(' ');
        const secondPart = words.slice(10).join(' ');

        // Return an array with the two parts
        return [firstPart, secondPart];
    } else {
        // If the length is 10 or less, return the original string
        return [inputString];
    }
} //Animation text
function whiteText(){
    drawButton(x, y, 600, 40, "--- @Ganesh",'black','white','18px Comic Sans MS', function() {}); 
    setTimeout(blackText,20);
}
function blackText(){
    drawButton(x, y, 600, 40, "--- @Ganesh",'black','black','18px Comic Sans MS', function() {}); 
    x++;
    y++;
}
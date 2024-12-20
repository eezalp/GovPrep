
const amendments = [
  [
    //1
    "Freedom of speech",
    "Freedom of press",
    "Freedom of assembly",
    "Free exercise of religion",
    "Establishment clause",
    "No establishment of religion by the government",
    "Right to petition the government with grievances"
  ],
  
  [
    //2
    "Right to bear arms." 
  ],

  [
    //3
    "No quartering of soldiers in private homes" 
  ],

  [
    //4
    "No illegal search or seizure"
  ],

  [
    //5
    "Federal government can\'t deny life, liberty or property without due process.",
    "Freedom from self-incrimination",
    "Right to remain silent",
    "No double jeopardy",
    "No taking of private property for public use without just compensation",
    "Eminent domain"
  ],

  [
    //6
    "Right to a speedy and public trial by jury in criminal cases",
    "Right to counsel",
    "Right to call witnesses on your own behalf and confront those against you." 
  ],


  [
    //7
    "Right to trial by jury in civil cases",
    "Right to trial by jury when you get sued"
  ],

  [
    //8
    "No cruel or unusual punishment.",
    "No excessive bail or fines." 
  ],


  [
    //9
    "People also have \"unenumerated\" rights",
    "People have rights that are not explicitly stated in the Constitution"
  ],

  [
    //10
    "Powers not specifically granted to the national government belong to the states and/or the people",
    "Federalism amendment, grants powers to the states not explicitly given to the national government"
  ],

  [
    //11
    "Suits against states must be brought in state court" 
  ],

  [
    //12
    "Created a vote in the Electoral College for the vice-presidency",
    "No person constitutionally ineligible to become president can become vice-president"
  ],

  [
    //13
    "Outlawed slavery",
    "Abolished slavery"
  ],

  [
    //14
    "No state can deny life, liberty or property without due process",
    "No state can deny the equal protection of the laws",
    "Any person born in the U.S. is a citizen of the United States and the state in which born" 
  ],


  [
    //15
    "The right to vote cannot be denied based on race, color, creed or previous condition of servitude" 
  ],


  [
    //16
    "Federal government can collect an income tax"
  ],


  [
    //17
    "Direct election of U.S. Senators by the people"
  ],


  [
    //18
    "Prohibited the sale, manufacture and transport of alcoholic beverages",
    "Prohibition"
  ],


  [
    //19
    "Gave women the right to vote"
  ],


  [
    //20
    "Moved up the date that the newly elected president takes office to Jan. 20th and the newly elected Congress to Jan. 3rd" 
  ],


  [
    //21
    "Repealed prohibition"
  ],


  [
    //22
    "Two-term limit on the presidency",
    "10-year maximum for someone who takes office in the middle of a term"
  ],


  [
    //23
    "Gave 3 electors to the people who live in the District of Columbia",
    "Granted 3 electoral votes to Washington D.C."
  ],


  [
    //24
    "Outlawed state poll taxes"
  ],


  [
    //25
    "Provides for filling the presidency and vice-presidency if either spot becomes vacant",
    'Provides for the VP becoming \"acting president\" if the president becomes disabled'
  ],


  [
    //26
    "Lowered the voting age to 18"
  ],

  [
    //27
    "Prevents Congressional pay increases from becoming effective until after the election subsequent to their passage" //27
  ],
];

let curAmendment = 0;
let subRandom = 0;
let chosen = [];
let correct = 0;
let question = 0;

let gameState = 0;

let incorrect = [];
let inputField = document.getElementById('inputBox');

function RandRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SelectAmendment(){
  curAmendment = RandRange(1, 27);
  while(chosen.includes(curAmendment)){
    curAmendment = RandRange(1, 27);
  }
  subRandom = RandRange(0, amendments[curAmendment - 1].length - 1);
  chosen.push(curAmendment);
  // console.log(`current subRandom is ${subRandom} out of ${amendments[curAmendment - 1].length}`);
}

function EndGame(){
  let correctPercent = Math.round((correct/27) * 10000) / 100;
  gameState = 0;
  document.getElementById("amendment").innerHTML = `Out of 27 you got ${correct} correct which is ${correctPercent}%`;
  document.getElementById("submit").value = "Play Again";

  console.log(`incorrect len: ${incorrect.length}`);
  if(incorrect.length != 0){
    let incorrects = "Number: Clause<br>";
    incorrect.forEach((val, iond, arr)=>{
      incorrects += `${val[0]}: ${val[1]}<br>`;
    });
    document.getElementById("incorrects").innerHTML = incorrects;
  }
}

function LoadAmendment(){
  if(chosen.length >= 27){
    EndGame();
  }else{
    SelectAmendment();
    ++question;
    document.getElementById("amendment").innerHTML = amendments[curAmendment - 1][subRandom];
  }
  document.getElementById("question").innerHTML = `${question}/27`;
}

function CorrectAnswer(){
  document.getElementById("amendment").innerHTML = `${curAmendment} is correct`;
  correct++;
}

function IncorrectAnswer(){
  document.getElementById("amendment").innerHTML = `That is incorrect, ${curAmendment} is the correct answer for ${amendments[curAmendment - 1][subRandom]}`;

  incorrect.push([curAmendment, amendments[curAmendment - 1][subRandom]]);
}

function CheckAnswer(){
  let answer = document.getElementById("inputBox").value;
  
  if(answer == curAmendment){
    CorrectAnswer();
  }else{
    IncorrectAnswer();
  }

  document.getElementById("inputBox").value = "";
  document.getElementById("submit").value = "Next";
  gameState = 2;
  if(chosen.length >= 27){
    EndGame();
  }
}

function EnterAction(){
  switch(gameState){
    case 1:
      CheckAnswer();
      break;
    case 2:
      NextQuestion();
      break;
  }
}

function StartQuiz(){
  if(!inputField){
    inputField = document.getElementById('inputBox');
    inputField.addEventListener('keyup', function onEvent(e) {
      if (e.keyCode === 13) {
        EnterAction();
      }
    });
  }

  question = 0;
  chosen = [];
  incorrect = [];
  document.getElementById("submit").value = "Submit";
  document.getElementById("incorrects").innerHTML = "";
  LoadAmendment();
  gameState = 1;
}

function NextQuestion(){
  document.getElementById("submit").value = "Submit";
  LoadAmendment();
  gameState = 1;
}

function ButtonAction(){
  switch(gameState){
    case 0:
      StartQuiz();
      break;
    case 1:
      CheckAnswer();
      break;
    case 2:
      NextQuestion();
      break;
  }
}


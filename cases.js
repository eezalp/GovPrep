const cases = [
  {
    case: "Miranda v. Arizona",
    year: 1966,
    constitutionalIssue: "Self-Incrimination",
    vote: "5-4",
    issue: "Failure to inform a suspect of their rights during interrogation",
    importance: "Established Miranda rights"
  },
  {
    case: "Korematsu v. U.S.",
    year: 1944,
    constitutionalIssue: "Equal Protection Clause",
    vote: "6-3",
    issue: "Internment of Japanese-Americans during World War II",
    importance: "Upholding Japanese internment during WWII; later criticized as a civil rights violation"
  },
  {
    case: "Gideon v. Wainwright",
    year: 1963,
    constitutionalIssue: "Right to Counsel",
    vote: "9-0",
    issue: "Denial of a public defender to a criminal defendant",
    importance: "Guaranteed the right to a public defender in criminal cases"
  },
  {
    case: "Minersville v. Gobitis",
    year: 1940,
    constitutionalIssue: "Free Exercise Clause",
    vote: "8-1",
    issue: "Mandatory flag salute in public schools for religious objectors",
    importance: "Upholding compulsory flag salute; later overturned by West Virginia v. Barnette"
  },
  {
    case: "Regents U.C. v. Bakke",
    year: 1978,
    constitutionalIssue: "Equal Protection Clause",
    vote: "5-4",
    issue: "A man didn't get into college because some spots were saved for certain races",
    importance: "Limited affirmative action but upheld its legality under certain conditions"
  },
  {
    case: "Plessy v. Ferguson",
    year: 1896,
    constitutionalIssue: "Equal Protection Clause",
    vote: "7-1",
    issue: "A man wasn't allowed to sit in the \"whites-only\" part of a train",
    importance: "Established 'separate but equal'"
  },
  {
    case: "Wallace v. Jaffree",
    year: 1985,
    constitutionalIssue: "Establishment Clause",
    vote: "6-3",
    issue: "Every class started with a moment of silence for prayer or meditation",
    importance: "Struck down Alabama's law authorizing school prayer"
  },
  {
    case: "Brandenburg v. Ohio",
    year: 1969,
    constitutionalIssue: "Freedom of Speech",
    vote: "9-0",
    issue: "A man was arrested for giving a hateful speech at a KKK meeting",
    importance: "Protected inflammatory speech unless it incites imminent lawless action"
  },
  {
    case: "Texas v. Johnson",
    year: 1989,
    constitutionalIssue: "Freedom of Speech",
    vote: "5-4",
    issue: "A man was arrested for burning the American flag as a protest",
    importance: "Upholding the right to burn the American flag as symbolic speech"
  },
  {
    case: "Roe v. Wade",
    year: 1973,
    constitutionalIssue: "Right to Privacy",
    vote: "7-2",
    issue: "A woman wanted the right to end her pregnancy",
    importance: "Legalized abortion nationwide; established the trimester framework"
  },
  {
    case: "Tinker v. Des Moines",
    year: 1969,
    constitutionalIssue: "Freedom of Speech",
    vote: "7-2",
    issue: "Kids were told they couldn't wear black armbands to protest a war",
    importance: "Established that symbolic speech was protected under the first amendment"
  },
  {
    case: "Brown v. Board of Education",
    year: 1954,
    constitutionalIssue: "Equal Protection Clause",
    vote: "9-0",
    issue: "Children of color were forced to attend a different school",
    importance: "Declared racial segregation in public schools unconstitutional"
  },
  {
    case: "Engel v. Vitale",
    year: 1962,
    constitutionalIssue: "Establishment Clause",
    vote: "6-1",
    issue: "Teacher led prayer addressed to Almighty God",
    importance: "Struck down mandatory prayer in public schools"
  },
  {
    case: "Dennis v. U.S.",
    year: 1951,
    constitutionalIssue: "Freedom of Speech",
    vote: "6-2",
    issue: "People were arrested for being part of a group that talked about overthrowing the government",
    importance: "Upholding the Smith Act which criminalized advocating the overthrow of the government"
  },
  {
    case: "Schenck v. U.S.",
    year: 1919,
    constitutionalIssue: "Freedom of Speech",
    vote: "9-0",
    issue: "A man told people to ignore the draft during World War I",
    importance: "Established the 'clear and present danger' test for speech"
  },
  {
    case: "Gregory v. Chicago",
    year: 1969,
    constitutionalIssue: "Freedom of Assembly",
    vote: "9-0",
    issue: "Arrest of peaceful protesters during a civil rights march",
    importance: "Upholding the right to peaceful protest"
  },
  {
    case: "Barron v. Baltimore",
    year: 1833,
    constitutionalIssue: "Takings Clause",
    vote: "9-0",
    issue: "City's actions causing damage to private property without compensation",
    importance: "Held that the Bill of Rights only applies to the federal government"
  },
  {
    case: "Mapp v. Ohio",
    year: 1961,
    constitutionalIssue: "Illegal Search and Seizure",
    vote: "6-3",
    issue: "Use of evidence obtained in an illegal search",
    importance: "Established the exclusionary rule preventing illegally obtained evidence from being used in court"
  },
  {
    case: "Swann v. Charlotte-Mecklenburg",
    year: 1971,
    constitutionalIssue: "Equal Protection Clause",
    vote: "9-0",
    issue: "Implementation of school desegregation plans",
    importance: "Upheld busing as a method to achieve school desegregation"
  },
  {
    case: "Furman v. Georgia",
    year: 1972,
    constitutionalIssue: "Cruel and Unusual Punishment",
    vote: "5-4",
    issue: "Arbitrary application of the death penalty",
    importance: "Temporarily halted the death penalty due to inconsistent application"
  },
  {
    case: "Planned Parenthood v. Casey",
    year: 1992,
    constitutionalIssue: "Right to Privacy",
    vote: "5-4",
    issue: "State-imposed abortion restrictions",
    importance: "Reaffirmed Roe v. Wade but allowed states to impose some restrictions on abortion"
  },
  {
    case: "McCulloch v. Maryland",
    year: 1819,
    constitutionalIssue: "Necessary and Proper Clause",
    vote: "9-0",
    issue: "State's attempt to tax the national bank",
    importance: "Established the principle of federal supremacy and upheld the implied powers of Congress"
  }
];
/*
  {
    case: "Miranda v. Arizona",
    year: 1966,
    constitutionalIssue: "Self-Incrimination",
    vote: "5-4",
    issue: "Failure to inform a suspect of their rights during interrogation",
    importance: "Established Miranda rights"
  }
*/

function RandRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// 0: case, 1: year, 2: constIss, 3: vote, 4: issue, 5: importance
let questionType = 0, answerType = 0;
let questionNos = [], answerNos = [];
let curCase = 0;
let question = "";
let answers = [];
let correct = 0;
let correctAnswer = null;
let used = [];

const types = ["Name", "Year", "ConstIss", "Vote", "Iss", "Imp"];
function CheckNoNos(){
  types.forEach(
    (val, ind, arr) => {
      let ansBut = document.getElementById("a" + val);
      let qBut = document.getElementById("q" + val);
      if(!ansBut.checked){
        answerNos.push(ind);
      }
      if(!qBut.checked){
        questionNos.push(ind);
      }
    }
  );
}

function QuestionType(){
  questionType = RandRange(0, 5);

  while(questionNos.includes(questionType)){
    questionType = RandRange(0, 5);
  }

  if(questionType == 0){
    answerType = RandRange(0, 5);
    while(answerType == questionType || answerNos.includes(answerType)){
      answerType = RandRange(0, 5);
    }
  }else{
    answerType = 0;
  }
}

function GetMainCase(){
  let tmpCase = RandRange(0, cases.length - 1);
  while(used.includes(tmpCase)){
    tmpCase = RandRange(0, cases.length - 1);
  }
  used.push(tmpCase);
  return cases[tmpCase];
}

function GetCase(){
  return cases[RandRange(0, cases.length - 1)];
}

function GetValue(_case){
  switch(answerType){
    case 0:
      return (_case.case);
    case 1:
      return(_case.year);
    case 2:
      return(_case.constitutionalIssue);
    case 3:
      return(_case.vote);
    case 4:
      return(_case.issue);
    case 5:
      return(_case.importance);
  }
}

function PushAnswer(_case){
  let val = GetValue(_case);
  answers.push(val);
  return val;
}

function GenerateAnswers(){
  let answerVals = [GetValue(curCase)];
  let tmpVal = GetValue(GetCase());
  for(let i = 0; i < 4; i++){
    while(answerVals.includes(tmpVal)){
      tmpVal = GetValue(GetCase());
    }
    answerVals.push(tmpVal);
  }


  answerCases = Shuffle(answerVals);
  answerCases.forEach((val, i, _)=>{
    answers.push(val);
  });
}

function ResetButtons(){
  for(let i = 0; i < 4; i++){
    let but = document.getElementById(`${i}`);
    but.classList.remove("incorrect");
    but.classList.remove("correct");
    but.disabled = false;
  }
}

function RevealAnswer(){
  for(let i = 0; i < 4; i++){
    let but = document.getElementById(`${i}`);
    but.disabled = true;
    if(answers[i] == GetValue(curCase)){
      but.classList.add("correct");
      but.classList.remove("incorrect");
    }else{
      but.classList.add("incorrect");
      but.classList.remove("correct");
    }
  }
}

function EndQuiz(){
  ResetButtons();
  document.getElementById("question").innerHTML = `You scored a ${Math.round((correct/used.length) * 10000)/100}%`;
}

function GenerateQuestion(){
  answers = [];

  document.getElementById("questionnumber").innerHTML = `${used.length}/${cases.length}`;

  if(cases.length == used.length){
    EndQuiz();
    return;
  }

  ResetButtons();
  QuestionType();
  curCase = GetMainCase();
  correctAnswer = GetValue(curCase);
  GenerateAnswers();

  let keyword = null;
  if(questionType == 0){
    switch(answerType){
      case 1:
        question = `What year was the case ${curCase.case}?`;
        break;
      case 2:
        question = `What was the constitutional issue of ${curCase.case}?`;
        break;
      case 3:
        question = `What was the vote of ${curCase.case}?`;
        break;
      case 4:
        question = `What was the main issue of ${curCase.case}?`;
        break;
      case 5:
        question = `What was the importance of ${curCase.case}?`;
        break;
    }
  }else{
    switch(questionType){
      case 1:
        question = `What case happened in ${curCase.year}?`;
        break;
      case 2:
        question = `Which case's constitutional issue was ${curCase.constitutionalIssue}?`;
        break;
      case 3:
        question = `Which case closed with a ${curCase.vote} vote?`;
        break;
      case 4:
        question = `Which case's main issue was ${curCase.issue}?`;
        break;
      case 5:
        question = `${curCase.importance} is the importance of which case?`;
        break;
    }
  }

  console.log(correctAnswer);

  document.getElementById("question").innerHTML = question;

  for(let i = 0; i < 4; i++){
    document.getElementById(`${i}`).value = answers[i];
  }
}

function Button(button){
  if(answers[button] == GetValue(curCase)){
    correct++;
  }else{
    
  }
  RevealAnswer();
  setTimeout(() => {
    GenerateQuestion();
  }, 1500); 
}

function StartQuiz(){
  correct = 0;
  used = [];
  CheckNoNos();
  GenerateQuestion();
}

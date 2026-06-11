// French Trainer - app.clean.js (single clean runtime)

const EMBEDDED_DATA = [
  {"verb":"être","tense":"présent","pt":"Eu sou feliz.","fr":"Je suis heureux.","explanation":"Présent de 'être'."},
  {"verb":"être","tense":"passé composé","pt":"Eu fui ao mercado.","fr":"Je suis allé au marché.","explanation":"Passé composé de 'être'."},
  {"verb":"être","tense":"imparfait","pt":"Quando eu era criança, eu era feliz.","fr":"Quand j'étais enfant, j'étais heureux.","explanation":"Imparfait de 'être'."},
  {"verb":"être","tense":"futur","pt":"Eu serei médico um dia.","fr":"Je serai médecin un jour.","explanation":"Futur simple de 'être'."},
  {"verb":"être","tense":"conditionnel","pt":"Eu seria feliz se...","fr":"Je serais heureux si...","explanation":"Conditionnel de 'être'."},
  {"verb":"être","tense":"subjonctif","pt":"É importante que eu seja paciente.","fr":"Il est important que je sois patient.","explanation":"Subjonctif de 'être'."},

  {"verb":"avoir","tense":"présent","pt":"Eu tenho um carro.","fr":"J'ai une voiture.","explanation":"Présent de 'avoir'."},
  {"verb":"avoir","tense":"passé composé","pt":"Eu tive um problema ontem.","fr":"J'ai eu un problème hier.","explanation":"Passé composé de 'avoir'."},
  {"verb":"avoir","tense":"imparfait","pt":"Quando eu era jovem, eu tinha tempo.","fr":"Quand j'étais jeune, j'avais le temps.","explanation":"Imparfait de 'avoir'."},
  {"verb":"avoir","tense":"futur","pt":"Eu terei tempo amanhã.","fr":"J'aurai le temps demain.","explanation":"Futur de 'avoir'."},
  {"verb":"avoir","tense":"conditionnel","pt":"Eu teria mais dinheiro se...","fr":"J'aurais plus d'argent si...","explanation":"Conditionnel de 'avoir'."},
  {"verb":"avoir","tense":"subjonctif","pt":"É preciso que eu tenha paciência.","fr":"Il faut que j'aie de la patience.","explanation":"Subjonctif de 'avoir'."},

  {"verb":"aller","tense":"présent","pt":"Eu vou ao cinema.","fr":"Je vais au cinéma.","explanation":"Présent de 'aller'."},
  {"verb":"aller","tense":"passé composé","pt":"Eu fui ao mercado ontem.","fr":"Je suis allé au marché hier.","explanation":"Passé composé de 'aller'."},
  {"verb":"aller","tense":"imparfait","pt":"Quando eu era criança, eu ia à escola a pé.","fr":"Quand j'étais enfant, j'allais à l'école à pied.","explanation":"Imparfait de 'aller'."},
  {"verb":"aller","tense":"futur","pt":"Eu irei à França no próximo ano.","fr":"J'irai en France l'année prochaine.","explanation":"Futur de 'aller'."},
  {"verb":"aller","tense":"conditionnel","pt":"Eu iria se pudesse.","fr":"J'irais si je pouvais.","explanation":"Conditionnel de 'aller'."},
  {"verb":"aller","tense":"subjonctif","pt":"É importante que eu vá agora.","fr":"Il est important que j'aille maintenant.","explanation":"Subjonctif de 'aller'."},

  {"verb":"faire","tense":"présent","pt":"Eu faço o trabalho.","fr":"Je fais le travail.","explanation":"Présent de 'faire'."},
  {"verb":"faire","tense":"passé composé","pt":"Eu fiz a lição.","fr":"J'ai fait les devoirs.","explanation":"Passé composé de 'faire'."},
  {"verb":"faire","tense":"imparfait","pt":"Quando eu era jovem, eu fazia esportes.","fr":"Quand j'étais jeune, je faisais du sport.","explanation":"Imparfait de 'faire'."},
  {"verb":"faire","tense":"futur","pt":"Eu farei isso amanhã.","fr":"Je ferai cela demain.","explanation":"Futur de 'faire'."},
  {"verb":"faire","tense":"conditionnel","pt":"Eu faria se pudesse.","fr":"Je ferais si je pouvais.","explanation":"Conditionnel de 'faire'."},
  {"verb":"faire","tense":"subjonctif","pt":"É preciso que eu faça isso.","fr":"Il faut que je fasse cela.","explanation":"Subjonctif de 'faire'."},

  {"verb":"dire","tense":"présent","pt":"Eu digo a verdade.","fr":"Je dis la vérité.","explanation":"Présent de 'dire'."},
  {"verb":"dire","tense":"passé composé","pt":"Eu disse isso ontem.","fr":"J'ai dit cela hier.","explanation":"Passé composé de 'dire'."},
  {"verb":"dire","tense":"imparfait","pt":"Ele dizia sempre a mesma coisa.","fr":"Il disait toujours la même chose.","explanation":"Imparfait de 'dire'."},
  {"verb":"dire","tense":"futur","pt":"Eu direi mais tarde.","fr":"Je dirai plus tard.","explanation":"Futur de 'dire'."},
  {"verb":"dire","tense":"conditionnel","pt":"Eu diria se soubesse.","fr":"Je dirais si je savais.","explanation":"Conditionnel de 'dire'."},
  {"verb":"dire","tense":"subjonctif","pt":"É importante que ele diga a verdade.","fr":"Il est important qu'il dise la vérité.","explanation":"Subjonctif de 'dire'."},

  {"verb":"pouvoir","tense":"présent","pt":"Eu posso ajudar.","fr":"Je peux aider.","explanation":"Présent de 'pouvoir'."},
  {"verb":"pouvoir","tense":"passé composé","pt":"Eu pude terminar.","fr":"J'ai pu finir.","explanation":"Passé composé de 'pouvoir'."},
  {"verb":"pouvoir","tense":"imparfait","pt":"Eu podia correr mais cedo.","fr":"Je pouvais courir antes.","explanation":"Imparfait de 'pouvoir'."},
  {"verb":"pouvoir","tense":"futur","pt":"Eu poderei ajudar amanhã.","fr":"Je pourrai aider demain.","explanation":"Futur de 'pouvoir'."},
  {"verb":"pouvoir","tense":"conditionnel","pt":"Eu poderia ir se tivesse tempo.","fr":"Je pourrais y aller si j'avais le tempo.","explanation":"Conditionnel de 'pouvoir'."},
  {"verb":"pouvoir","tense":"subjonctif","pt":"É necessário que eu possa falar.","fr":"Il faut que je puisse parler.","explanation":"Subjonctif de 'pouvoir'."},

  {"verb":"vouloir","tense":"présent","pt":"Eu quero ir.","fr":"Je veux y aller.","explanation":"Présent de 'vouloir'."},
  {"verb":"vouloir","tense":"passé composé","pt":"Eu quis ajudar.","fr":"J'ai voulu aider.","explanation":"Passé composé de 'vouloir'."},
  {"verb":"vouloir","tense":"imparfait","pt":"Quando eu era criança, eu queria brinquedos.","fr":"Quand j'étais enfant, je voulais des jouets.","explanation":"Imparfait de 'vouloir'."},
  {"verb":"vouloir","tense":"futur","pt":"Eu quererei isso mais tarde.","fr":"Je voudrai cela mais tarde.","explanation":"Futur de 'vouloir'."},
  {"verb":"vouloir","tense":"conditionnel","pt":"Eu gostaria de um café.","fr":"Je voudrais un café.","explanation":"Conditionnel de 'vouloir'."},
  {"verb":"vouloir","tense":"subjonctif","pt":"É importante que ele queira participar.","fr":"Il est important qu'il veuille participer.","explanation":"Subjonctif de 'vouloir'."},

  {"verb":"voir","tense":"présent","pt":"Eu vejo a casa.","fr":"Je vois la maison.","explanation":"Présent de 'voir'."},
  {"verb":"voir","tense":"passé composé","pt":"Eu vi o filme.","fr":"J'ai vu le filme.","explanation":"Passé composé de 'voir'."},
  {"verb":"voir","tense":"imparfait","pt":"Eu via as estrelas à noite.","fr":"Je voyais as estrelas la nuit.","explanation":"Imparfait de 'voir'."},
  {"verb":"voir","tense":"futur","pt":"Eu verei você amanhã.","fr":"Je te verrai demain.","explanation":"Futur de 'voir'."},
  {"verb":"voir","tense":"conditionnel","pt":"Eu veria se estivesse lá.","fr":"Je verrais si j'étais lá.","explanation":"Conditionnel de 'voir'."},
  {"verb":"voir","tense":"subjonctif","pt":"É preciso que ele veja isto.","fr":"Il faut que il voie cela.","explanation":"Subjonctif de 'voir'."},

  {"verb":"savoir","tense":"présent","pt":"Eu sei a resposta.","fr":"Je sais la resposta.","explanation":"Présent de 'savoir'."},
  {"verb":"savoir","tense":"passé composé","pt":"Eu soube ontem.","fr":"J'ai su hier.","explanation":"Passé composé de 'savoir'."},
  {"verb":"savoir","tense":"imparfait","pt":"Eu sabia a verdade.","fr":"Je savais a verdade.","explanation":"Imparct de 'savoir'."},
  {"verb":"savoir","tense":"futur","pt":"Eu saberei depois.","fr":"Je saurai plus tarde.","explanation":"Futur de 'savoir'."},
  {"verb":"savoir","tense":"conditionnel","pt":"Eu saberia se perguntasse.","fr":"Je saurais si je demandais.","explanation":"Conditionnel de 'savoir'."},
  {"verb":"savoir","tense":"subjonctif","pt":"É importante que ele saiba a verdade.","fr":"Il est important que il sache a verdade.","explanation":"Subjonctif de 'savoir'."},

  {"verb":"devoir","tense":"présent","pt":"Eu devo estudar.","fr":"Je dois étudier.","explanation":"Présent de 'devoir'."},
  {"verb":"devoir","tense":"passé composé","pt":"Eu tive que ir.","fr":"J'ai dû y aller.","explanation":"Passé composé de 'devoir'."},
  {"verb":"devoir","tense":"imparfait","pt":"Eu devia estudar mais cedo.","fr":"Je devais estudar mais cedo.","explanation":"Imparct de 'devoir'."},
  {"verb":"devoir","tense":"futur","pt":"Eu deverei terminar amanhã.","fr":"Je devrai finir demain.","explanation":"Futur de 'devoir'."},
  {"verb":"devoir","tense":"conditionnel","pt":"Eu deveria ir agora.","fr":"Je devrais y aller maintenant.","explanation":"Conditionnel de 'devoir'."},
  {"verb":"devoir","tense":"subjonctif","pt":"É importante que ele deva cumprir.","fr":"Il est importante que il doive respetar.","explanation":"Subjonctif de 'devoir'."}
];

let data = [];

async function loadData(){
  try{
    const resp = await fetch('data.json');
    if(!resp.ok) throw new Error('fetch failed');
    const j = await resp.json();
    if(Array.isArray(j) && j.length) { data = j; return; }
  }catch(e){ /* fallthrough to embedded */ }
  data = EMBEDDED_DATA.slice();
}

// Score tracking (persistent)
const scoreCorrectEl = document.getElementById('scoreCorrect');
const scoreTotalEl = document.getElementById('scoreTotal');
const scoreStreakEl = document.getElementById('scoreStreak');
const resetScoreBtn = document.getElementById('resetScoreBtn');

const SCORE_KEY = 'ft_score_v1';
function loadScore(){ try{ const s = JSON.parse(localStorage.getItem(SCORE_KEY)); return s || {correct:0,total:0,streak:0}; }catch(e){ return {correct:0,total:0,streak:0}; } }
function saveScore(s){ localStorage.setItem(SCORE_KEY, JSON.stringify(s)); }
let score = loadScore();
function updateScoreUI(){ if(scoreCorrectEl) scoreCorrectEl.textContent = score.correct; if(scoreTotalEl) scoreTotalEl.textContent = score.total; if(scoreStreakEl) scoreStreakEl.textContent = score.streak; }
if(resetScoreBtn) resetScoreBtn.addEventListener('click', ()=>{ score = {correct:0,total:0,streak:0}; saveScore(score); updateScoreUI(); });

// DOM refs
const tenseSelect = document.getElementById('tenseSelect');
const verbSelect = document.getElementById('verbSelect');
const ptSentence = document.getElementById('ptSentence');
const answerInput = document.getElementById('answerInput');
const checkBtn = document.getElementById('checkBtn');
const revealBtn = document.getElementById('revealBtn');
const nextBtn = document.getElementById('nextBtn');
const feedback = document.getElementById('feedback');
const notesInput = document.getElementById('notesInput');

function normalizeAnswer(text){
  return (text||'')
    .replace(/[’‘]/g, "'")
    .replace(/[.,;:!?«»()"\-]/g, '')
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\s]+/g, ' ')
    .toLowerCase();
}

function matchesAnswer(user, answer){
  const v = normalizeAnswer(user);
  const t = normalizeAnswer(answer);
  if(v === t) return true;
  return v.replace(/\s/g,'') === t.replace(/\s/g,'');
}

function getTenses(){ return [...new Set(data.map(d=>d.tense))]; }
function getVerbs(){ return [...new Set(data.map(d=>d.verb))]; }

function getNoteKey(verb, tense){ return `note_${verb}_${tense}`; }
function saveNote(verb, tense, text){ localStorage.setItem(getNoteKey(verb, tense), text); }
function loadNote(verb, tense){ return localStorage.getItem(getNoteKey(verb, tense)) || ''; }

function speakAnswer(text){
  if('speechSynthesis' in window){
    window.speechSynthesis.cancel();
    setTimeout(()=>{
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR'; u.rate = 0.95; window.speechSynthesis.speak(u);
    }, 60);
  }
}

function populateTenses(){
  if(!tenseSelect) return;
  const tenses = getTenses();
  tenseSelect.innerHTML = tenses.map(t=>`<option value="${t}">${t}</option>`).join('');
}

function populateVerbs(){
  if(!verbSelect) return;
  const tense = tenseSelect.value;
  const verbs = [...new Set(data.filter(d=>d.tense===tense).map(d=>d.verb))];
  verbSelect.innerHTML = verbs.map(v=>`<option value="${v}">${v}</option>`).join('');
}

let current = null;
function pickExample(){
  if(!tenseSelect || !verbSelect) return;
  const tense = tenseSelect.value;
  const verb = verbSelect.value;
  const pool = data.filter(d=>d.tense===tense && d.verb===verb);
  if(pool.length === 0){ if(ptSentence) ptSentence.textContent = 'Aucun exemple.'; current = null; return; }
  current = pool[Math.floor(Math.random()*pool.length)];
  if(ptSentence) ptSentence.textContent = current.pt;
  if(answerInput) answerInput.value = '';
  if(feedback) feedback.innerHTML = '';
  if(notesInput) notesInput.value = loadNote(verb, tense);
  if(answerInput) answerInput.focus();
}

function checkAnswer(){
  if(!current) return;
  const user = (answerInput && answerInput.value) || '';
  const answers = [current.fr].concat(current.alts||[]);
  const ok = answers.some(a => matchesAnswer(user, a));
  if(ok){
    if(feedback) { feedback.className = 'feedback correct'; feedback.innerHTML = `<strong>Correct !</strong> — ${current.fr}`; }
    score.correct += 1; score.total += 1; score.streak += 1; saveScore(score); updateScoreUI();
    setTimeout(()=>{
      const tenses = getTenses(); const verbs = getVerbs();
      const curT = tenseSelect.value; const curV = verbSelect.value;
      const ti = tenses.indexOf(curT); const vi = verbs.indexOf(curV);
      const nextTi = ti + 1;
      if(nextTi < tenses.length){ tenseSelect.value = tenses[nextTi]; }
      else { const nextVi = vi + 1; if(nextVi < verbs.length){ verbSelect.value = verbs[nextVi]; tenseSelect.value = tenses[0]; } else { verbSelect.value = verbs[0]; tenseSelect.value = tenses[0]; } }
      populateVerbs(); pickExample();
    }, 1400);
  } else {
    score.total += 1; score.streak = 0; saveScore(score); updateScoreUI();
    if(feedback) { feedback.className = 'feedback wrong'; feedback.innerHTML = `<strong>Incorrect.</strong> Attendu: <em>${current.fr}</em><br/>Explication: ${current.explanation}`; }
  }
}

function reveal(){ if(!current) return; if(feedback) { feedback.className='feedback'; feedback.innerHTML = `<strong>Réponse:</strong> ${current.fr}<br/>Explication: ${current.explanation}`; } speakAnswer(current.fr); }

if(tenseSelect) tenseSelect.addEventListener('change', ()=>{ populateVerbs(); pickExample(); });
if(verbSelect) verbSelect.addEventListener('change', pickExample);
if(checkBtn) checkBtn.addEventListener('click', checkAnswer);
if(revealBtn) revealBtn.addEventListener('click', reveal);
if(nextBtn) nextBtn.addEventListener('click', pickExample);
if(answerInput) answerInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') checkAnswer(); });

if(notesInput) notesInput.addEventListener('input', ()=>{ saveNote(verbSelect.value, tenseSelect.value, notesInput.value); });

window.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  populateTenses();
  populateVerbs();
  pickExample();
  updateScoreUI();
});

const meds = [
  { name: "باراسيتامول", category: "مسكنات", indication: "خفّض الحرارة وتسكين الألم", symptoms: ["صداع","حمّى"], bestTimes: ["08:00","14:00","20:00"], img: "💊" },
  { name: "إيبوبروفين", category: "مضادات التهاب", indication: "تخفيف الألم والالتهاب", symptoms: ["التهاب مفاصل","ألم ظهري"], bestTimes: ["09:00","21:00"], img: "💊" },
  { name: "أموكسيسيلين", category: "مضادات حيوية", indication: "علاج الالتهابات البكتيرية", symptoms: ["التهاب حلق","التهابات صدرية"], bestTimes: ["08:00","20:00"], img: "💊" }
];

const resultsEl = document.getElementById('results');
const emptyEl = document.getElementById('emptyState');
const qEl = document.getElementById('q');
const chipsEl = document.getElementById('chips');

const categories = [...new Set(meds.map(m=>m.category))];
let activeCat = null;

// إنشاء فئات الدواء
categories.forEach(cat=>{
  const b = document.createElement('button');
  b.className = 'chip'; b.textContent = cat;
  b.addEventListener('click',()=>{
    activeCat = activeCat===cat ? null : cat;
    [...chipsEl.children].forEach(c=>c.classList.remove('active'));
    if(activeCat) b.classList.add('active');
    render();
  });
  chipsEl.appendChild(b);
});

document.getElementById('searchBtn').addEventListener('click', render);
document.getElementById('resetBtn').addEventListener('click', ()=>{
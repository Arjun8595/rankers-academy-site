function openModal(title, desc, pdfLink) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("pdfBtn").href = pdfLink;

    document.getElementById("notesModal").style.display = "block";
}

function closeModal() {
    document.getElementById("notesModal").style.display = "none";
}

// Close button
document.getElementById("closeBtn").onclick = closeModal;

// Close modal if clicked outside content
window.onclick = function(event) {
    let modal = document.getElementById("notesModal");
    if (event.target === modal) {
        closeModal();
    }
};

// dowload button  kese kare 
function openModal(title, desc, pdfLink) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;

    document.getElementById("pdfBtn").href = pdfLink;       // Open PDF link
    document.getElementById("downloadBtn").href = pdfLink;  // Download button link

    document.getElementById("notesModal").style.display = "block";
}

// open and close accordion
function toggleAccordion(id) {
  const body = document.getElementById(id);

  if (body.style.display === "block") {
    body.style.display = "none";
  } else {
    body.style.display = "block";
  }
}

// Open Join Rankers Modal
function openJoinModal() {
  document.getElementById("joinModal").style.display = "flex";
}

function closeJoinModal() {
  document.getElementById("joinModal").style.display = "none";
}

// OPEN MODAL
function openJoinModal() {
    document.getElementById("joinModal").style.display = "flex";
}

// CLOSE MODAL
function closeJoinModal() {
    document.getElementById("joinModal").style.display = "none";
}

// FORM SUBMIT → BACKEND
function openJoinModal() {
  document.getElementById("joinModal").style.display = "flex";
}

function closeJoinModal() {
  document.getElementById("joinModal").style.display = "none";
}

function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let cls = document.getElementById("class").value;

  // WhatsApp URL (Auto Message)
  let url = `https://api.whatsapp.com/send?phone=918595781558&text=New Enquiry:%0AName: ${name}%0APhone: ${phone}%0AClass: ${cls}`;

  window.open(url, "_blank");
}

// contact form 
function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let cls = document.getElementById("class").value;
  let msg = document.getElementById("message").value;

  let url =
   `https://api.whatsapp.com/send?phone=918595781558&text=New Enquiry:%0AName: ${name}%0APhone: ${phone}%0AClass: ${cls}%0AMessage: ${msg}`;

  window.open(url, "_blank");
}

// search active krne ke liye 
// MENU TOGGLE (PHONE)
document.getElementById("menuIcon").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// SEARCH TOGGLE (PHONE)
document.getElementById("searchIcon").addEventListener("click", () => {
  const search = document.getElementById("searchInput");
  if (search.style.display === "block") {
    search.style.display = "none";
  } else {
    search.style.display = "block";
    search.focus();
  }
});

// SEARCH + HIGHLIGHT (DESKTOP + PHONE)
function removeHighlight(element) {
  element.innerHTML = element.innerText;
}

function highlightText(element, text) {
  const regex = new RegExp(`(${text})`, "gi");
  element.innerHTML = element.innerText.replace(
    regex,
    `<span class="highlight">$1</span>`
  );
}

function searchContent() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".search-item");

  items.forEach(item => {
    removeHighlight(item);
    const text = item.innerText.toLowerCase();

    if (input !== "" && text.includes(input)) {
      item.style.display = "block";
      highlightText(item, input);

      const accordionBody = item.closest(".accordion-body");
      if (accordionBody) accordionBody.style.display = "block";

      const noteCard = item.closest(".note-card");
      if (noteCard) noteCard.style.display = "block";
    } else if (input === "") {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// NCERT CLASS 1 to 10th 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".class-box").forEach(c => c.style.display = "none");
  document.querySelectorAll(".subject-box").forEach(s => s.style.display = "none");
  document.querySelectorAll(".medium-box").forEach(m => m.style.display = "none");
});

// OPEN A CLASS
function openClass(id) {
  document.querySelectorAll(".class-box").forEach(c => {
    c.style.display = "none";
  });
  document.getElementById(id).style.display = "block";

  // When class opens → hide all its subjects & mediums
  document.querySelectorAll(".subject-box").forEach(s => s.style.display = "none");
  document.querySelectorAll(".medium-box").forEach(m => m.style.display = "none");
}

// OPEN A SUBJECT
function openSubject(id) {
  document.querySelectorAll(".subject-box").forEach(s => {
    s.style.display = "none";
  });
  document.getElementById(id).style.display = "block";

  // Hide all mediums when subject changes
  document.querySelectorAll(".medium-box").forEach(m => m.style.display = "none");
}

// OPEN A MEDIUM
function openMedium(id) {
  document.querySelectorAll(".medium-box").forEach(m => {
    m.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}



// NCERT CLASS 11TH & 12TH 
let currentState = {
    class: null,
    stream: null,
    subject: null,
    medium: null
};

const subjects = {
    'Arts': ['History', 'Political Science', 'Geography'],
    'Commerce': ['Accountancy', 'Business Studies', 'Economics'],
    'Science': ['Physics', 'Chemistry', 'Mathematics']
};

const chapters = {
    'Physics': [
        'Chapter 1: Physical World',
        'Chapter 2: Units and Measurements',
        'Chapter 3: Motion in a Straight Line'
    ],
    'Chemistry': [
        'Chapter 1: Some Basic Concepts of Chemistry',
        'Chapter 2: Structure of Atom',
        'Chapter 3: Classification of Elements'
    ],
    'Mathematics': [
        'Chapter 1: Sets',
        'Chapter 2: Relations and Functions',
        'Chapter 3: Trigonometric Functions'
    ],
    'History': [
        'Chapter 1: Early Societies',
        'Chapter 2: Writing and City Life',
        'Chapter 3: An Empire Across Three Continents'
    ],
    'Political Science': [
        'Chapter 1: Constitution: Why and How?',
        'Chapter 2: Rights in the Indian Constitution',
        'Chapter 3: Election and Representation'
    ],
    'Geography': [
        'Chapter 1: Geography as a Discipline',
        'Chapter 2: The Origin and Evolution of the Earth',
        'Chapter 3: Interior of the Earth'
    ],
    'Accountancy': [
        'Chapter 1: Introduction to Accounting',
        'Chapter 2: Theory Base of Accounting',
        'Chapter 3: Recording of Transactions-I'
    ],
    'Business Studies': [
        'Chapter 1: Nature and Purpose of Business',
        'Chapter 2: Forms of Business Organisation',
        'Chapter 3: Private, Public and Global Enterprises'
    ],
    'Economics': [
        'Chapter 1: Introduction',
        'Chapter 2: Theory of Consumer Behaviour',
        'Chapter 3: Production and Costs'
    ]
};

function selectClass(cls) {
    currentState.class = cls;
    document.getElementById('selectedClass').textContent = cls + 'th';
    hideAll();
    document.getElementById('streamSection').classList.remove('hidden');
}

function selectStream(stream) {
    currentState.stream = stream;
    document.getElementById('bcClass').textContent = currentState.class + 'th';
    document.getElementById('bcStream').textContent = stream;
    
    const subjectGrid = document.getElementById('subjectGrid');
    subjectGrid.innerHTML = '';
    
    subjects[stream].forEach(subject => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => selectSubject(subject);
        card.innerHTML = `<h3>${subject}</h3>`;
        subjectGrid.appendChild(card);
    });
    
    hideAll();
    document.getElementById('subjectSection').classList.remove('hidden');
}

function selectSubject(subject) {
    currentState.subject = subject;
    document.getElementById('bcClass2').textContent = currentState.class + 'th';
    document.getElementById('bcStream2').textContent = currentState.stream;
    document.getElementById('bcSubject').textContent = subject;
    
    hideAll();
    document.getElementById('mediumSection').classList.remove('hidden');
}

function selectMedium(medium) {
    currentState.medium = medium;
    document.getElementById('bcClass3').textContent = currentState.class + 'th';
    document.getElementById('bcStream3').textContent = currentState.stream;
    document.getElementById('bcSubject2').textContent = currentState.subject;
    document.getElementById('bcMedium').textContent = medium;
    
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = '';
    
    const chaps = chapters[currentState.subject] || [];
    chaps.forEach((chapter, index) => {
        const li = document.createElement('li');
        li.className = 'chapter-item';
        li.innerHTML = `
            <span class="chapter-title">${chapter}</span>
            <div class="btn-group">
                <button class="view-btn" onclick="viewPDF('${chapter}', ${index})">View PDF</button>
                <button class="download-btn" onclick="downloadPDF('${chapter}', ${index})">Download</button>
            </div>
        `;
        chapterList.appendChild(li);
    });
    
    hideAll();
    document.getElementById('chapterSection').classList.remove('hidden');
}

function viewPDF(chapter, index) {
    // YAHA APNE PDF KI LINK DAAL DENA
    const pdfUrl = `chapter1.pdf`;
    
    document.getElementById('pdfBreadcrumb').textContent = 
        `Class ${currentState.class}th > ${currentState.stream} > ${currentState.subject} > ${currentState.medium} > ${chapter}`;
    document.getElementById('pdfTitle').textContent = chapter;
    document.getElementById('pdfViewer').src = pdfUrl;
    
    hideAll();
    document.getElementById('pdfSection').classList.remove('hidden');
}

function downloadPDF(chapter, index) {
    // YAHA APNE PDF KI LINK DAAL DENA
    const pdfUrl = `https://www.africau.edu/images/default/sample.pdf`;
    const fileName = `${currentState.subject}_${chapter.replace(/[^a-zA-Z0-9]/g, '_')}_${currentState.medium}.pdf`;
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`Downloading: ${chapter} (${currentState.medium})`);
}

function goBack(to) {
    hideAll();
    
    switch(to) {
        case 'class':
            currentState = { class: null, stream: null, subject: null, medium: null };
            document.getElementById('classSection').classList.remove('hidden');
            break;
        case 'stream':
            currentState.stream = null;
            currentState.subject = null;
            currentState.medium = null;
            document.getElementById('streamSection').classList.remove('hidden');
            break;
        case 'subject':
            currentState.subject = null;
            currentState.medium = null;
            document.getElementById('subjectSection').classList.remove('hidden');
            break;
        case 'medium':
            currentState.medium = null;
            document.getElementById('mediumSection').classList.remove('hidden');
            break;
        case 'chapter':
            document.getElementById('chapterSection').classList.remove('hidden');
            break;
    }
}

function hideAll() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
}

// 11th 12th
/* ===============================
   NCERT NOTES – ISOLATED SCRIPT
   =============================== */
/* =====================================
   NCERT NOTES – INSIDE script.js (SAFE)
   ===================================== */

const notesState = {
  class: "",
  stream: "",
  subject: "",
  medium: "",
  chapter: ""
};

const n = id => document.getElementById(id);

function notesHideAll() {
  [
    "notesClassSection",
    "notesStreamSection",
    "notesSubjectSection",
    "notesMediumSection",
    "notesChapterSection",
    "notesPdfSection"
  ].forEach(id => n(id).classList.add("hidden"));
}

function notesSelectClass(cls) {
  notesState.class = cls;
  notesHideAll();
  n("notesSelectedClass").innerText = cls;
  n("notesStreamSection").classList.remove("hidden");
}

function notesSelectStream(stream) {
  notesState.stream = stream;
  notesHideAll();
  n("notesBcClass").innerText = notesState.class;
  n("notesBcStream").innerText = stream;
  n("notesSubjectSection").classList.remove("hidden");
  notesLoadSubjects();
}

function notesLoadSubjects() {
  const subjects = {
    Science: ["Physics", "Chemistry", "Maths", "Biology"],
    Commerce: ["Accountancy", "Business Studies", "Economics"],
    Arts: ["History", "Political Science", "Geography"]
  };

  const grid = n("notesSubjectGrid");
  grid.innerHTML = "";

  subjects[notesState.stream].forEach(sub => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = sub;
    div.onclick = () => notesSelectSubject(sub);
    grid.appendChild(div);
  });
}

function notesSelectSubject(subject) {
  notesState.subject = subject;
  notesHideAll();
  n("notesBcClass2").innerText = notesState.class;
  n("notesBcStream2").innerText = notesState.stream;
  n("notesBcSubject").innerText = subject;
  n("notesMediumSection").classList.remove("hidden");
}

function notesSelectMedium(medium) {
  notesState.medium = medium;
  notesHideAll();
  n("notesBcClass3").innerText = notesState.class;
  n("notesBcStream3").innerText = notesState.stream;
  n("notesBcSubject2").innerText = notesState.subject;
  n("notesBcMedium").innerText = medium;
  n("notesChapterSection").classList.remove("hidden");
  notesLoadChapters();
}

function notesLoadChapters() {
  const list = n("notesChapterList");
  list.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    const li = document.createElement("li");
    li.textContent = `Chapter ${i}`;
    li.onclick = () =>
      notesOpenPDF(`chapter-${i}.pdf`, `Chapter ${i}`);
    list.appendChild(li);
  }
}

function notesOpenPDF(pdfFile, chapterName) {
  notesState.chapter = chapterName;
  notesHideAll();

  n("notesPdfSection").classList.remove("hidden");

  n("notesPdfTitle").innerText =
    `${notesState.subject} – ${chapterName} Notes`;

  n("notesPdfBreadcrumb").innerText =
    `Class ${notesState.class} › ${notesState.stream} › ${notesState.subject} › ${notesState.medium} › ${chapterName}`;

  const pdfPath = `notes-pdf/${pdfFile}`;
  n("notesPdfViewer").src = pdfPath;

  notesAddDownloadBtn(pdfPath);
}

function notesAddDownloadBtn(pdfPath) {
  let btn = document.getElementById("notesDownloadBtn");

  if (!btn) {
    btn = document.createElement("a");
    btn.id = "notesDownloadBtn";
    btn.innerText = "⬇ Download PDF";
    btn.href = pdfPath;
    btn.download = "";
    btn.style.display = "inline-block";
    btn.style.margin = "15px 0";
    btn.style.padding = "10px 18px";
    btn.style.background = "#4f46e5";
    btn.style.color = "#fff";
    btn.style.borderRadius = "8px";
    btn.style.textDecoration = "none";

    n("notesPdfSection").insertBefore(btn, n("notesPdfTitle"));
  } else {
    btn.href = pdfPath;
  }
}

function notesGoBack(step) {
  notesHideAll();
  if (step === "class") n("notesClassSection").classList.remove("hidden");
  if (step === "stream") n("notesStreamSection").classList.remove("hidden");
  if (step === "subject") n("notesSubjectSection").classList.remove("hidden");
  if (step === "medium") n("notesMediumSection").classList.remove("hidden");
  if (step === "chapter") n("notesChapterSection").classList.remove("hidden");
}

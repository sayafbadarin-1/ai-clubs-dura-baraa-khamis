// قاعدة بيانات بسيطة للأدوية
const medicines = {
    "باراسيتامول": {
        image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Paracetamol-500mg.jpg",
        uses: "تسكين الألم وخفض الحرارة.",
        sideEffects: "غثيان، صداع، طفح جلدي نادر.",
        bestTime: "يمكن تناوله مع الطعام أو بدونه."
    },
    "ايبوبروفين": {
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ibuprofen_400mg.jpg",
        uses: "تخفيف الألم والالتهاب وخفض الحرارة.",
        sideEffects: "اضطرابات معدية، دوخة، طفح جلدي.",
        bestTime: "يفضل تناوله مع الطعام لتجنب اضطرابات المعدة."
    },
    "أموكسيسيلين": {
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Amoxicillin_capsules.jpg",
        uses: "مضاد حيوي لعلاج الالتهابات البكتيرية.",
        sideEffects: "إسهال، غثيان، طفح جلدي.",
        bestTime: "يفضل تناوله قبل أو بعد الطعام حسب توصية الطبيب."
    }
};

function searchMedicine() {
    const input = document.getElementById("medicineInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (medicines[input]) {
        const med = medicines[input];
        resultDiv.innerHTML = `
            <img src="${med.image}" alt="${input}">
            <h2>${input}</h2>
            <p><strong>دواعي الاستعمال:</strong> ${med.uses}</p>
            <p><strong>الأعراض الجانبية:</strong> ${med.sideEffects}</p>
            <p><strong>أفضل وقت لتناوله:</strong> ${med.bestTime}</p>
        `;
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerHTML = `<p>عذرًا، لم يتم العثور على معلومات لهذا الدواء.</p>`;
        resultDiv.style.display = "block";
    }
}

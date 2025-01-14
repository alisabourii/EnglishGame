let colors = ["#f82", "#0bf", "#fb1", "#0fb", "#b0f", "#f0b", "#bf1", "#f1b" ];
let selectedWord = "";
function generateRoutate(sectors) {
    // Generate random float in range min-max:
    const rand = (m, M) => Math.random() * (M - m) + m;
    const tot = sectors.length;
    const elSpin = document.querySelector("#spin");
    const ctx = document.querySelector("#wheel").getContext`2d`;
    const dia = ctx.canvas.width;
    const rad = dia / 2;
    const PI = Math.PI;
    const TAU = 2 * PI;
    const arc = TAU / tot;
    const friction = 0.991;  // 0.995=soft, 0.99=mid, 0.98=hard
    const angVelMin = 0.002; // Below that number will be treated as a stop
    let angVelMax = 0; // Random ang.vel. to accelerate to
    let angVel = 0;    // Current angular velocity
    let ang = 0;       // Angle rotation in radians
    let isSpinning = false;
    let isAccelerating = false;
    let animFrame = null; // Engine's requestAnimationFrame

    //* Get index of current sector */
    const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;

    //* Draw sectors and prizes texts to canvas */
    const drawSector = (sector, i) => {
        const ang = arc * i;
        ctx.save();
        // COLOR
        ctx.beginPath();
        ctx.fillStyle = sector.color;
        ctx.moveTo(rad, rad);
        ctx.arc(rad, rad, rad, ang, ang + arc);
        ctx.lineTo(rad, rad);
        ctx.fill();
        // TEXT
        ctx.translate(rad, rad);
        ctx.rotate(ang + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px sans-serif";
        ctx.fillText(sector.label, rad - 10, 10);
        //
        ctx.restore();
    };

    //* CSS rotate CANVAS Element */
    const rotate = () => {
        const sector = sectors[getIndex()];
        ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
        elSpin.textContent = "SPIN";
        elSpin.style.background = sector.color;
       document.getElementById("word").innerHTML = sector.label;
        selectedWord = sector.label;

    };


    const frame = () => {

        if (!isSpinning) return;

        if (angVel >= angVelMax) isAccelerating = false;

        // Accelerate
        if (isAccelerating) {
            angVel ||= angVelMin; // Initial velocity kick
            angVel *= 1.06; // Accelerate
        }

        // Decelerate
        else {
            isAccelerating = false;
            angVel *= friction; // Decelerate by friction

            // SPIN END:
            if (angVel < angVelMin) {
                isSpinning = false;
                angVel = 0;
                cancelAnimationFrame(animFrame);
            }
        }

        ang += angVel; // Update angle
        ang %= TAU;    // Normalize angle
        rotate();      // CSS rotate!
        const sector = sectors[getIndex()];

    };

    const engine = () => {
        frame();
        animFrame = requestAnimationFrame(engine)
    };

    elSpin.addEventListener("click", () => {
        if (isSpinning) return;
        isSpinning = true;
        isAccelerating = true;
        angVelMax = rand(0.25, 0.40);
        engine(); // Start engine!
    });

    // INIT!
    sectors.forEach(drawSector);
    rotate(); // Initial rotation
}
const dictionary = {
    "elma": "apple",
    "armut": "pear",
    "masa": "table",
    "kalem": "pen",
    "defter": "notebook",
    "araba": "car",
    "ev": "house",
    "yol": "road",
    "köpek": "dog",
    "kedi": "cat",
    "çiçek": "flower",
    "ağaç": "tree",
    "deniz": "sea",
    "göl": "lake",
    "güneş": "sun",
    "ay": "moon",
    "yıldız": "star",
    "dağ": "mountain",
    "nehir": "river",
    "çay": "tea",
    "kahve": "coffee",
    "su": "water",
    "ekmek": "bread",
    "peynir": "cheese",
    "süt": "milk",
    "yağ": "oil",
    "yumurta": "egg",
    "et": "meat",
    "balık": "fish",
    "tavuk": "chicken",
    "ördek": "duck",
    "kaz": "goose",
    "kuş": "bird",
    "uçak": "airplane",
    "tren": "train",
    "bisiklet": "bicycle",
    "motor": "motorcycle",
    "çocuk": "child",
    "adam": "man",
    "kadın": "woman",
    "aile": "family",
    "arkadaş": "friend",
    "öğrenci": "student",
    "öğretmen": "teacher",
    "doktor": "doctor",
    "hemşire": "nurse",
    "polis": "police",
    "asker": "soldier",
    "şoför": "driver",
    "işçi": "worker",
    "yazar": "writer",
    "şair": "poet",
    "ressam": "painter",
    "mimar": "architect",
    "mühendis": "engineer",
    "programcı": "programmer",
    "bilgisayar": "computer",
    "telefon": "phone",
    "televizyon": "television",
    "radyo": "radio",
    "buzdolabı": "refrigerator",
    "çamaşır makinesi": "washing machine",
    "bulaşık makinesi": "dishwasher",
    "saat": "clock",
    "kalp": "heart",
    "beyin": "brain",
    "göz": "eye",
    "kulak": "ear",
    "burun": "nose",
    "ağız": "mouth",
    "diş": "tooth",
    "saç": "hair",
    "el": "hand",
    "ayak": "foot",
    "parmak": "finger",
    "diz": "knee",
    "omuz": "shoulder",
    "karın": "abdomen",
    "sırt": "back",
    "rüzgar": "wind",
    "yağmur": "rain",
    "kar": "snow",
    "bulut": "cloud",
    "şimşek": "lightning",
    "gökkuşağı": "rainbow",
    "bahar": "spring",
    "yaz": "summer",
    "sonbahar": "autumn",
    "kış": "winter",
    "okul": "school",
    "kitap": "book",
    "film": "movie",
    "oyun": "game",
    "müzik": "music",
    "şarkı": "song",
    "dans": "dance",
    "spor": "sport",
    "cevaplamak": "answer",
    "araştırmak": "research",
    "öneride bulunmak": "suggest",
    "katılmak": "participate",
    "çözüm üretmek": "solve",
    "tanımlamak": "define",
    "başarmak": "achieve",
    "zorunlu": "mandatory",
    "kapsamlı": "comprehensive",
    "geliştirmek": "develop",
    "planlamak": "plan",
    "değerlendirmek": "evaluate",
    "karşılaştırmak": "compare",
    "önermek": "propose",
    "tamamlamak": "complete",
    "anlamlandırmak": "interpret",
    "özgürlük": "freedom",
    "adalet": "justice",
    "demokrasi": "democracy",
    "birey": "individual",
    "toplum": "society",
    "kültür": "culture",
    "gelenek": "tradition",
    "yenilik": "innovation",
    "ilerleme": "progress",
    "yaratıcılık": "creativity",
    "vizyon": "vision",
    "strateji": "strategy",
    "karar": "decision",
    "işbirliği": "collaboration",
    "liderlik": "leadership",
    "motivasyon": "motivation",
    "belirsizlik": "uncertainty",
    "tutarlılık": "consistency",
    "teknoloji": "technology",
    "sanayi": "industry",
    "girişim": "initiative",
    "ürün": "product",
    "hizmet": "service",
    "kaynak": "resource",
    "ekonomi": "economy",
    "yatırım": "investment",
    "bütçe": "budget",
    "verimlilik": "efficiency",
    "pazarlama": "marketing",
    "işletme": "business",
    "karlılık": "profitability",
    "stratejik": "strategic",
    "uygulama": "application",
    "tasarım": "design",
    "mimari": "architecture",
    "altyapı": "infrastructure",
    "güvenlik": "security",
    "çeviklik": "agility",
    "inovasyon": "innovation",
    "optimizasyon": "optimization",
    "etkileşim": "interaction",
    "şeffaflık": "transparency",
    "etik": "ethics",
    "hesap verebilirlik": "accountability",
    "yatırımcı": "investor",
    "tedarik": "supply",
    "lojistik": "logistics",
    "dağıtım": "distribution",
    "satış": "sales",
    "müşteri": "customer",
    "rekabet": "competition",
    "işlev": "function",
    "veri": "data",
    "bilgi": "information",
    "analiz": "analysis",
    "sorgulama": "query",
    "algoritma": "algorithm",
    "modelleme": "modeling",
    "simülasyon": "simulation",
    "öğrenme": "learning",
    "uyarlama": "adaptation",
    "zorluk": "challenge",
    "risk": "risk",
    "fırsat": "opportunity",
    "hedef": "goal",
    "sonuç": "outcome",
    "çözüm": "solution",
    "odaklanmak": "focus",
    "araç": "tool",
    "kriter": "criteria",
    "temsilci": "representative",
    "değer": "value",
    "buluş": "invention",
    "hipotez": "hypothesis",
    "sınıflandırma": "classification",
    "deneyim": "experience",
    "algı": "perception",
    "gözlem": "observation",
    "tecrübe": "expertise",
    "katkı": "contribution",
    "uyum": "alignment",
    "veri tabanı": "database",
    "bağlam": "context",
    "özellik": "feature",
    "kapsam": "scope",
    "cevaplamak": "answer",
    "araştırmak": "research",
    "öneride bulunmak": "suggest",
    "katılmak": "participate",
    "çözüm üretmek": "solve",
    "tanımlamak": "define",
    "başarmak": "achieve",
    "zorunlu": "mandatory",
    "kapsamlı": "comprehensive",
    "geliştirmek": "develop",
    "planlamak": "plan",
    "değerlendirmek": "evaluate",
    "karşılaştırmak": "compare",
    "önermek": "propose",
    "tamamlamak": "complete",
    "anlamlandırmak": "interpret",
    "özgürlük": "freedom",
    "adalet": "justice",
    "demokrasi": "democracy",
    "birey": "individual",
    "toplum": "society",
    "kültür": "culture",
    "gelenek": "tradition",
    "yenilik": "innovation",
    "ilerleme": "progress",
    "yaratıcılık": "creativity",
    "vizyon": "vision",
    "strateji": "strategy",
    "karar": "decision",
    "işbirliği": "collaboration",
    "liderlik": "leadership",
    "motivasyon": "motivation",
    "belirsizlik": "uncertainty",
    "tutarlılık": "consistency",
    "teknoloji": "technology",
    "sanayi": "industry",
    "girişim": "initiative",
    "ürün": "product",
    "hizmet": "service",
    "kaynak": "resource",
    "ekonomi": "economy",
    "yatırım": "investment",
    "bütçe": "budget",
    "verimlilik": "efficiency",
    "pazarlama": "marketing",
    "işletme": "business",
    "karlılık": "profitability",
    "stratejik": "strategic",
    "uygulama": "application",
    "tasarım": "design",
    "mimari": "architecture",
    "altyapı": "infrastructure",
    "güvenlik": "security",
    "çeviklik": "agility",
    "inovasyon": "innovation",
    "optimizasyon": "optimization",
    "etkileşim": "interaction",
    "şeffaflık": "transparency",
    "etik": "ethics",
    "hesap verebilirlik": "accountability",
    "yatırımcı": "investor",
    "tedarik": "supply",
    "lojistik": "logistics",
    "dağıtım": "distribution",
    "satış": "sales",
    "müşteri": "customer",
    "rekabet": "competition",
    "işlev": "function",
    "veri": "data",
    "bilgi": "information",
    "analiz": "analysis",
    "sorgulama": "query",
    "algoritma": "algorithm",
    "modelleme": "modeling",
    "simülasyon": "simulation",
    "öğrenme": "learning",
    "uyarlama": "adaptation",
    "zorluk": "challenge",
    "risk": "risk",
    "fırsat": "opportunity",
    "hedef": "goal",
    "sonuç": "outcome",
    "çözüm": "solution",
    "odaklanmak": "focus",
    "araç": "tool",
    "kriter": "criteria",
    "temsilci": "representative",
    "değer": "value",
    "buluş": "invention",
    "hipotez": "hypothesis",
    "sınıflandırma": "classification",
    "deneyim": "experience",
    "algı": "perception",
    "gözlem": "observation",
    "tecrübe": "expertise",
    "katkı": "contribution",
    "uyum": "alignment",
    "veri tabanı": "database",
    "bağlam": "context",
    "özellik": "feature",
    "kapsam": "scope"
};

var totalScore = 0;
function translateWord(word) {
    const translatedWord = dictionary[word.toLowerCase()];
    if (translatedWord) {
        return translatedWord;
    } else {
        return "Çeviri bulunamadı!";
    }
}

function controlTranslate() {
// Kullanım örneği
    var input = document.getElementById("answer").value;
    const englishWord = translateWord(input);
    console.log(`${selectedWord} -> ${englishWord}`);
    if(selectedWord == englishWord){
        startEmojiEffect(true);
        totalScore ++;
    }else{
        startEmojiEffect(false);
        totalScore --;
    }
    document.getElementById('score').innerText = totalScore;
}

function startEmojiEffect(efects) {
    const emojis = efects?["🎉", "⭐"]:[" 💥 ", "❌"];
    for (let i = 0; i < 50; i++) {
        const emojiElement = document.createElement("div");
        emojiElement.classList.add("emoji");
        emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Rastgele pozisyon
        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.animationDuration = `${Math.random() * 2 + 2}s`;

        document.body.appendChild(emojiElement);

        // Animasyon bitince elemanı sil
        emojiElement.addEventListener('animationend', () => {
            emojiElement.remove();
        });
    }
}


var input = document.getElementById("answer");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sumbitBtn").click();

    }
});

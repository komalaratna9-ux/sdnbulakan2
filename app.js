// ============================================================================
// MEDIA PEMBELAJARAN SDN BULAKAN 2 — BY RATNA KOMALA
// Papan Interaktif Digital (PID) 3 Pemain Simultan:
// 1) Bahasa Indonesia: Gelembung Kata "di" (Kata Depan vs Imbuhan)
// 2) Matematika: Kuis 5 Soal Cerita Pendek Penjumlahan & Pengurangan
// ============================================================================

// --- BANK KATA BAHASA INDONESIA ---
const WORD_BANK = [
  // KATA DEPAN (PREPOSISI) - DIPISAH
  { word: "di sekolah", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di rumah", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di pasar", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di kelas", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di atas", type: "preposisi", valid: true, points: 10, note: "Posisi (Dipisah)" },
  { word: "di bawah", type: "preposisi", valid: true, points: 10, note: "Posisi (Dipisah)" },
  { word: "di kantin", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di taman", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di dapur", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di lapangan", type: "preposisi", valid: true, points: 15, note: "Tempat (Dipisah)" },
  { word: "di halaman", type: "preposisi", valid: true, points: 15, note: "Tempat (Dipisah)" },
  { word: "di perpustakaan", type: "preposisi", valid: true, points: 20, note: "Bonus! Tempat (Dipisah)" },
  { word: "di samping", type: "preposisi", valid: true, points: 10, note: "Arah (Dipisah)" },
  { word: "di depan", type: "preposisi", valid: true, points: 10, note: "Posisi (Dipisah)" },
  { word: "di belakang", type: "preposisi", valid: true, points: 15, note: "Posisi (Dipisah)" },
  { word: "di pantai", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di sungai", type: "preposisi", valid: true, points: 10, note: "Tempat (Dipisah)" },
  { word: "di meja", type: "preposisi", valid: true, points: 10, note: "Letak (Dipisah)" },
  { word: "di lemari", type: "preposisi", valid: true, points: 10, note: "Letak (Dipisah)" },

  // KATA IMBUHAN (AWALAN) - DIGABUNG
  { word: "dimakan", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "ditulis", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dibaca", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dibeli", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dijual", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dicuci", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "disapu", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dimasak", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dibuka", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "ditutup", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dipinjam", type: "imbuhan", valid: true, points: 15, note: "Kata Kerja (Digabung)" },
  { word: "dilempar", type: "imbuhan", valid: true, points: 15, note: "Kata Kerja (Digabung)" },
  { word: "ditangkap", type: "imbuhan", valid: true, points: 15, note: "Kata Kerja (Digabung)" },
  { word: "digambar", type: "imbuhan", valid: true, points: 15, note: "Kata Kerja (Digabung)" },
  { word: "dibersihkan", type: "imbuhan", valid: true, points: 20, note: "Bonus! Imbuhan (Digabung)" },
  { word: "dirapikan", type: "imbuhan", valid: true, points: 20, note: "Bonus! Imbuhan (Digabung)" },
  { word: "disiram", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },
  { word: "dipotong", type: "imbuhan", valid: true, points: 10, note: "Kata Kerja (Digabung)" },

  // JEBAKAN PENULISAN SALAH
  { word: "disekolah", type: "preposisi", valid: false, points: 10, note: "Salah! Harusnya: di sekolah" },
  { word: "dirumah", type: "preposisi", valid: false, points: 10, note: "Salah! Harusnya: di rumah" },
  { word: "dipasar", type: "preposisi", valid: false, points: 10, note: "Salah! Harusnya: di pasar" },
  { word: "diatas", type: "preposisi", valid: false, points: 10, note: "Salah! Harusnya: di atas" },
  { word: "dikantin", type: "preposisi", valid: false, points: 10, note: "Salah! Harusnya: di kantin" },
  { word: "di makan", type: "imbuhan", valid: false, points: 10, note: "Salah! Harusnya: dimakan" },
  { word: "di tulis", type: "imbuhan", valid: false, points: 10, note: "Salah! Harusnya: ditulis" },
  { word: "di baca", type: "imbuhan", valid: false, points: 10, note: "Salah! Harusnya: dibaca" },
  { word: "di beli", type: "imbuhan", valid: false, points: 10, note: "Salah! Harusnya: dibeli" },
  { word: "di cuci", type: "imbuhan", valid: false, points: 10, note: "Salah! Harusnya: dicuci" }
];

// --- BANK SOAL CERITA PENDEK MATEMATIKA (PENJUMLAHAN & PENGURANGAN) ---
const MATH_STORY_BANK = [
  // PENJUMLAHAN (ADD)
  {
    op: "ADD",
    emoji: "🍎",
    story: "Ibu membeli 14 buah apel merah dan 11 buah apel hijau. Berapa jumlah seluruh apel Ibu sekarang?",
    answer: "25 apel",
    options: ["23 apel", "24 apel", "25 apel", "26 apel"],
    explanation: "14 + 11 = 25 apel"
  },
  {
    op: "ADD",
    emoji: "📚",
    story: "Di meja guru ada 18 buku cerita. Rina meletakkan lagi 9 buku cerita. Berapa banyak buku seluruhnya?",
    answer: "27 buku",
    options: ["25 buku", "27 buku", "28 buku", "29 buku"],
    explanation: "18 + 9 = 27 buku"
  },
  {
    op: "ADD",
    emoji: "🎈",
    story: "Budi memiliki 16 balon biru, lalu Ayah membelikannya 12 balon kuning. Berapa jumlah balon Budi?",
    answer: "28 balon",
    options: ["26 balon", "27 balon", "28 balon", "30 balon"],
    explanation: "16 + 12 = 28 balon"
  },
  {
    op: "ADD",
    emoji: "🐣",
    story: "Di kandang Pak Tani ada 22 ekor anak ayam. Hari ini menetas lagi 13 ekor. Berapa jumlah anak ayam sekarang?",
    answer: "35 ekor",
    options: ["33 ekor", "34 ekor", "35 ekor", "36 ekor"],
    explanation: "22 + 13 = 35 ekor"
  },
  {
    op: "ADD",
    emoji: "✏️",
    story: "Siti punya 15 pensil warna, lalu diberi Kakak 15 pensil warna lagi. Berapa jumlah pensil warna Siti?",
    answer: "30 pensil",
    options: ["25 pensil", "28 pensil", "30 pensil", "32 pensil"],
    explanation: "15 + 15 = 30 pensil"
  },
  {
    op: "ADD",
    emoji: "🍩",
    story: "Toko kue membuat 24 donat cokelat dan 14 donat stroberi. Berapa jumlah semua donat yang dibuat?",
    answer: "38 donat",
    options: ["36 donat", "37 donat", "38 donat", "40 donat"],
    explanation: "24 + 14 = 38 donat"
  },
  {
    op: "ADD",
    emoji: "🐟",
    story: "Di kolam sekolah ada 19 ikan mas dan 13 ikan nila. Berapa jumlah seluruh ikan di dalam kolam?",
    answer: "32 ikan",
    options: ["30 ikan", "31 ikan", "32 ikan", "34 ikan"],
    explanation: "19 + 13 = 32 ikan"
  },
  {
    op: "ADD",
    emoji: "⚽",
    story: "SDN Bulakan 2 memiliki 17 bola sepak dan 8 bola voli. Berapa jumlah seluruh bola milik sekolah?",
    answer: "25 bola",
    options: ["23 bola", "24 bola", "25 bola", "26 bola"],
    explanation: "17 + 8 = 25 bola"
  },
  {
    op: "ADD",
    emoji: "🌸",
    story: "Di taman depan kelas mekar 21 bunga mawar dan 16 bunga melati. Berapa jumlah semua bunga yang mekar?",
    answer: "37 bunga",
    options: ["35 bunga", "36 bunga", "37 bunga", "39 bunga"],
    explanation: "21 + 16 = 37 bunga"
  },
  {
    op: "ADD",
    emoji: "🍬",
    story: "Doni membawa 25 permen susu dan 15 permen jeruk untuk teman sekelas. Berapa total permen Doni?",
    answer: "40 permen",
    options: ["35 permen", "38 permen", "40 permen", "42 permen"],
    explanation: "25 + 15 = 40 permen"
  },

  // PENGURANGAN (SUB)
  {
    op: "SUB",
    emoji: "🍊",
    story: "Ibu mempunyai 28 buah jeruk. Sebanyak 12 jeruk diberikan kepada tetangga. Berapa sisa jeruk Ibu?",
    answer: "16 jeruk",
    options: ["14 jeruk", "15 jeruk", "16 jeruk", "18 jeruk"],
    explanation: "28 - 12 = 16 jeruk"
  },
  {
    op: "SUB",
    emoji: "🐦",
    story: "Ada 25 burung bertengger di pohon. Tiba-tiba 9 burung terbang pergi. Berapa burung yang masih di pohon?",
    answer: "16 burung",
    options: ["14 burung", "15 burung", "16 burung", "17 burung"],
    explanation: "25 - 9 = 16 burung"
  },
  {
    op: "SUB",
    emoji: "🔮",
    story: "Edo memiliki 30 butir kelereng. Saat bermain, ia memberikan 13 kelereng kepada adiknya. Berapa sisa kelereng Edo?",
    answer: "17 kelereng",
    options: ["16 kelereng", "17 kelereng", "18 kelereng", "19 kelereng"],
    explanation: "30 - 13 = 17 kelereng"
  },
  {
    op: "SUB",
    emoji: "🧁",
    story: "Kakak membuat 34 kue mangkuk. Sebanyak 14 kue sudah dimakan bersama keluarga. Berapa sisa kue Kakak?",
    answer: "20 kue",
    options: ["18 kue", "19 kue", "20 kue", "22 kue"],
    explanation: "34 - 14 = 20 kue"
  },
  {
    op: "SUB",
    emoji: "🚌",
    story: "Sebuah bus sekolah membawa 32 siswa. Di halte pertama, 11 siswa turun. Berapa siswa yang masih di dalam bus?",
    answer: "21 siswa",
    options: ["19 siswa", "20 siswa", "21 siswa", "23 siswa"],
    explanation: "32 - 11 = 21 siswa"
  },
  {
    op: "SUB",
    emoji: "🍌",
    story: "Paman memanen 36 buah pisang. Sebanyak 15 pisang dijual di pasar. Berapa sisa pisang Paman sekarang?",
    answer: "21 pisang",
    options: ["19 pisang", "20 pisang", "21 pisang", "22 pisang"],
    explanation: "36 - 15 = 21 pisang"
  },
  {
    op: "SUB",
    emoji: "🥚",
    story: "Di dapur ada 27 butir telur ayam. Ibu memasak 8 butir telur untuk sarapan. Berapa butir telur yang tersisa?",
    answer: "19 telur",
    options: ["17 telur", "18 telur", "19 telur", "20 telur"],
    explanation: "27 - 8 = 19 telur"
  },
  {
    op: "SUB",
    emoji: "🖍️",
    story: "Kotak krayon Lani berisi 24 krayon. Sebanyak 7 krayon dipinjam temannya. Berapa krayon yang masih di kotak?",
    answer: "17 krayon",
    options: ["15 krayon", "16 krayon", "17 krayon", "18 krayon"],
    explanation: "24 - 7 = 17 krayon"
  },
  {
    op: "SUB",
    emoji: "🍉",
    story: "Pedagang buah membawa 40 semangka. Siang ini terjual 18 semangka. Berapa sisa semangka pedagang itu?",
    answer: "22 semangka",
    options: ["20 semangka", "21 semangka", "22 semangka", "24 semangka"],
    explanation: "40 - 18 = 22 semangka"
  },
  {
    op: "SUB",
    emoji: "🪑",
    story: "Di aula SDN Bulakan 2 terdapat 35 kursi. Sebanyak 12 kursi dipindahkan ke kelas. Berapa kursi yang tersisa di aula?",
    answer: "23 kursi",
    options: ["21 kursi", "22 kursi", "23 kursi", "25 kursi"],
    explanation: "35 - 12 = 23 kursi"
  }
];

const BINDO_MISSIONS = {
  PREPOSISI: {
    promptHtml: "🫧 Bahasa Indonesia: Pecahkan gelembung <strong>KATA DEPAN</strong> (Menunjukkan Tempat / Lokasi — Ditulis <strong>DIPISAH</strong>)",
    isCorrectBubble: (item) => item.type === "preposisi" && item.valid === true,
    getPool: () => WORD_BANK.filter((w) => w.valid === true)
  },
  IMBUHAN: {
    promptHtml: "🫧 Bahasa Indonesia: Pecahkan gelembung <strong>KATA IMBUHAN</strong> (Kata Kerja Pasif — Ditulis <strong>DIGABUNG</strong>)",
    isCorrectBubble: (item) => item.type === "imbuhan" && item.valid === true,
    getPool: () => WORD_BANK.filter((w) => w.valid === true)
  },
  EJAAN_BENAR: {
    promptHtml: "🫧 Bahasa Indonesia: Pecahkan gelembung yang <strong>PENULISAN EJAANNYA BENAR</strong> (Awas Jebakan Salah Tulis)!",
    isCorrectBubble: (item) => item.valid === true,
    getPool: () => WORD_BANK
  }
};

const TINTS = ["tint-blue", "tint-pink", "tint-purple", "tint-mint"];
const AVATARS = ["🦁", "🐼", "🐯", "🦊", "🐸", "🦉", "🦄", "🐬", "🦖"];
const SPEED_MODES = [
  { label: "🐢 Santai", speedPx: 52, spawnIntervalMs: 1850 },
  { label: "🐇 Sedang", speedPx: 76, spawnIntervalMs: 1400 },
  { label: "🚀 Cepat", speedPx: 105, spawnIntervalMs: 1050 }
];

const state = {
  currentView: "lobby", // 'lobby' | 'bindo' | 'math'
  missionKey: "PREPOSISI",
  mathMode: "MIX", // 'MIX' | 'ADD' | 'SUB'
  isPlaying: false,
  soundEnabled: true,
  musicEnabled: true,
  speedIndex: 0,
  selectedDuration: 60,
  timerSeconds: 60,
  lastFrameTime: performance.now(),
  players: [
    { id: 1, name: "Siswa 1", avatar: "🦁", score: 0, correct: 0, wrong: 0, bubbles: [], lastSpawn: 0, nextTrack: 0, lastWord: "", mathQuestions: [], mathIndex: 0, mathResults: [], mathLocked: false },
    { id: 2, name: "Siswa 2", avatar: "🐼", score: 0, correct: 0, wrong: 0, bubbles: [], lastSpawn: 0, nextTrack: 1, lastWord: "", mathQuestions: [], mathIndex: 0, mathResults: [], mathLocked: false },
    { id: 3, name: "Siswa 3", avatar: "🐯", score: 0, correct: 0, wrong: 0, bubbles: [], lastSpawn: 0, nextTrack: 0, lastWord: "", mathQuestions: [], mathIndex: 0, mathResults: [], mathLocked: false }
  ]
};

// ============================================================================
// AUDIO ENGINE: EFEK SUARA + MUSIK LATAR RIANG CERIA (WEB AUDIO API)
// ============================================================================
let audioCtx = null;
let bgmTimer = null;
let bgmStep = 0;

function ensureAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

const HAPPY_MELODY = [
  { note: 523.25, bass: 261.63, dur: 0.18 },
  { note: 659.25, bass: 0,      dur: 0.18 },
  { note: 783.99, bass: 392.00, dur: 0.18 },
  { note: 659.25, bass: 0,      dur: 0.18 },
  { note: 880.00, bass: 261.63, dur: 0.24 },
  { note: 783.99, bass: 392.00, dur: 0.24 },
  { note: 659.25, bass: 0,      dur: 0.18 },
  { note: 587.33, bass: 392.00, dur: 0.18 },
  { note: 523.25, bass: 349.23, dur: 0.18 },
  { note: 587.33, bass: 0,      dur: 0.18 },
  { note: 659.25, bass: 261.63, dur: 0.18 },
  { note: 783.99, bass: 0,      dur: 0.18 },
  { note: 880.00, bass: 392.00, dur: 0.18 },
  { note: 783.99, bass: 0,      dur: 0.18 },
  { note: 1046.50,bass: 261.63, dur: 0.32 },
  { note: 0,      bass: 392.00, dur: 0.18 }
];

function startCheerfulMusic() {
  if (bgmTimer) return;
  bgmTimer = setInterval(() => {
    if (!state.musicEnabled) return;
    try {
      ensureAudio();
      if (!audioCtx || audioCtx.state !== "running") return;

      const step = HAPPY_MELODY[bgmStep % HAPPY_MELODY.length];
      bgmStep += 1;
      const now = audioCtx.currentTime;

      if (step.note > 0) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(step.note, now);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + step.dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + step.dur + 0.02);
      }

      if (step.bass > 0) {
        const bOsc = audioCtx.createOscillator();
        const bGain = audioCtx.createGain();
        bOsc.type = "sine";
        bOsc.frequency.setValueAtTime(step.bass, now);
        bGain.gain.setValueAtTime(0.04, now);
        bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        bOsc.connect(bGain);
        bGain.connect(audioCtx.destination);
        bOsc.start(now);
        bOsc.stop(now + 0.24);
      }
    } catch (e) {}
  }, 240);
}

function playFeedbackSound(isCorrect = true, playerIdx = 0) {
  if (!state.soundEnabled) return;
  try {
    ensureAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    if (isCorrect) {
      const popOsc = audioCtx.createOscillator();
      const popGain = audioCtx.createGain();
      const startFreq = 350 + playerIdx * 40;
      popOsc.type = "sine";
      popOsc.frequency.setValueAtTime(startFreq, now);
      popOsc.frequency.exponentialRampToValueAtTime(startFreq * 2.5, now + 0.09);
      popGain.gain.setValueAtTime(0.24, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      popOsc.connect(popGain);
      popGain.connect(audioCtx.destination);
      popOsc.start(now);
      popOsc.stop(now + 0.12);

      const chimeOsc = audioCtx.createOscillator();
      const chimeGain = audioCtx.createGain();
      const chimeNotes = [880, 987.77, 1046.5];
      chimeOsc.type = "triangle";
      chimeOsc.frequency.setValueAtTime(chimeNotes[playerIdx % 3], now + 0.05);
      chimeOsc.frequency.setValueAtTime(chimeNotes[playerIdx % 3] * 1.25, now + 0.12);
      chimeGain.gain.setValueAtTime(0.16, now + 0.05);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      chimeOsc.connect(chimeGain);
      chimeGain.connect(audioCtx.destination);
      chimeOsc.start(now + 0.05);
      chimeOsc.stop(now + 0.29);
    } else {
      const errOsc = audioCtx.createOscillator();
      const errGain = audioCtx.createGain();
      errOsc.type = "sawtooth";
      errOsc.frequency.setValueAtTime(210, now);
      errOsc.frequency.linearRampToValueAtTime(115, now + 0.2);
      errGain.gain.setValueAtTime(0.14, now);
      errGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      errOsc.connect(errGain);
      errGain.connect(audioCtx.destination);
      errOsc.start(now);
      errOsc.stop(now + 0.23);
    }
  } catch (e) {}
}

function playVictoryFanfare() {
  if (!state.soundEnabled) return;
  try {
    ensureAudio();
    if (!audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const now = audioCtx.currentTime + i * 0.12;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    });
  } catch (e) {}
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ============================================================================
// SINKRONISASI NAMA PEMAIN & PERPINDAHAN LAYAR (LOBBY / B.INDO / MATEMATIKA)
// ============================================================================
function syncPlayerNamesFromLobby() {
  [1, 2, 3].forEach((id) => {
    const inp = document.getElementById(`lobby-name-${id}`);
    if (inp && inp.value.trim()) {
      state.players[id - 1].name = inp.value.trim();
    }
    const p = state.players[id - 1];
    document.getElementById(`bindo-name-${id}`).textContent = p.name;
    document.getElementById(`bindo-av-${id}`).textContent = p.avatar;
    document.getElementById(`math-name-${id}`).textContent = p.name;
    document.getElementById(`math-av-${id}`).textContent = p.avatar;
  });
}

function switchView(viewName) {
  syncPlayerNamesFromLobby();
  state.currentView = viewName;

  document.querySelectorAll(".screen-view").forEach((el) => el.classList.remove("active"));
  document.getElementById("bindo-controls").style.display = viewName === "bindo" ? "flex" : "none";
  document.getElementById("math-controls").style.display = viewName === "math" ? "flex" : "none";
  document.getElementById("time-pill-wrapper").style.display = viewName === "lobby" ? "none" : "flex";
  document.getElementById("btn-play-pause").style.display = viewName === "bindo" ? "flex" : "none";

  const promptEl = document.getElementById("active-prompt-pill");

  if (viewName === "lobby") {
    state.isPlaying = false;
    document.getElementById("screen-lobby").classList.add("active");
    promptEl.innerHTML =
      "🌟 Selamat Datang di <strong>Media Pembelajaran SDN Bulakan 2 — By Ratna Komala</strong>! Pilih mata pelajaran di bawah untuk mulai bermain 3 siswa sekaligus.";
  } else if (viewName === "bindo") {
    document.getElementById("screen-bindo").classList.add("active");
    resetScoresAndTimer();
    state.isPlaying = true;
    updatePlayPauseButton();
    promptEl.innerHTML = BINDO_MISSIONS[state.missionKey].promptHtml;
    [0, 1, 2].forEach((idx) => spawnBubbleForPlayer(idx));
  } else if (viewName === "math") {
    document.getElementById("screen-math").classList.add("active");
    startNewMathQuizRound();
  }
}

function resetScoresAndTimer() {
  state.timerSeconds = state.selectedDuration;
  document.getElementById("timer-box").textContent = formatTimerText(state.timerSeconds);

  state.players.forEach((p) => {
    p.score = 0;
    p.correct = 0;
    p.wrong = 0;
    p.bubbles.forEach((b) => {
      if (b.el && b.el.parentNode) b.el.parentNode.removeChild(b.el);
    });
    p.bubbles = [];
    document.getElementById(`bindo-score-${p.id}`).textContent = "0";
    document.getElementById(`math-score-${p.id}`).textContent = "0";
  });
}

// ============================================================================
// GAME 1: BAHASA INDONESIA (GELEMBUNG KATA NAIK ANTI-DEMPET)
// ============================================================================
function formatWordForBubble(word) {
  const hasSpace = word.includes(" ");
  const longestPart = hasSpace
    ? Math.max(...word.split(" ").map((p) => p.length))
    : word.length;

  let fontSize = "1.22rem";
  if (longestPart >= 11) {
    fontSize = "0.92rem";
  } else if (longestPart >= 9) {
    fontSize = "1.02rem";
  } else if (longestPart >= 7) {
    fontSize = "1.12rem";
  }

  const displayHtml = hasSpace ? word.replace(" ", "<br>") : word;
  return { displayHtml, fontSize, hasSpace };
}

function spawnBubbleForPlayer(playerIdx) {
  if (state.currentView !== "bindo") return;
  const player = state.players[playerIdx];
  const stageEl = document.getElementById(`stage-p${player.id}`);
  if (!stageEl) return;

  if (player.bubbles.length >= 5) return;

  const stageWidth = stageEl.clientWidth || 340;
  const bubbleSize = Math.min(124, Math.max(100, Math.floor(stageWidth * 0.34)));

  const tooCloseAtBottom = player.bubbles.some((b) => b.y < bubbleSize * 0.85);
  if (tooCloseAtBottom) return;

  const mission = BINDO_MISSIONS[state.missionKey];
  const pool = mission.getPool();

  const correctCandidates = pool.filter((w) => mission.isCorrectBubble(w) && w.word !== player.lastWord);
  const distractorCandidates = pool.filter((w) => !mission.isCorrectBubble(w) && w.word !== player.lastWord);
  const pickCorrect = Math.random() < 0.58;
  const sourceList = pickCorrect ? correctCandidates : distractorCandidates;
  const wordItem = sourceList[Math.floor(Math.random() * sourceList.length)] || pool[0];
  player.lastWord = wordItem.word;

  const track = player.nextTrack;
  player.nextTrack = 1 - player.nextTrack;

  const halfWidth = stageWidth / 2;
  const margin = 10;
  let minX, maxX;
  if (track === 0) {
    minX = margin;
    maxX = Math.max(minX + 4, halfWidth - bubbleSize - 4);
  } else {
    minX = Math.min(halfWidth + 4, stageWidth - bubbleSize - margin);
    maxX = Math.max(minX + 4, stageWidth - bubbleSize - margin);
  }
  const x = minX + Math.random() * Math.max(0, maxX - minX);

  const { displayHtml, fontSize, hasSpace } = formatWordForBubble(wordItem.word);

  const bubbleEl = document.createElement("div");
  const tintClass = wordItem.points >= 20 ? "tint-gold" : TINTS[Math.floor(Math.random() * TINTS.length)];
  bubbleEl.className = `word-bubble ${tintClass}`;
  bubbleEl.style.width = `${bubbleSize}px`;
  bubbleEl.style.height = `${bubbleSize}px`;
  bubbleEl.style.left = `${x}px`;
  bubbleEl.style.bottom = `-${bubbleSize + 10}px`;

  bubbleEl.innerHTML = `
    <span class="bubble-text ${hasSpace ? "two-lines" : ""}" style="font-size:${fontSize};">${displayHtml}</span>
    <span class="bubble-pts-badge">+${wordItem.points}</span>
  `;

  const bubbleObj = {
    id: `b_${player.id}_${Date.now()}_${Math.random()}`,
    el: bubbleEl,
    item: wordItem,
    x,
    y: -(bubbleSize + 10),
    size: bubbleSize,
    phase: Math.random() * Math.PI * 2,
    popped: false
  };

  bubbleEl.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    ensureAudio();
    popBubble(playerIdx, bubbleObj);
  });

  stageEl.appendChild(bubbleEl);
  player.bubbles.push(bubbleObj);
}

function popBubble(playerIdx, bubbleObj) {
  if (bubbleObj.popped || !state.isPlaying) return;
  bubbleObj.popped = true;

  const player = state.players[playerIdx];
  const mission = BINDO_MISSIONS[state.missionKey];
  const isCorrect = mission.isCorrectBubble(bubbleObj.item);
  const stageEl = document.getElementById(`stage-p${player.id}`);

  if (isCorrect) {
    const gained = bubbleObj.item.points;
    player.score += gained;
    player.correct += 1;
    playFeedbackSound(true, playerIdx);
    bubbleObj.el.classList.add("popping-correct");
    spawnFloatingScore(stageEl, bubbleObj.x + bubbleObj.size / 2, bubbleObj.y + bubbleObj.size / 2, `+${gained}`, bubbleObj.item.note, true);
  } else {
    const penalty = 5;
    player.score = Math.max(0, player.score - penalty);
    player.wrong += 1;
    playFeedbackSound(false, playerIdx);
    bubbleObj.el.classList.add("popping-wrong");
    spawnFloatingScore(stageEl, bubbleObj.x + bubbleObj.size / 2, bubbleObj.y + bubbleObj.size / 2, `-${penalty}`, bubbleObj.item.note, false);
  }

  const scoreEl = document.getElementById(`bindo-score-${player.id}`);
  if (scoreEl) {
    scoreEl.textContent = player.score;
    scoreEl.style.transform = "scale(1.28)";
    setTimeout(() => {
      scoreEl.style.transform = "scale(1)";
    }, 160);
  }

  setTimeout(() => {
    if (bubbleObj.el && bubbleObj.el.parentNode) {
      bubbleObj.el.parentNode.removeChild(bubbleObj.el);
    }
    player.bubbles = player.bubbles.filter((b) => b.id !== bubbleObj.id);
  }, 310);
}

function spawnFloatingScore(stageEl, centerX, bottomY, scoreText, noteText, isPlus) {
  if (!stageEl) return;
  const floatEl = document.createElement("div");
  floatEl.className = `floating-score ${isPlus ? "plus" : "minus"}`;
  const stageWidth = stageEl.clientWidth || 340;
  const clampedX = Math.min(stageWidth - 150, Math.max(10, centerX - 70));
  floatEl.style.left = `${clampedX}px`;
  floatEl.style.bottom = `${Math.max(24, bottomY)}px`;
  floatEl.innerHTML = `
    <div>${scoreText}</div>
    <span class="float-note">${noteText}</span>
  `;
  stageEl.appendChild(floatEl);
  setTimeout(() => {
    if (floatEl.parentNode) floatEl.parentNode.removeChild(floatEl);
  }, 950);
}

function resolveBubbleCollisions(bubbles, stageWidth) {
  const minGap = 10;
  for (let i = 0; i < bubbles.length; i++) {
    for (let j = i + 1; j < bubbles.length; j++) {
      const a = bubbles[i];
      const b = bubbles[j];
      if (a.popped || b.popped) continue;

      const ax = a.x + a.size / 2;
      const ay = a.y + a.size / 2;
      const bx = b.x + b.size / 2;
      const by = b.y + b.size / 2;

      const dx = bx - ax;
      const dy = by - ay;
      const dist = Math.hypot(dx, dy) || 1;
      const minDist = (a.size + b.size) / 2 + minGap;

      if (dist < minDist) {
        const overlap = (minDist - dist) / 2;
        const nx = dx / dist;
        const ny = dy / dist;

        a.x = Math.max(6, Math.min(stageWidth - a.size - 6, a.x - nx * overlap));
        b.x = Math.max(6, Math.min(stageWidth - b.size - 6, b.x + nx * overlap));
        a.y -= ny * overlap;
        b.y += ny * overlap;
      }
    }
  }
}

function updateLoop(now) {
  const dt = Math.min(0.1, (now - state.lastFrameTime) / 1000);
  state.lastFrameTime = now;

  if (state.currentView === "bindo" && state.isPlaying) {
    const speedCfg = SPEED_MODES[state.speedIndex];

    state.players.forEach((player, idx) => {
      const stageEl = document.getElementById(`stage-p${player.id}`);
      const stageHeight = stageEl ? stageEl.clientHeight : 600;
      const stageWidth = stageEl ? stageEl.clientWidth : 340;

      if (now - player.lastSpawn > speedCfg.spawnIntervalMs) {
        player.lastSpawn = now;
        spawnBubbleForPlayer(idx);
      }

      for (let i = player.bubbles.length - 1; i >= 0; i--) {
        const b = player.bubbles[i];
        if (b.popped) continue;
        b.y += speedCfg.speedPx * dt;
      }

      resolveBubbleCollisions(player.bubbles, stageWidth);

      for (let i = player.bubbles.length - 1; i >= 0; i--) {
        const b = player.bubbles[i];
        if (b.popped) continue;

        const swayX = Math.sin(now * 0.0022 + b.phase) * 4;
        b.el.style.left = `${b.x}px`;
        b.el.style.bottom = `${b.y}px`;
        b.el.style.transform = `translateX(${swayX}px)`;

        if (b.y > stageHeight + 20) {
          if (b.el.parentNode) b.el.parentNode.removeChild(b.el);
          player.bubbles.splice(i, 1);
        }
      }
    });
  }

  requestAnimationFrame(updateLoop);
}

// ============================================================================
// GAME 2: MATEMATIKA — KUIS 5 SOAL CERITA PENJUMLAHAN & PENGURANGAN (3 PEMAIN)
// ============================================================================
function startNewMathQuizRound() {
  resetScoresAndTimer();
  state.isPlaying = true;

  const modeLabel =
    state.mathMode === "ADD"
      ? "Penjumlahan"
      : state.mathMode === "SUB"
      ? "Pengurangan"
      : "Campuran Penjumlahan & Pengurangan";

  document.getElementById("active-prompt-pill").innerHTML = `
    🧮 Kuis Matematika (${modeLabel}): Setiap siswa mengerjakan <strong>5 Soal Cerita Pendek</strong> (Benar +20 Poin, Total Maksimal 100 Poin)!
  `;

  let pool = MATH_STORY_BANK;
  if (state.mathMode === "ADD") {
    pool = MATH_STORY_BANK.filter((q) => q.op === "ADD");
  } else if (state.mathMode === "SUB") {
    pool = MATH_STORY_BANK.filter((q) => q.op === "SUB");
  }

  state.players.forEach((p, idx) => {
    p.mathQuestions = shuffleArray(pool).slice(0, 5).map((q) => ({
      ...q,
      shuffledOptions: shuffleArray(q.options)
    }));
    p.mathIndex = 0;
    p.mathResults = [null, null, null, null, null]; // 'ok' | 'err'
    p.mathLocked = false;
    renderPlayerMathCard(idx);
  });
}

function renderPlayerMathCard(playerIdx) {
  const player = state.players[playerIdx];
  const container = document.getElementById(`math-body-${player.id}`);
  if (!container) return;

  // Buat indikator bulat 5 soal
  const dotsHtml = [0, 1, 2, 3, 4]
    .map((i) => {
      let cls = "math-dot";
      if (player.mathResults[i] === "ok") cls += " done-ok";
      else if (player.mathResults[i] === "err") cls += " done-err";
      else if (i === player.mathIndex && player.mathIndex < 5) cls += " current";
      return `<div class="${cls}">${i + 1}</div>`;
    })
    .join("");

  // Jika sudah selesai semua 5 soal
  if (player.mathIndex >= 5) {
    container.innerHTML = `
      <div class="math-progress-row">
        <span class="math-q-counter">✅ Selesai 5 / 5 Soal</span>
        <div class="math-dots">${dotsHtml}</div>
      </div>
      <div class="math-finish-panel">
        <div style="font-size:3.2rem;">🎉 ${player.avatar}</div>
        <h3 style="font-family:var(--font-display);font-size:1.45rem;color:#fde047;">Hebat, ${player.name}!</h3>
        <p style="color:#e2e8f0;font-size:1rem;">Kamu telah menyelesaikan ke-5 soal cerita Matematika!</p>
        <div style="font-family:var(--font-display);font-size:2.2rem;font-weight:700;color:#4ade80;margin-top:4px;">
          Nilai: ${player.score} / 100
        </div>
        <div style="font-size:0.9rem;color:#cbd5e1;">
          ✅ Benar: ${player.correct} Soal &nbsp;|&nbsp; ❌ Salah: ${player.wrong} Soal
        </div>
      </div>
    `;
    checkIfAllMathPlayersFinished();
    return;
  }

  const currentQ = player.mathQuestions[player.mathIndex];
  const opBadgeClass = currentQ.op === "ADD" ? "op-add" : "op-sub";
  const opBadgeText = currentQ.op === "ADD" ? "➕ Soal Penjumlahan" : "➖ Soal Pengurangan";

  container.innerHTML = `
    <div class="math-progress-row">
      <span class="math-q-counter">Soal Cerita ${player.mathIndex + 1} dari 5</span>
      <div class="math-dots">${dotsHtml}</div>
    </div>

    <div class="math-story-card">
      <span class="math-op-badge ${opBadgeClass}">${opBadgeText}</span>
      <div class="math-emoji-icon">${currentQ.emoji}</div>
      <p class="math-story-text">${currentQ.story}</p>
    </div>

    <div id="math-opts-p${player.id}" class="math-options-grid"></div>

    <div id="math-fb-p${player.id}" class="math-feedback-bar">
      👆 Pilih jawaban yang benar di atas!
    </div>
  `;

  const optsGrid = document.getElementById(`math-opts-p${player.id}`);
  currentQ.shuffledOptions.forEach((optText) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "math-opt-btn";
    btn.textContent = optText;

    btn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      ensureAudio();
      handleMathAnswer(playerIdx, optText, btn);
    });

    optsGrid.appendChild(btn);
  });
}

function handleMathAnswer(playerIdx, chosenAnswer, btnEl) {
  const player = state.players[playerIdx];
  if (player.mathLocked || player.mathIndex >= 5) return;
  player.mathLocked = true;

  const currentQ = player.mathQuestions[player.mathIndex];
  const isCorrect = chosenAnswer === currentQ.answer;
  const fbEl = document.getElementById(`math-fb-p${player.id}`);

  if (isCorrect) {
    player.score += 20;
    player.correct += 1;
    player.mathResults[player.mathIndex] = "ok";
    playFeedbackSound(true, playerIdx);
    btnEl.classList.add("opt-correct");
    if (fbEl) {
      fbEl.className = "math-feedback-bar ok";
      fbEl.innerHTML = `✅ Benar! (${currentQ.explanation}) — <strong>+20 Poin</strong>`;
    }
  } else {
    player.wrong += 1;
    player.mathResults[player.mathIndex] = "err";
    playFeedbackSound(false, playerIdx);
    btnEl.classList.add("opt-wrong");

    // Tunjukkan tombol mana yang benar
    const allBtns = document.querySelectorAll(`#math-opts-p${player.id} .math-opt-btn`);
    allBtns.forEach((b) => {
      if (b.textContent === currentQ.answer) b.classList.add("opt-correct");
    });

    if (fbEl) {
      fbEl.className = "math-feedback-bar err";
      fbEl.innerHTML = `❌ Kurang tepat! Jawaban: <strong>${currentQ.explanation}</strong>`;
    }
  }

  const scoreEl = document.getElementById(`math-score-${player.id}`);
  if (scoreEl) {
    scoreEl.textContent = player.score;
  }

  setTimeout(() => {
    player.mathIndex += 1;
    player.mathLocked = false;
    renderPlayerMathCard(playerIdx);
  }, 1150);
}

function checkIfAllMathPlayersFinished() {
  const allDone = state.players.every((p) => p.mathIndex >= 5);
  if (allDone) {
    setTimeout(() => {
      openPodiumModal();
    }, 700);
  }
}

// ============================================================================
// PENGATURAN WAKTU & MODAL PODIUM
// ============================================================================
function formatTimerText(seconds) {
  if (state.selectedDuration === 0) return "∞";
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function applyTimePreset(secondsVal) {
  state.selectedDuration = secondsVal;
  state.timerSeconds = secondsVal;
  const box = document.getElementById("timer-box");
  if (box) box.textContent = formatTimerText(state.timerSeconds);
}

setInterval(() => {
  if (state.currentView === "lobby" || !state.isPlaying || state.selectedDuration === 0) return;
  if (state.timerSeconds > 0) {
    state.timerSeconds -= 1;
    const box = document.getElementById("timer-box");
    if (box) box.textContent = formatTimerText(state.timerSeconds);

    if (state.timerSeconds <= 5 && state.timerSeconds > 0 && state.soundEnabled) {
      try {
        ensureAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(784, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
      } catch (e) {}
    }

    if (state.timerSeconds === 0) {
      openPodiumModal();
    }
  }
}, 1000);

function openPodiumModal() {
  state.isPlaying = false;
  updatePlayPauseButton();
  playVictoryFanfare();

  const sorted = [...state.players].sort((a, b) => b.score - a.score);
  const topScore = sorted[0].score;
  const listEl = document.getElementById("podium-list");
  listEl.innerHTML = "";

  const subjectName =
    state.currentView === "math"
      ? "Matematika — Kuis 5 Soal Cerita Penjumlahan & Pengurangan"
      : "Bahasa Indonesia — Gelembung Kata 'di'";
  document.getElementById("podium-subtitle").textContent = subjectName;

  state.players.forEach((p) => {
    const isFirst = p.score === topScore && topScore > 0;
    const div = document.createElement("div");
    div.className = `podium-item ${isFirst ? "first-place" : ""}`;
    div.innerHTML = `
      <div style="font-size:2.6rem;">${isFirst ? "👑" : ""} ${p.avatar}</div>
      <div style="font-size:1.3rem;font-weight:800;">${p.name}</div>
      <div style="font-size:2rem;font-weight:900;color:#fde047;">${p.score} Poin</div>
      <div style="font-size:0.9rem;color:#cbd5e1;">✅ Benar: ${p.correct} &nbsp;|&nbsp; ❌ Salah: ${p.wrong}</div>
    `;
    listEl.appendChild(div);
  });

  document.getElementById("podium-modal").classList.add("show");
}

function updatePlayPauseButton() {
  const btn = document.getElementById("btn-play-pause");
  if (!btn) return;
  if (state.isPlaying) {
    btn.textContent = "⏸ Jeda";
    btn.classList.remove("paused");
  } else {
    btn.textContent = "▶ Mulai";
    btn.classList.add("paused");
  }
}

// ============================================================================
// INISIALISASI EVENT LISTENER
// ============================================================================
window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener(
    "pointerdown",
    () => {
      ensureAudio();
    },
    { once: true }
  );

  startCheerfulMusic();

  // Tombol Kembali ke Menu Pelajaran (Lobby)
  document.getElementById("btn-go-lobby").addEventListener("pointerdown", () => {
    ensureAudio();
    switchView("lobby");
  });

  // Kartu Peluncur di Lobby
  document.getElementById("card-launch-bindo").addEventListener("pointerdown", () => {
    ensureAudio();
    playFeedbackSound(true, 0);
    switchView("bindo");
  });

  document.getElementById("card-launch-math").addEventListener("pointerdown", () => {
    ensureAudio();
    playFeedbackSound(true, 1);
    switchView("math");
  });

  // Ganti Avatar di Lobby
  [1, 2, 3].forEach((id) => {
    document.getElementById(`lobby-av-${id}`).addEventListener("pointerdown", (e) => {
      ensureAudio();
      const p = state.players[id - 1];
      const nextIdx = (AVATARS.indexOf(p.avatar) + 1) % AVATARS.length;
      p.avatar = AVATARS[nextIdx];
      e.currentTarget.textContent = p.avatar;
      playFeedbackSound(true, id - 1);
    });
  });

  // Tombol Misi Bahasa Indonesia
  document.querySelectorAll(".bindo-m-btn").forEach((btn) => {
    btn.addEventListener("pointerdown", () => {
      ensureAudio();
      state.missionKey = btn.dataset.mission;
      document.querySelectorAll(".bindo-m-btn").forEach((b) => b.classList.toggle("active", b === btn));
      document.getElementById("active-prompt-pill").innerHTML = BINDO_MISSIONS[state.missionKey].promptHtml;
      playFeedbackSound(true, 1);
    });
  });

  // Tombol Mode Matematika (Campuran / Penjumlahan / Pengurangan)
  document.querySelectorAll(".math-m-btn").forEach((btn) => {
    btn.addEventListener("pointerdown", () => {
      ensureAudio();
      state.mathMode = btn.dataset.mathMode;
      document.querySelectorAll(".math-m-btn").forEach((b) => b.classList.toggle("active", b === btn));
      startNewMathQuizRound();
      playFeedbackSound(true, 1);
    });
  });

  document.getElementById("btn-new-math-quiz").addEventListener("pointerdown", () => {
    ensureAudio();
    playFeedbackSound(true, 2);
    startNewMathQuizRound();
  });

  // Pengaturan Waktu
  document.getElementById("time-preset").addEventListener("change", (e) => {
    ensureAudio();
    applyTimePreset(parseInt(e.target.value, 10));
  });

  // Tombol Play / Pause (Bahasa Indonesia)
  document.getElementById("btn-play-pause").addEventListener("pointerdown", () => {
    ensureAudio();
    state.isPlaying = !state.isPlaying;
    updatePlayPauseButton();
  });

  // Tombol Kecepatan Gelembung
  const speedBtn = document.getElementById("btn-speed");
  speedBtn.addEventListener("pointerdown", () => {
    ensureAudio();
    state.speedIndex = (state.speedIndex + 1) % SPEED_MODES.length;
    speedBtn.textContent = SPEED_MODES[state.speedIndex].label;
  });

  // Tombol Musik & Efek Suara
  const musicBtn = document.getElementById("btn-music");
  musicBtn.addEventListener("pointerdown", () => {
    ensureAudio();
    state.musicEnabled = !state.musicEnabled;
    musicBtn.textContent = state.musicEnabled ? "🎵 Musik: ON" : "🎵 Musik: OFF";
    musicBtn.classList.toggle("active", state.musicEnabled);
  });

  const soundBtn = document.getElementById("btn-sound");
  soundBtn.addEventListener("pointerdown", () => {
    ensureAudio();
    state.soundEnabled = !state.soundEnabled;
    soundBtn.textContent = state.soundEnabled ? "🔊 Efek: ON" : "🔇 Efek: OFF";
  });

  // Modal Materi Bahasa Indonesia
  const materiModal = document.getElementById("materi-modal");
  document.getElementById("btn-open-materi").addEventListener("pointerdown", () => {
    ensureAudio();
    state.isPlaying = false;
    updatePlayPauseButton();
    materiModal.classList.add("show");
  });
  document.getElementById("btn-close-materi").addEventListener("pointerdown", () => {
    ensureAudio();
    materiModal.classList.remove("show");
    state.isPlaying = true;
    updatePlayPauseButton();
  });

  // Modal Podium Skor
  document.getElementById("btn-open-podium").addEventListener("pointerdown", () => {
    ensureAudio();
    openPodiumModal();
  });
  document.getElementById("btn-close-podium").addEventListener("pointerdown", () => {
    ensureAudio();
    document.getElementById("podium-modal").classList.remove("show");
    state.isPlaying = true;
    updatePlayPauseButton();
  });
  document.getElementById("btn-reset-game").addEventListener("pointerdown", () => {
    ensureAudio();
    document.getElementById("podium-modal").classList.remove("show");
    if (state.currentView === "math") {
      startNewMathQuizRound();
    } else if (state.currentView === "bindo") {
      resetScoresAndTimer();
      state.isPlaying = true;
      updatePlayPauseButton();
    }
  });
  document.getElementById("btn-podium-to-lobby").addEventListener("pointerdown", () => {
    ensureAudio();
    document.getElementById("podium-modal").classList.remove("show");
    switchView("lobby");
  });

  // Tombol Layar Penuh
  document.getElementById("btn-fullscreen").addEventListener("pointerdown", () => {
    ensureAudio();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  requestAnimationFrame(updateLoop);
});

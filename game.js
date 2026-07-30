const characters = {
  Ayush: { image: "https://iili.io/C8Uae6B.png", loseAudio: "ayushLoseAudio" },
  Adheeraj: { image: "https://iili.io/C8UuI2a.png", loseAudio: "adheerajLoseAudio" }
};

const originalRoastQuotes = [
  "Even the pipes saw that coming.", "Your wings filed for early retirement.", "That flap had the confidence of a confused pigeon.", "You flew like the tutorial was optional.", "The gap was right there. Emotionally, anyway.", "Gravity remains undefeated. You remain adorable.", "A brave attempt. A deeply vertical attempt.", "Your kuchu puchu needs a kuchu puchu coach.", "You made the pipes feel very powerful today.", "That was less bird, more falling snack.",
  "The sky called. It wants its dignity back.", "You have unlocked: spectacular bonk.", "Not all who wander are lost. You definitely were.", "Your pilot license has been sent to spam.", "The bird had wings, but no game plan.", "Somewhere, a tutorial is crying.", "You flapped with the grace of a dropped sandwich.", "The pipes are telling everyone.", "You were one tap away from greatness. Then you tapped.", "That score is doing a very quiet walk home.",
  "Your altitude strategy was boldly unpredictable.", "You gave gravity a standing ovation.", "A stunning performance by the floor.", "That was a soft launch into a hard wall.", "You flew like your Wi-Fi was buffering.", "The gap saw you and simply said: no.", "Your wings have requested a team meeting.", "Flap harder? Maybe think first? Just a thought.", "You are proof that courage and timing are different skills.", "The bird is okay. The ego is under review.",
  "Your reaction time took a scenic route.", "You made one pipe very, very happy.", "That was an artistic interpretation of flying.", "The sky was open. The timing was not.", "You navigated directly into a character arc.", "Your score is small but your confidence is inspirational.", "You flap like you pay rent to gravity.", "A bold choice, choosing collision.", "The pipes have added you to their favorites.", "This was less a flight and more a surprise landing.",
  "You just got outplayed by rectangles.", "A valiant effort from a bird with no calendar.", "Your wings are cute. Your spacing is not.", "You turned a green light into a full stop.", "The bird is requesting hazard pay.", "One day you will master this. Today was not that day.", "You flew with the urgency of a sleepy potato.", "The next flap is always personal.", "Your biggest enemy was, unexpectedly, a pipe.", "That score has the energy of an unread message.",
  "You met the obstacle halfway. It appreciated that.", "Your bird deserves a snack and a strategy.", "That was a direct flight to bonk city.", "The wings were moving. The plan was not.", "You brought enthusiasm to a precision sport.", "At least the background looked nice.", "Your bird has seen things. Mostly the inside of a pipe.", "You have been promoted to honorary bumper.", "The gap was tiny, but your confidence was tinier.", "You made a crash look almost intentional.",
  "Gravity sent a follow-up email.", "You flew like you had somewhere else to be.", "The pipes are undefeated and feeling smug.", "That flap was a plot twist nobody requested.", "Your timing is beautifully chaotic.", "Bird goes up. Bird goes bonk. Classic.", "This is why we can’t have nice feathers.", "You were defeated by architecture.", "A courageous attempt at becoming ceiling decor.", "Your wings have excellent vibes and terrible navigation.",
  "The sky is big. The gap was bigger than this attempt.", "You really committed to the wrong direction.", "Your bird just learned about consequences.", "Not a loss, just an aggressive tutorial.", "That was a crash course in crashing.", "You had one job: avoid the pipe-shaped things.", "The bird is now accepting apologies.", "You flew by feeling. The pipes flew by physics.", "Your score is shy. Say hello next time.", "A tiny bird, a huge bonk, a timeless story.",
  "You made the finish line feel extremely theoretical.", "That was the flap equivalent of a typo.", "The bird’s face says it all.", "You have discovered a new route: straight into trouble.", "Your flight plan was written in crayon.", "The pipes are sending a thank-you card.", "You brought a dream to a collision.", "That run had main-character energy and side-character timing.", "You are not bad at flying. You are excellent at stopping.", "The bird has entered its reflective era.",
  "You left the nest and immediately reconsidered.", "A masterpiece of momentum management.", "The gap was open for business. You were not.", "Your bird is now a very round meteor.", "The floor would like to congratulate you.", "You flapped once and trusted the universe. Bold.", "That was not a landing; that was punctuation.", "Your next run has nowhere to go but up.", "The pipes won this round. Be dramatic about it.", "You have been lovingly roasted by the sky."
];

const roastQuotes = [
  "I can last longer than this in bed. The pipes had you in one tap.", "Your screen time report is judging you for free.", "That run was so short even the loading spinner felt awkward.", "You folded faster than a cheap lawn chair.", "The pipe did not even need to try. Embarrassing.", "Your aim has the confidence of a group chat typo.", "You flew like your brain was on airplane mode.", "That was not a crash. That was a public announcement.", "The bird had one job and somehow made it a personality trait.", "You got packed up by two rectangles and a dream.",
  "Your reflexes are currently buffering in 144p.", "You hit the pipe with the commitment of a bad tattoo.", "The gap was wider than your excuses.", "You lasted less time than your quick nap.", "Gravity saw you and said: free content.", "That score is giving unpaid internship energy.", "You flew like the tutorial insulted your family.", "The pipe looked at your plan and laughed in pixels.", "This run was shorter than a hear-me-out.", "You turned premium potential into a free trial.",
  "Your timing is a red flag with wings.", "You got diffed by architecture. Please be serious.", "That was a speedrun of making everyone uncomfortable.", "The bird is not the problem. The pilot is in 4K.", "You dodged nothing and still looked surprised.", "Your strategy was literally vibes and then bonk.", "The gap was open. Your brain was not.", "You have the survival instincts of a decorative pillow.", "That crash had more buildup than payoff.", "Your bird just rage-quit without a keyboard.",
  "You flapped like the rent was due, then paid the pipe.", "The sky gave you options. You chose consequences.", "Your run ended before the beat dropped.", "The pipe is adding this to its highlight reel.", "You are moving like a screenshot of a moving object.", "That was not a flight plan. That was a confession.", "Your wings are innocent. Your decisions are not.", "You got humbled by a green tube with no facial expressions.", "Even the pause button has more control than you.", "You lasted exactly long enough to get cocky.",
  "You have the hand-eye coordination of a sleepy cat.", "The collision was personal, but mostly because you made it personal.", "Your best move was opening the game.", "That gap was begging for a competent adult.", "You flapped with the urgency of someone who forgot why they stood up.", "This is what happens when confidence skips practice.", "The pipe said come here and you said bet.", "You made a simple game look emotionally complicated.", "Your high score is hiding from your current score.", "That bird is going to need a little off-screen counseling.",
  "You got outplayed by a hallway.", "Your flight had no plot armor.", "The floor caught you lacking.", "You were one tap from greatness and chose comedy.", "Your reaction time is on a soft launch.", "The bird is cute, but the pilot is suspicious.", "That was a direct deposit into the cringe account.", "Your score is giving sent from my iPhone energy.", "You did not miss the gap. You avoided success.", "The pipe has better boundaries than you.",
  "You flew like your controller was being held by your cousin.", "The run ended before your confidence did. Tragic.", "Your game plan is currently under investigation.", "You have been gently bullied by basic geometry.", "That was a professional-grade miscalculation.", "Your bird just experienced a character reset.", "You made the obstacle look like a magnet.", "This is why the tutorial uses pictures.", "Your wings are on, but your operating system is not.", "The pipe is not going to text back after that.",
  "You hit the wall like it owed you money.", "Your run had the lifespan of a trending sound.", "You are not flapping; you are negotiating with gravity and losing.", "The gap saw your confidence and asked for ID.", "You brought main-character energy to an NPC performance.", "That was a crash with excellent comedic timing.", "The bird’s only enemy was your decision-making.", "You flew like you had read the spoilers and still panicked.", "Your score is a tiny cry for help.", "You got humbled in a game designed for thumbs.",
  "The pipe won without even changing outfits.", "Your next attempt owes this one an apology.", "You were defeated by a rectangle wearing green.", "Your last flap had no business being that dramatic.", "The game is not hard. Your choices are experimental.", "You speedran from hopeful to horizontal.", "Your timing needs a software update.", "The bird has filed a complaint about the pilot.", "You have the instincts of a pop-up ad.", "The gap was not the issue. The entire vibe was.",
  "You lasted less than a let me cook.", "That was a tragic little slideshow.", "You got packed up before the scoreboard could blink.", "Your bird is now a cautionary tale.", "The pipe has officially seen enough.", "You flew like your thoughts were in another tab.", "That crash was so clean it looked rehearsed.", "The game gave you a chance and you gave it a meme.", "Your flapping license has been temporarily revoked.", "Honestly, the floor had more confidence than you."
];

const selectionScreen = document.querySelector("#selectionScreen");
const gameScreen = document.querySelector("#gameScreen");
const selectionAudio = document.querySelector("#selectionAudio");
const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.querySelector("#score");
const bestEl = document.querySelector("#best");
const selectedBadge = document.querySelector("#selectedBadge");
const selectionPlayButton = document.querySelector("#selectionPlayButton");
const readyOverlay = document.querySelector("#readyOverlay");
const gameOverOverlay = document.querySelector("#gameOverOverlay");
const roastQuote = document.querySelector("#roastQuote");
const finalScore = document.querySelector("#finalScore");
const finalBest = document.querySelector("#finalBest");

let selectedCharacter = "Ayush";
let bestScore = Number(localStorage.getItem("kuchu-puchu-best") || 0);
let state = "ready";
let score = 0;
let lastTime = 0;
let rafId;
let player;
let pipes = [];
let cloudOffset = 0;
const characterImages = {};
Object.entries(characters).forEach(([name, data]) => {
  characterImages[name] = new Image();
  characterImages[name].crossOrigin = "anonymous";
  characterImages[name].src = data.image;
});

bestEl.textContent = bestScore;

function startSelectionSound() {
  selectionAudio.volume = 0.6;
  const promise = selectionAudio.play();
  if (promise) promise.catch(() => {});
}

function stopSelectionSound() {
  selectionAudio.pause();
  selectionAudio.currentTime = 0;
}

function setCharacter(name) {
  selectedCharacter = name;
  document.querySelectorAll(".character-card").forEach(card => {
    const active = card.dataset.character === name;
    card.classList.toggle("is-selected", active);
    card.setAttribute("aria-pressed", String(active));
  });
  selectionScreen.classList.toggle("theme-ayush", name === "Ayush");
  selectionScreen.classList.toggle("theme-adheeraj", name === "Adheeraj");
  gameScreen.classList.toggle("theme-ayush", name === "Ayush");
  gameScreen.classList.toggle("theme-adheeraj", name === "Adheeraj");
  selectedBadge.textContent = name.toUpperCase();
  selectionPlayButton.innerHTML = `Play as ${name} <span>→</span>`;
  startSelectionSound();
}

function openGameScreen() {
  stopSelectionSound();
  selectionScreen.classList.add("is-hidden");
  gameScreen.classList.remove("is-hidden");
  resetGame();
}

document.querySelectorAll(".character-card").forEach(card => card.addEventListener("click", () => setCharacter(card.dataset.character)));
selectionPlayButton.addEventListener("click", openGameScreen);

document.querySelector("#playButton").addEventListener("click", startRound);
document.querySelector("#retryButton").addEventListener("click", () => { gameOverOverlay.classList.add("is-hidden"); resetGame(); startRound(); });
document.querySelector("#changeButton").addEventListener("click", () => { gameOverOverlay.classList.add("is-hidden"); gameScreen.classList.add("is-hidden"); selectionScreen.classList.remove("is-hidden"); startSelectionSound(); });
document.querySelector("#backToSelect").addEventListener("click", () => { cancelAnimationFrame(rafId); state = "ready"; gameScreen.classList.add("is-hidden"); selectionScreen.classList.remove("is-hidden"); startSelectionSound(); });

function resetGame() {
  state = "ready";
  score = 0;
  scoreEl.textContent = "0";
  readyOverlay.classList.remove("is-hidden");
  gameOverOverlay.classList.add("is-hidden");
  player = { x: 104, y: 340, velocity: 0, radius: 21, rotation: 0 };
  pipes = [];
  cloudOffset = 0;
  draw();
}

function startRound() {
  if (state === "playing") return;
  state = "playing";
  readyOverlay.classList.add("is-hidden");
  player.y = 350;
  player.velocity = -7.5;
  pipes = [];
  addPipe(canvas.width + 60);
  lastTime = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
}

function flap() {
  if (state === "ready") startRound();
  else if (state === "playing") player.velocity = -7.5;
}

canvas.addEventListener("pointerdown", flap);
window.addEventListener("keydown", event => {
  if (event.code === "Space" || event.code === "ArrowUp") { event.preventDefault(); flap(); }
});

function addPipe(x) {
  const gap = 174;
  const minTop = 82;
  const maxTop = canvas.height - 110 - gap;
  const top = minTop + Math.random() * Math.max(10, maxTop - minTop);
  pipes.push({ x, width: 74, top, gap, passed: false });
}

function loop(now) {
  const dt = Math.min(2, (now - lastTime) / 16.67 || 1);
  lastTime = now;
  update(dt);
  draw();
  if (state === "playing") rafId = requestAnimationFrame(loop);
}

function update(dt) {
  const speed = 2.55;
  player.velocity += 0.42 * dt;
  player.y += player.velocity * dt;
  player.rotation = Math.min(1.2, Math.max(-.55, player.velocity * .08));
  cloudOffset = (cloudOffset + speed * .22 * dt) % canvas.width;
  pipes.forEach(pipe => { pipe.x -= speed * dt; if (!pipe.passed && pipe.x + pipe.width < player.x) { pipe.passed = true; score += 1; scoreEl.textContent = score; } });
  if (!pipes.length || pipes[pipes.length - 1].x < canvas.width - 230) addPipe(canvas.width + 25);
  pipes = pipes.filter(pipe => pipe.x + pipe.width > -40);
  const hitFloor = player.y + player.radius > canvas.height - 72;
  const hitCeiling = player.y - player.radius < 0;
  const hitPipe = pipes.some(pipe => {
    const withinX = player.x + player.radius > pipe.x && player.x - player.radius < pipe.x + pipe.width;
    const inGap = player.y - player.radius > pipe.top && player.y + player.radius < pipe.top + pipe.gap;
    return withinX && !inGap;
  });
  if (hitFloor || hitCeiling || hitPipe) endRound();
}

function endRound() {
  if (state !== "playing") return;
  state = "over";
  cancelAnimationFrame(rafId);
  if (score > bestScore) { bestScore = score; localStorage.setItem("kuchu-puchu-best", String(bestScore)); }
  bestEl.textContent = bestScore;
  finalScore.textContent = score;
  finalBest.textContent = bestScore;
  roastQuote.textContent = roastQuotes[Math.floor(Math.random() * roastQuotes.length)];
  document.querySelectorAll("audio").forEach(audio => { if (audio !== selectionAudio) { audio.pause(); audio.currentTime = 0; } });
  const loseAudio = document.querySelector(`#${characters[selectedCharacter].loseAudio}`);
  loseAudio.volume = 0.72;
  const promise = loseAudio.play();
  if (promise) promise.catch(() => {});
  draw();
  setTimeout(() => gameOverOverlay.classList.remove("is-hidden"), 420);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  pipes.forEach(drawPipe);
  drawGround();
  drawPlayer();
}

function drawSky() {
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  if (selectedCharacter === "Ayush") {
    sky.addColorStop(0, "#ffb8cb"); sky.addColorStop(.48, "#ffd889"); sky.addColorStop(1, "#c5f2d8");
  } else {
    sky.addColorStop(0, "#080d29"); sky.addColorStop(.58, "#132c67"); sky.addColorStop(1, "#183c78");
  }
  ctx.fillStyle = sky; ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (selectedCharacter === "Ayush") {
    ctx.fillStyle = "rgba(255,255,255,.64)";
    for (let i = 0; i < 4; i++) { const x = ((i * 145 - cloudOffset * (i % 2 ? 1 : .55)) % (canvas.width + 160)) - 70; const y = 90 + i * 82; drawCandyCloud(x, y, 1 + (i % 2) * .2); }
    ctx.fillStyle = "#ffe78a"; ctx.beginPath(); ctx.arc(352, 79, 38, 0, Math.PI * 2); ctx.fill();
  } else {
    ctx.fillStyle = "rgba(174,238,255,.85)"; ctx.beginPath(); ctx.arc(347, 90, 47, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#102352"; ctx.beginPath(); ctx.arc(364, 77, 44, 0, Math.PI * 2); ctx.fill();
    for (let i = 0; i < 20; i++) { const x = (i * 83 + 25) % canvas.width; const y = 35 + ((i * 47) % 245); ctx.fillStyle = i % 3 === 0 ? "#60e8ff" : "#c3e9ff"; ctx.fillRect(x, y, i % 3 === 0 ? 3 : 2, i % 3 === 0 ? 3 : 2); }
  }
}

function drawCandyCloud(x, y, scale) { ctx.beginPath(); ctx.arc(x, y, 23 * scale, Math.PI, 0); ctx.arc(x + 25 * scale, y - 12 * scale, 30 * scale, Math.PI, 0); ctx.arc(x + 61 * scale, y, 23 * scale, Math.PI, 0); ctx.lineTo(x + 84 * scale, y + 17 * scale); ctx.lineTo(x - 18 * scale, y + 17 * scale); ctx.closePath(); ctx.fill(); }

function drawPipe(pipe) {
  const bottomY = pipe.top + pipe.gap;
  drawPipePart(pipe.x, 0, pipe.width, pipe.top, true);
  drawPipePart(pipe.x, bottomY, pipe.width, canvas.height - bottomY - 72, false);
}

function drawPipePart(x, y, width, height, fromTop) {
  const lipHeight = 24;
  const bodyY = fromTop ? y : y + lipHeight;
  const bodyH = fromTop ? height - lipHeight : height - lipHeight;
  ctx.fillStyle = "#64c9a5"; ctx.fillRect(x + 7, bodyY, width - 14, Math.max(0, bodyH));
  ctx.fillStyle = "#8ee6bd"; ctx.fillRect(x + 14, bodyY, 15, Math.max(0, bodyH));
  ctx.fillStyle = "#37a67f"; ctx.fillRect(x + width - 18, bodyY, 11, Math.max(0, bodyH));
  ctx.fillStyle = "#4bb88f"; ctx.fillRect(x - 2, fromTop ? y + height - lipHeight : y, width + 4, lipHeight);
  ctx.fillStyle = "#9aebbe"; ctx.fillRect(x + 10, fromTop ? y + height - lipHeight + 5 : y + 5, 15, lipHeight - 10);
}

function drawGround() {
  ctx.fillStyle = "#f4c85e"; ctx.fillRect(0, canvas.height - 72, canvas.width, 72);
  ctx.fillStyle = "#78c86b"; ctx.fillRect(0, canvas.height - 72, canvas.width, 12);
  ctx.fillStyle = "#e8ad4e";
  for (let x = -20; x < canvas.width + 30; x += 34) { ctx.beginPath(); ctx.moveTo(x, canvas.height - 50); ctx.lineTo(x + 17, canvas.height - 72); ctx.lineTo(x + 34, canvas.height - 50); ctx.lineTo(x + 17, canvas.height - 28); ctx.closePath(); ctx.fill(); }
}

function drawPlayer() {
  ctx.save(); ctx.translate(player.x, player.y); ctx.rotate(player.rotation);
  if (selectedCharacter === "Ayush") drawLollipopPlayer();
  else drawSoulPlayer();
  ctx.restore();
}

function drawPhotoCircle(image, radius, centerY = 0) {
  ctx.save(); ctx.beginPath(); ctx.arc(0, centerY, radius, 0, Math.PI * 2); ctx.clip();
  if (image.complete && image.naturalWidth) ctx.drawImage(image, -radius, centerY - radius, radius * 2, radius * 2);
  else { ctx.fillStyle = "#ffe5ae"; ctx.fillRect(-radius, centerY - radius, radius * 2, radius * 2); }
  ctx.restore();
}

function drawLollipopPlayer() {
  ctx.strokeStyle = "#fff"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(0, 20); ctx.lineTo(0, 48); ctx.stroke();
  ctx.strokeStyle = "#ff8fa5"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, 20); ctx.lineTo(0, 48); ctx.stroke();
  ctx.fillStyle = "#ffcf50"; ctx.beginPath(); ctx.arc(0, 0, 29, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#fb5f83"; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, 0, 23, -.6, 2.7); ctx.stroke();
  ctx.strokeStyle = "#fff"; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, 19, 2.7, 5.3); ctx.stroke();
  ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(0, 0, 18, 0, Math.PI * 2); ctx.fill();
  drawPhotoCircle(characterImages.Ayush, 16);
}

function drawSoulPlayer() {
  ctx.shadowColor = "#60e8ff"; ctx.shadowBlur = 20; ctx.fillStyle = "rgba(91, 225, 255, .38)";
  ctx.beginPath(); ctx.moveTo(-28, 20); ctx.quadraticCurveTo(-30, -25, 0, -31); ctx.quadraticCurveTo(30, -25, 28, 20); ctx.quadraticCurveTo(17, 34, 9, 21); ctx.quadraticCurveTo(0, 35, -9, 21); ctx.quadraticCurveTo(-18, 34, -28, 20); ctx.fill();
  ctx.shadowBlur = 0; ctx.strokeStyle = "#60e8ff"; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = "#dffaff"; ctx.beginPath(); ctx.arc(0, -7, 18, 0, Math.PI * 2); ctx.fill();
  drawPhotoCircle(characterImages.Adheeraj, 15, -7);
  ctx.fillStyle = "#081235"; ctx.beginPath(); ctx.arc(-7, -10, 2.5, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(7, -10, 2.5, 0, Math.PI * 2); ctx.fill();
}

setCharacter("Ayush");
resetGame();
startSelectionSound();

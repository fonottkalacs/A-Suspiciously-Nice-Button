const compliments = [
  "You look great today.",
  "You’re a smart cookie.",
  "You light up the room.",
  "You should be proud of yourself.",
  "You have a great sense of humor.",
  "On a scale from 1 to 10, you’re an 11.",
  "You’re like sunshine on a rainy day.",
  "You’re a great listener.",
  "That color is perfect on you.",
  "Hanging out with you is always a blast.",
  "You’re wonderful.",
  "Jokes are funnier when you tell them.",
  "Your bellybutton is kind of adorable.",
  "Jokes are funnier when you tell them.",
  "You’re a great example to others.",
  "You could survive a Zombie apocalypse.",
  "You’re more fun than bubble wrap.",
  "You’re like a breath of fresh air.",
  "You have a good head on your shoulders.",
  "You’re really something special.",
  "You’re a gift to those around you.",
];

const debug = false;
const maxTries = 100;
const firstButton = document.getElementById("first-button");
const notesContainer = document.getElementById("notes-container");

firstButton.addEventListener("click", getNewCompliment);

const usedCompliments = [];

function getNewCompliment() {
  let currentCompliment =
    compliments[Math.trunc(Math.random() * (compliments.length - 1))];

  for (
    let i = 0;
    i < maxTries && usedCompliments.includes(currentCompliment);
    i++
  ) {
    currentCompliment =
      compliments[Math.trunc(Math.random() * (compliments.length - 1))];
  }

  if (debug) {
    if (usedCompliments.includes(currentCompliment)) {
      console.log("NOT UNIQUE: " + currentCompliment);
    }

    console.log("used compliments size: " + usedCompliments.length);
  }

  usedCompliments.push(currentCompliment);
  newTicket(currentCompliment);
}

let noteSerial = 0;
function newTicket(compliment) {
  noteSerial++;
  const note = document.createElement("div");
  note.classList.add("note");
  note.setAttribute("id", `note-${noteSerial}`);

  // TEXT CONTENT SIDE
  const textSide = document.createElement("div");
  textSide.classList.add("text-side");

  const noteContent = document.createElement("p");
  noteContent.classList.add("note-text-content");
  noteContent.innerText = compliment;

  textSide.appendChild(noteContent);

  // ICONS SIDE

  const iconsSide = document.createElement("div");
  iconsSide.classList.add("icons-side");

  const closeButton = getCloseButton();
  closeButton.setAttribute(
    "onClick",
    "this.parentElement.parentElement.remove()"
  );

  const likeButton = getLikeButton();
  likeButton.setAttribute("onClick", "this.classList.toggle('liked')");

  iconsSide.appendChild(closeButton);
  iconsSide.appendChild(likeButton);
  note.appendChild(textSide);
  note.appendChild(iconsSide);
  notesContainer.appendChild(note);
}

function getCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.setAttribute("id", `close-btn-${noteSerial}`);

  const closeIcon = document.createElement("span");
  closeIcon.classList.add("material-symbols-outlined");
  closeIcon.innerText = "close";

  closeButton.appendChild(closeIcon);
  return closeButton;
}

function getLikeButton() {
  const likeButton = document.createElement("button");
  likeButton.classList.add("like-button");
  likeButton.setAttribute("id", `like-btn-${noteSerial}`);

  const likeIcon = document.createElement("span");
  likeIcon.classList.add("material-symbols-outlined");
  likeIcon.innerText = "favorite";

  likeButton.appendChild(likeIcon);
  return likeButton;
}

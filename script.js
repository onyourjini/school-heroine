const scenes = {
    start: {
        bg: "hallway.png",
        lines: [
            { who: "", text: "My first day at a new school. I was lost in the hallway, looking for my classroom." },
            { who: "Soyu", text: "(Where is Class 2-3...?)" },
            { who: "", text: "I turned the corner without looking, and - BAM!" },
            { who: "", text: "My papers and bag scattered across the floor.", hina: true, fx: "bump" },
            { who: "Hina", text: "Oh no, I'm so sorry! Are you okay? Did you get hurt?", hina: true },
            { who: "Hina", text: "I don't think I've seen you before. Are you the transfer student?", hina: true }
        ],
        choices: [
            { text: "I'm so sorry! Let me pick those up for you!", points: 1, next: "kind" },
            { text: "Watch where you're going.", points: -1, next: "rude" },
            { text: "Senior... What's your name?", points: 0, next: "wall" }
        ]
    },
    kind: {
        lines: [
            { who: "Hina", text: "Hehe, you're sweet. Thank you. I'd love to have a junior like you.", hina: true, fx: "hop" },
            { who: "Soyu", text: "(Her smile is warm like sunlight.)", hina: true }
        ],
        next: "parting"
    },
    rude: {
        lines: [
            { who: "Hina", text: "Ahaha, you're right. I wasn't looking. Sorry about that.", hina: true },
            { who: "", text: "She was still smiling, but she quietly took a step back.", hina: true, fx: "stepback" }
        ],
        next: "parting"
    },
    wall: {
        lines: [
            { who: "Hina", text: "My name? Hmm... it's a secret. I'll tell you when you find out on your own.", hina: true },
            { who: "Soyu", text: "(She's smiling, but it feels like a line was drawn between us.)", hina: true, fx: "stepback" }
        ],
        next: "parting"
    },
    parting: {
        lines: [
            { who: "Hina", text: "You're looking for your classroom, right?", hina: true },
            { who: "Soyu", text: "Yes, do you know where's Class 2-3?", hina: true },
            { who: "Hina", text: "Class 2-3 is at the far end of the hall.", hina: true },
            { who: "Hina", text: "See you around, junior. Enjoy your new school.", hina: true },
            { who: "", text: "She waved and walked away. I never did learn her name." }
        ],
        next: "classroom"
    },
    classroom: {
        bg: "classroom.png",
        lines: [
            { who: "", text: "I finally found Class 2-3 just before the bell rang." },
            { who: "Teacher", text: "Everyone, this is our new transfer student, Fujiwara Soyu. Please be kind to him." },
            { who: "Soyu", text: "(Everyone is staring... I'm so nervous.)" },
            { who: "", text: "During the break, I looked out the window and saw someone crossing the courtyard." },
            { who: "Soyu", text: "(So she goes to this school too... of course she does.)" },
        ],
        next: "courtyard"
    },
    courtyard: {
        bg: "courtyard.png",
        pose: "hina_reading.png",
        lines: [
            { who: "", text: "At lunch, I wandered out to the courtyard to clear my head." },
            { who: "", text: "Hina was sitting alone on a bench, reading.", hina: true },
            { who: "Hina", text: "Oh, it's the transfer student! Did you find your classroom okay?", hina: true, fx: "hop" },
            { who: "Soyu", text: "Yes, thanks to your directions.", hina: true },
            { who: "Hina", text: "Good. You can sit if you want. Just... don't sit too closer, Ahaha.", hina: true }
        ],
        choices: [
            { text: "Sit right next to her.", points: 0, next: "sitClose" },
            { text: "Sit at the other end of the bench.", points: 1, next: "sitFar" },
            { text: "Ask what she's reading.", points: 2, next: "askBook" }
        ]
    },
    sitClose: {
        lines: [
            { who: "Hina", text: "Whoa, that's close. I did say not too close, didn't I?", hina: true, fx: "stepback" },
            { who: "", text: "She laughed, but she slid her book between us like a wall.", hina: true }
        ],
        next: "bell"
    },
    sitFar: {
        lines: [
            { who: "Hina", text: "...Thanks. Most people don't listen the first time.", hina: true },
            { who: "", text: "For a second, her smile looked a little less guarded.", hina: true }
        ],
        next: "bell"
    },
    askBook: {
        lines: [
            { who: "Hina", text: "This? It's just an old novel. Nobody ever asks.", hina: true, fx: "hop" },
            { who: "Hina", text: "...You're the first person who asked. Weird.", hina: true },
            { who: "Soyu", text: "(She looked surprised, like I ahd caught her off guard.)", hina: true }
        ],
        next: "bell"
    },
    bell: {
        lines: [
            { who: "", text: "The bell rang, and Hina closed her book." },
            { who: "Hina", text: "Well, back to class. See you around, junior.", hina: true },
        ],
        next: "afterSchool"
    },
    afterSchool: {
        bg: "afterschool_classroom.png",
        lines: [
            { who: "", text: "The final bell rang, and the whole school exhaled at once"},
            { who: "Soyu", text: "Ugh... I'm so tired."},
            { who: "Soyu", text: "Let's go before sun is in the sky."}
        ],
        next: "afterSchool_hallway"

    },
    afterSchool_hallway: {
        bg: "afterschool_hallway.png",
        lines: [
            { who: "", text: "When I opened the door, Hina was in front of the door.", hina: true },
            { who: "Soyu", text: "OMG!! You scared me.", hina: true },
            { who: "Hina", text: "Did I? I'm sorry.", hina: true },
            { who: "Soyu", text: "What are you looking for?", hina: true },
            { who: "Hina", text: "You!", hina: true },
            { who: "Soyu", text: "Me? Why?", hina: true },
            { who: "Hina", text: "Because I want to talk with you more!", hina: true },
            { who: "Hina", text: "Do you want to go cafe?", hina: true },
            { who: "Soyu", text: "I mean... Sure.", hina: true },
            { who: "Hina", text: "Thank you! I will buy you some drink!", hina: true },
            { who: "Soyu", text: "Oh... OK. Thank you.", hina: true }
        ],
        next: "coffeeshop"
    },
    coffeeshop: {
        bg: "coffeeshop.png",
        lines: [
            { who: "", text: "The cafe was small and quiet, smelling of coffee and warm bread." },
            { who: "Hina", text: "What do you want to drink?", hina: true },
            { who: "Hina", text: "Caffè americano?", hina: true },
            { who: "Hina", text: "Or... Cappuccino?", hina: true },
            { who: "Hina", text: "Or... Caffè mocha?", hina: true }
        ],
        choices: [
            { text: "I want Caffè americano, Thank you.", points: 2, next: "bitter" },
            { text: "I want Cappuccino, Thank you.", points: 1, next: "littlesweet" },
            { text: "I want Caffè mocha, Thank you.", points: 0, next: "sweet" }
        ]
    },
    bitter: {
        lines: [
            { who: "Hina", text: "You like Caffè americano?", hina: true, fx: "hop" },
            { who: "Hina", text: "Me too! I don't like sweet things that much!", hina: true },
            { who: "Hina", text: "I feel like we really click.", hina: true },
            { who: "Hina", text: "Have a sit! I'll bring you the coffee!", hina: true }
        ],
        next: "coffeeshop_chair"
    },
    littlesweet: {
        lines: [
            { who: "Hina", text: "Oh, Cappuccino?", hina: true },
            { who: "Hina", text: "Haha, good choice.", hina: true },
            { who: "Hina", text: "I'll get you! Let's go to the sit.", hina: true }
        ],
        next: "coffeeshop_chair"
    },
    sweet: {
        lines: [
            { who: "Hina", text: "Oh...Caffè mocha?", hina: true, fx: "stepback" },
            { who: "Hina", text: "Do you like sweet things?", hina: true },
            { who: "Hina", text: "Well, I don't like sweet things tho...", hina: true },
            { who: "Hina", text: "But OK! I got you!", hina: true }
        ],
        next: "coffeeshop_chair"
    },
    coffeeshop_chair: {
        bg: "coffeeshop_chair.png",
        lines: [
            { who: "Hina", text: "Actually, I have concern.", hina: true },
            { who: "Hina", text: "Everyone thinks I'm gentle, perfect senior.", hina: true },
            { who: "Hina", text: "But honestly... I'm scared of getting close to people.", hina: true },
            { who: "Hina", text: "Last year, my best friend transferred away without saying nothing. Since then, I keep everyone at arm's length.", hina: true },
            { who: "Hina", text: "And now you show up. A transfer student. Funny, right?", hina: true },
            { who: "Hina", text: "I have another chance to get closer with people.", hina: true },
            { who: "Hina", text: "I never told anyone this before. So... what do you think?", hina: true }
        ],
        choices: [
            { text: "I'm not going anywhere. We can be closer.", points: 2, next: "promise" },
            { text: "I'm just glad you told me.", points: 1, next: "gentle" },
            { text: "Why are you telling me this?", points: 0, next: "why" }
        ]
    },
    promise: {
        lines: [
            { who: "Hina", text: "...You can't promise that. But thank you for saying it.", hina: true },
            { who: "", text: "Her smile was real this time, not the polite one.", hina: true }
        ],
        branch: [
            { min: 5, next: "endingNumber" },
            { nest: "endingNoNumber" }
        ]
    },
    gentle: {
        lines: [
            { who: "Hina", text: "Hehe. You're kind, junior. Almost too kind.", hina: true },
            { who: "Hina", text: "She stirred her drink quietly, looking relieved.", hina: true }
        ],
        branch: [
            { min: 5, next: "endingNumber" },
            { nest: "endingNoNumber" }
        ]
    },
    why: {
        lines: [
            { who: "Hina", text: "Good question. I don't know either.", hina: true, fx: "stepback" },
            { who: "", text: "She laughed, but quickly looked away.", hina: true }
        ],
        branch: [
            { min: 5, next: "endingNumber" },
            { nest: "endingNoNumber" }
        ]
    },
    endingNumber: {
        bg: "outside.png",
        lines: [
            { who: "", text: "Outside the cafe, the sky had turned orange." },
            { who: "Hina", text: "Hey, junior. Hand me your phone.", hina: true, fx: "hop" },
            { who: "Soyu", text: "Eh, why?", hina: true },
            { who: "Hina", text: "Don't make me say it twice! I'm putting my number in.", hina: true },
            { who: "Hina", text: "Text me first, okay? ...Not too late at night.", hina: true },
            { who: "Hina", text: "Then... See you, junior. No... Soyu.", hina: true },
            { who: "Soyu", text: "(She walked away fast, but I swear her ears were red.)"}
        ],
        endText: "Ending A: Her Number",
        end: true
    },
    endingNoNumber: {
        bg: "outside.png",
        lines: [
            { who: "", text: "Outside the cafe, the sky had turned orange." },
            { who: "Hina", text: "Thanks for today, junior. It was nice.", hina: true },
            { who: "Hina", text: "Well, see you at school tomorrow!", hina: true },
            { who: "", text: "I didn't get her number." },
            { who: "Soyu", text: "(Next time, I'll get closer. And get her number.)" }
        ],
        endText: "Ending B: Not Yet",
        end: true
    }
};

let affection = 0;
let sceneId = "start";
let lineIndex = 0;
let waitingChoice = false;

const $game = document.getElementById("game");
const $name = document.getElementById("name");
const $text = document.getElementById("text");
const $hina = document.getElementById("hina");
const $choices = document.getElementById("choices");
const $affection = document.getElementById("affection");
const $dialog = document.getElementById("dialog");
const $hint = document.getElementById("hint");
const $restart = document.getElementById("restart");
const $hinaImg = document.querySelector("#hina img");
const DEFAULT_POSE = "hina.png";

$hinaImg.onerror = function () {
    if (!$hinaImg.src.endsWith(DEFAULT_POSE)) $hinaImg.src = DEFAULT_POSE;
};
function setPose(file) {
    $hinaImg.src = file || DEFAULT_POSE;
}

function checkImage(src, onOk) {
    const img = new Image();
    img.onload = onOk;
    img.src = src;
    ["hina.png", "hallway.png", "courtyard.png", "hina_reading.png", "classroom.png", "afterschool_classroom.png", "afterschool_hallway.png", "coffeeshop.png", "coffeeshop_chair.png", "outside.png"].forEach(function (file) {
        const img = new Image();
        img.src = file;
    });
}
checkImage("hina.png", function () { $hina.classList.add("has-img"); });

function setBackground(file) {
    checkImage(file, function () {
        $game.style.backgroundImage = 'url("' + file +'")';
        $game.classList.add("has-bg");
    });
}

function playFx(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
}

const effects = {
    bump:   function () { playFx($game, "shake"); playFx($hina, "slide"); },
    stepback: function () { playFx($hina, "stepback"); },
    hop:    function () { playFx($hina, "hop"); }
};

function showLine() {
    const line = scenes[sceneId].lines[lineIndex];
    $name.textContent = line.who;
    $name.style.display = line.who ? "block" : "none";
    $text.textContent = line.text;
    $hina.classList.toggle("show", !!line.hina);
    setPose(line.pose || scenes[sceneId].pose);
    if (line.fx && effects[line.fx]) effects[line.fx]();
}

function showChoices(list) {
    waitingChoice = true;
    $hint.style.display = "none";
    $choices.innerHTML = "";
    list.forEach(function (c) {
        const btn = document.createElement("button");
        btn.className = "choice";
        btn.textContent = c.text;
        btn.onclick = function () {
            affection += c.points;
            $affection.textContent = "Affection " + affection;
            $choices.innerHTML = "";
            waitingChoice = false;
            $hint.style.display = "block";
            goTo(c.next);
        };
        $choices.appendChild(btn);
    });
}

function goTo(id) {
    sceneId = id;
    lineIndex = 0;
    if (scenes[id].bg) setBackground(scenes[id].bg);
    showLine();
}

function advance() {
    if (waitingChoice) return;
    const scene = scenes[sceneId];

    if (lineIndex < scene.lines.length - 1) {
        lineIndex++;
        showLine();
        return;
    }
    if (scene.choices) {
        showChoices(scene.choices);
    } else if (scene.branch) {
        const hit = scene.branch.find(function (b) {
        return b.min === undefined || affection >= b.min;
        });
        goTo(hit.next);
    } else if (scene.next) {
        goTo(scene.next);
    } else if (scene.end) {
        $text.textContent = (scene.endText || "The End...") + " | Final affection: " + affection;
        $hint.style.display = "none";
        $restart.style.display = "inline-block";
        waitingChoice = true;
    }
}

$dialog.addEventListener("click", advance);
document.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") {
        if (document.activeElement.tagName !== "BUTTON") {
            e.preventDefault();
            advance();
        }
    }
});

$restart.onclick = function (e) {
    e.stopPropagation();
    affection = 0;
    $affection.textContent = "Affection 0";
    $restart.style.display = "none";
    $hint.style.display = "block";
    waitingChoice = false;
    goTo("start");
};

goTo("start");

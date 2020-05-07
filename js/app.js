let que = document.querySelector("#question");
let res = document.querySelector("#response");
let next = document.querySelector("#button");
let start = document.querySelector(".start");
let game = document.querySelector(".game");
let score = document.querySelector("#scoreid");
let qid = document.querySelector("#qid");
let total = document.querySelector(".total")
let pg = document.querySelector(".play-again");
let track = 0;
let trackq = 1;
let scorecount = 0;
let questions
let checkanswers


const action = () => {
    res.classList.remove("stop");
    if (questions.length === 0) {
        game.classList.add("none");
        total.textContent = scorecount
        pg.classList.remove("none");
    } else {
        let pop = questions.pop()
        track++
        trackq++
        qid.textContent = trackq;
        let popanswers = pop.answers;
        que.innerHTML = "<p class='que'>" + pop.question + "</p>"
        res.innerHTML = "<p class='ans'>" + popanswers[0] + "</p>" + "<p class='ans'>" + popanswers[1] +
            "</p>" + "<p class='ans'>" + popanswers[2] + "</p>" + "<p class='ans'>" + popanswers[3] + "</p>"
    }

}

const action2 = () => {
    game.classList.remove("none");
    start.classList.add("none");
    pg.classList.add("none");
    track = 0;
    trackq = 1;
    scorecount = 0;
    score.textContent = 0;
    qid.textContent = trackq;
    questions = [{
            question: "Who is the richest man in the world?",
            answers: ["Messi", "Dangote", "Bezos", "Gates"]
        },
        {
            question: "Who is the best footballer in the world?",
            answers: ["Ronaldo", "Messi", "Hazard", "Neymar"]
        },
        {
            question: "What is the name of the Nigerian Currency?",
            answers: ["Dollar", "Coins", "Naira", "Pounds"]
        },
        {
            question: "Who is the fastest man Alive?",
            answers: ["Bolt", "Flash", "Zoom", "Nobody"]
        },
        {
            question: "What is the best operating system ?",
            answers: ["Windows", "Linux", "MacOS", "DOS"]
        },
    ];
    checkanswers = ["Windows", "Bolt", "Naira", "Messi", "Bezos"]
    const firstq = questions.pop()
    const answers = firstq.answers
    que.innerHTML = "<p class='que'>" + firstq.question + "</p>"
    res.innerHTML = "<p class='ans'>" + answers[0] + "</p>" + "<p class='ans'>" + answers[1] +
        "</p>" + "<p class='ans'>" + answers[2] + "</p>" + "<p class='ans'>" + answers[3] + "</p>"
}

const action3 = (evt) => {
    if (evt.target.textContent === checkanswers[track]) {
        evt.target.classList.add("right");
        res.classList.add("stop");
        scorecount++;
        score.textContent = scorecount;
    } else {
        evt.target.classList.add("wrong");
        res.classList.add("stop");
    }
}


next.addEventListener("click", action);
start.addEventListener("click", action2)
res.addEventListener("click", action3)
pg.addEventListener("click",action2)
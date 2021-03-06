let que = document.querySelector("#question");
let res = document.querySelector("#response");
let next = document.querySelector("#button");
let start = document.querySelector(".start");
let game = document.querySelector(".game");
let score = document.querySelector("#scoreid");
let qid = document.querySelector("#qid");
let total = document.querySelector(".total")
let pg = document.querySelector(".play-again");
let sbut = document.querySelector("#sbutton");
let sbut1 = document.querySelector("#sbutton1");
let track = 0;
let trackq = 1;
let scorecount = 0;
let questions
let checkanswers
let trackClick


const action = () => {
    res.classList.remove("stop");
    if (questions.length === 0) {
        if (trackClick === true) {
            game.classList.add("none");
            total.textContent = scorecount
            pg.classList.remove("none");
            trackClick = false;
        }
    } else {
        if (trackClick === true) {
            let pop = questions.pop()
            track++
            trackq++
            qid.textContent = trackq;
            let popanswers = pop.answers;
            que.innerHTML = "<p class='que'>" + pop.question + "</p>"
            res.innerHTML = "<p class='ans'>" + popanswers[0] + "</p>" + "<p class='ans'>" + popanswers[1] +
                "</p>" + "<p class='ans'>" + popanswers[2] + "</p>" + "<p class='ans'>" + popanswers[3] + "</p>"
            trackClick = false;
        }

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
    if (evt.target.tagName === 'P') {
        if (evt.target.textContent === checkanswers[track]) {
            evt.target.classList.add("right");
            res.classList.add("stop");
            scorecount++;
            score.textContent = scorecount;
            trackClick = true
        } else {
            evt.target.classList.add("wrong");
            let ans = document.querySelectorAll(".ans");
            ans = Array.from(ans);
            ans.map((item) => {
                if (item.textContent === checkanswers[track]) {
                    item.classList.add("right");
                }
            })

            res.classList.add("stop");
            trackClick = true
        }
    }

}


next.addEventListener("click", action);
sbut.addEventListener("click", action2)
res.addEventListener("click", action3)
sbut1.addEventListener("click", action2)
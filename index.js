let hScore = 0
let gScore = 0
let hFoul = 0
let gFoul = 0
let lContent = "Start the game to see the lead"
let homeScore = document.getElementById("Home-Score")
let guestScore = document.getElementById("Guest-Score")
let homeFoul = document.getElementById("Home-Fouls")
let guestFoul = document.getElementById("Guest-Fouls")
let leadContent = document.getElementById("lead")

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    hScore = 0
    gScore = 0
    guestFoul.textContent = 0
    homeFoul.textContent = 0
    hFoul = 0
    gFoul = 0
    leadContent.textContent = lContent
}
function lead() {
    if (hScore == gScore) {
        leadContent.textContent = "Its a tie now"
    }
    else if (hScore > gScore) {
        let temp = hScore - gScore
        leadContent.textContent = "Home lead by " + temp + " points"
    }
    else {
        let temp = gScore - hScore
        leadContent.textContent = "Guest lead by " + temp + " points"
    }
}

function homeAddOne() {
    hScore += 1
    homeScore.textContent = hScore
    lead()
}
function homeAddTwo() {
    hScore += 2
    homeScore.textContent = hScore
    lead()
}
function homeAddThree() {
    hScore += 3
    homeScore.textContent = hScore
    lead()
}

function guestAddOne() {
    gScore += 1
    guestScore.textContent = gScore
    lead()
}
function guestAddTwo() {
    gScore += 2
    guestScore.textContent = gScore
    lead()
}
function guestAddThree() {
    gScore += 3
    guestScore.textContent = gScore
    lead()
}
function guestFoulOne() {
    gFoul += 1
    guestFoul.textContent = gFoul
    lead()
}
function homeFoulOne() {
    hFoul += 1
    homeFoul.textContent = hFoul
    lead()
}
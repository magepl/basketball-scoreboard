let homeEl = document.getElementById('home-count')
let guestEl = document.getElementById('guest-count')
let home = 0
let guest = 0

function homePlusOne() {
    home += 1
    homeEl.textContent = home
}

function homePlusTwo() {
    home += 2
    homeEl.textContent = home
}

function homePlusThree() {
    home += 3
    homeEl.textContent = home
}

function guestPlusOne() {
    guest += 1
    guestEl.textContent = guest
}
function guestPlusTwo() {
    guest += 2
    guestEl.textContent = guest
}function guestPlusThree() {
    guest += 3
    guestEl.textContent = guest
}
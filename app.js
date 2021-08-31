const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}

const clock = document.querySelector("h2#clock");

function getClock() {
    var date = new Date();
    var hour = String(date.getHours()).padStart(2, "0");
    var minute = String(date.getMinutes()).padStart(2, "0");
    var sec = String(date.getSeconds()).padStart(2, "0");

    const now = `${hour}:${minute}:${sec}`;

    clock.innerText = now;
}
getClock();
setInterval(getClock, 1000);

const quotes = [
    {quote : "aaaa", author: "a"},
    {quote : "bbbb", author: "b"},
    {quote : "cccc", author: "c"},
    {quote : "dddd", author: "d"},
    {quote : "eeee", author: "e"},
    {quote : "fffff", author: "f"},
    {quote : "ggggg", author: "g"},
    {quote : "hhhh", author: "h"},
    {quote : "iiii", author: "i"},
    {quote : "jjjj", author: "j"},
    {quote : "kkkkk", author: "k"},
    {quote : "lllll", author: "l"},
    {quote : "mmmm", author: "m"},
    {quote : "nnnn", author: "n"},
    {quote : "ooooo", author: "o"},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
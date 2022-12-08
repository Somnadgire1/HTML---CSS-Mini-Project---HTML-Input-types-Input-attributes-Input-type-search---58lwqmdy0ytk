/*------digital clock-start-------*/
function clock() {
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let period = document.querySelector("#period");
    let dates = document.querySelector("#dates");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h > 12 ? "PM" : "AM";

    if (h > 12) {
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;

    let d = new Date();

    dates.innerHTML = d.toDateString();
};
setInterval(clock, 1000);
//-----form submit--
const scriptURL = 'https://script.google.com/macros/s/AKfycbxhqFNrSy7qmxTRoZWzoDiKkw0_FvqBYzJsQOl3hr569w92SXXIXApop-amCc7Llpfm/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML= "Message sent Successfully!"
        setTimeout(function(){
            setTimeout(function(){
                msg.innerHTML=""
            }, 5000)
            form.reset()
        })
    })
    .catch(error => console.error('Error!', error.message))
})

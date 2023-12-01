const timerDays = document.querySelector("#timerDays");
const timerHours = document.querySelector("#timerHours");
const timerMinutes = document.querySelector("#timerMinutes");
const timerSeconds = document.querySelector("#timerSeconds");

const tomorrowDay = document.querySelector("#tomorrowDay");
const tomorrowMonth = document.querySelector("#tomorrowMonth");
const tomorrowYear = document.querySelector("#tomorrowYear");

const aboutTextDate = document.querySelector("#aboutTextDate");

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);
const countDownDate = tomorrow.getTime();

const x = setInterval(function () {
  const currentDate = new Date().getTime();

  const distance = countDownDate - currentDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerDays.innerHTML = days.toString().padStart(2, "0");
  timerHours.innerHTML = hours.toString().padStart(2, "0");
  timerMinutes.innerHTML = minutes.toString().padStart(2, "0");
  timerSeconds.innerHTML = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const nextDayYear = tomorrow.getFullYear();
const nextDayMonthName = tomorrow.toLocaleString("en-US", { month: "long" });
let nextDayNum = tomorrow.getDate();

nextDayNum = nextDayNum.toString().padStart(2, "0");

tomorrowDay.innerHTML = nextDayNum;
tomorrowMonth.innerHTML = nextDayMonthName;
tomorrowYear.innerHTML = nextDayYear;

const textDate = `${nextDayMonthName} ${nextDayNum}, ${nextDayYear}`;
aboutTextDate.innerHTML = textDate;

let section = document.querySelector("section"),
icons = document.querySelector(".icons")

icons.onclick = () => {
  section.classList.toggle("dark");
}

// Creating Function for every Second
setInterval(() => {
  let date = new Date(),
  hour = date.getHours(),
  min = date.getMinutes(),
  sec = date.getSeconds();

  let d;
  d = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? hour = 12 : hour;

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  console.log(date);

  document.querySelector(".hour").innerText = hour;
  document.querySelector(".min").innerText = min;
  document.querySelector(".sec").innerText = sec;
  document.querySelector(".am_pm").innerText = d;
}, 1000); // 1000 milliseconds = 1s
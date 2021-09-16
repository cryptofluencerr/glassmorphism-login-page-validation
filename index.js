const emailEl = document.querySelector(".username").value;
const passwordEl = document.querySelector(".password").value;
const submitEl = document.querySelector("submit");
var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

submitEl.addEventListener(
  "submit",
  (submit = (e) => {
    e.preventDefault();
  })
);

const isBetween = (length, min, max) => {
  length < min || length > max ? false : true;
};

let btn = document.querySelector("button");
console.log(btn);

let text = document.querySelector("title").innerHTML;

btn.onclick = function () {
  alert(`Hello , we are in ${text}`);
};

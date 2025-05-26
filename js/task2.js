const p = document.getElementById("test-text");
console.log(p);
console.log(p.innerHTML);
p.innerHTML = "Привет <b>мир</b>! Меня зовут <i>Арсений</i>";
p.style.background = "aqua";
p.style.color = "blue";
p.style.border = "2px solid blue";
p.style.width = "250px";

const input = document.getElementById("email");
console.log(input);
console.log(input.innerHTML);
input.value = "mail@mail.ru";
document.getElementById("remember").checked = true;

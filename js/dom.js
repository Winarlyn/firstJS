//1 выбрать элемент на странице (тег)
//1.1 - выбор элемнтов по id
const h1 = document.getElementById("title");
console.log(h1); 
//1.2 Выбор элемента по селектору
const menu = document.querySelector(".menu");
console.log(menu);
//1.3 Выбор нескольких элементов по селектору 
const links = document.querySelectorAll("nav a");
console.log(links);
//2 работа с контентом (содержимым тегов)
console.log(h1.textContent); // чтение содержимого без тегов
console.log(h1.innerHTML); // чтение содержимого с тегами
console.log(h1.innerText);
console.log(h1.outerHTML);
console.log(h1.outerText);

h1.textContent = "Новый заголовок <img src='img/bicycle.svg' alt='logo'>"; //изменить содержимое, теги воспринимаются как текст
h1.innerHTML = "Новый заголовок <img src='img/bicycle.svg' alt='logo'>"; //изменить контент с тегами

//3 работа со стилями (атрибут style)
menu.style.background = "yellow";
menu.style.border ="2px green solid";
menu.style.fontSize = "30px";

//4 - работа с классами (атрибус class)
const block = document.getElementById("block");
block.classList.add("border"); //добавление класса
block.classList.add("large");

block.classList.remove("large"); //удалить класс

console.log(block.classList.contains("border")); //проверка есть ли у элемента этот класс


//5 работа с атрибутами

const link = document.querySelector(".link");
console.log(link.getAttribute("href")); //счтываем значение атрибута
link.setAttribute("href", "https://icons.getbootstrap.com/icons/bicycle/"); //установить или изменить атрибут

link.removeAttribute("href"); //удалить атрибут

//6 создание нового элемента 
const image = document.createElement("img"); //создание тега
image.setAttribute("src","img/1.jpg"); // Добовляю атрибут src
image.setAttribute("alt","tiger"); // Добовляю атрибут alt
block.append(image); //добавляем картинку в блок append prepend before after 

//7 -работа с потомками 
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));

//8 работа с предками 
const lastLink = document.querySelector(".menu li:last-child a");
console.log(lastLink);
const parent = lastLink.closest("li");//взять ближайшего предка с заданным селектором
console.log(parent);

//9 работа с событиями
 const btn = document.getElementById("btn");
 const circle = document.querySelector(".circle");

 btn.addEventListener("click", function(){
    // circle.style.transform = "translateX(600px)";
    circle.classList.toggle("move");

 })











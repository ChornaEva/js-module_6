// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// listWithId.style.color = "orange";
// // console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// // console.log(listWithClass);

// const menuItemsBuTagName = document.querySelectorAll("li");
// // console.log(menuItemsBuTagName);

// const menuItemsyClass = document.querySelectorAll(".menu-item");
// // console.log(menuItemsyClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "pink";
// // console.log(firstMenuItem);

// *****

// const message = document.querySelector("#message");
// // console.log(message.value);

// const activeLink = document.querySelector(".btn.active");
// // console.log(activeLink.href);

// const image = document.querySelector(".image");
// console.log(image.src);
// image.src = "https://placeimg.com/640/480/tech";

// ****

// const text = document.querySelector(".article-text");
// // console.log(text.textContent);
// text.style.color = "red";

// const title = document.querySelector(".article-title");
// // console.log(title.textContent);

// title.textContent = "Wellcome to Yaremche";
// console.log(title.textContent);

// ****

// const text = document.querySelector("#paragraph");
// // console.log(text.classList);
// // console.log(text.classList.contains("red"));

// text.classList.remove("big");
// // console.log(text.classList);

// text.classList.add("new-class");
// // console.log(text.classList);

// text.classList.add("a", "b", "c");
// // console.log(text.classList);

// text.classList.toggle("is-hidden");
// text.classList.toggle("is-hidden");

// text.classList.forEach((cls) => {
//   console.log(cls);
// });

// ****

// const button = document.querySelector(".btn");
// button.style.backgroundColor = "pink";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style);

// ****
// const img = document.querySelector(".image");
// console.log(img.attributes);
// console.log(img.hasAttribute("src"));
// console.log(img.getAttribute("alt"));
// img.setAttribute("alt", "Cool animal");
// console.log(img.getAttribute("alt"));

// ****

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// // console.log(saveBtn.dataset.action);
// // console.log(closeBtn.dataset.action);

// const dishes = document.querySelectorAll("dishes>li");

// dishes.forEach((dish) => {
//     console.log(dish.dataset.id);
// });

// ****

// const list = document.querySelector(".usernames");

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// const text = document.createElement("p");
// text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
// list.after(text);

// ****

// const text = document.querySelector(".text");
// console.log(text.textContent);
// text.remove();

// ****

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// ****

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}<li>`)
//   .join("");

// console.log(markup);

// list.innerHTML = markup;

// *
// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentElement("beforeend", markup);
// list.insertAdjacentElement("beforebegin", '<h2>Popular technologies</h2>');

// ***

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("firstCallback");
// };
// const secondCallback = () => {
//   console.log("secondCallback");
// };
// const thirdCallback = () => {
//   console.log("thirdCallback");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// ****

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// ****

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// ****
// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// ****

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item"><span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ****
// const form = document.querySelector(".form");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTargert.reset();
// }

// ****
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// ****
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

// ****

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});

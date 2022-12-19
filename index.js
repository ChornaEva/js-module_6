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
const list = document.querySelector(".list");
const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentElement("beforeend", markup);
list.insertAdjacentElement("beforebegin", '<h2>Popular technologies</h2>');

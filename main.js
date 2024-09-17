const buttons = document.querySelectorAll(".tabs__button");
const contentList = document.querySelectorAll(".tabs__content");

const addActiveClass = (target, array) => {
  array[+target.id].classList.add("active");
}
  
const removeActiveClasses = (content) => {
  content.classList.remove("active");
}

const changeButtonsClasses = (event) => {
  const target = event.target;
  if (target.classList.contains("tabs__button")) {
      contentList.forEach(removeActiveClasses);
      buttons.forEach(removeActiveClasses);
  }
  addActiveClass(target, contentList);
  addActiveClass(target, buttons);
}

const switchTabs = (button) => {
  button.addEventListener("click", changeButtonsClasses);
}
  
buttons.forEach(switchTabs);
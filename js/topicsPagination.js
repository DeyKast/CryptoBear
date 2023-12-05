const topicItems = document.querySelectorAll(".topicsListItem");

(() => {
  document.body.style.overflowX = "hidden";
})();

topicItems.forEach((topicItem) => {
  const topicInfo = topicItem.querySelector(".topicsListItemInfo");
  const arrowIcon = topicItem.querySelector(".arrowIcon");

  topicItem.addEventListener("click", () => {
    topicInfo.classList.toggle("openInfo");
    arrowIcon.classList.toggle("openInfoIcon");
  });
});

const topicsList = document.querySelector(".topicsList");
const seeMoreButton = document.querySelector("#seeMoreBtn");
const itemsPerPage = 4;
let currentPage = 1;

function seeMoreItems() {
  const topicsListItems = topicsList.querySelectorAll(".topicsListItem");
  const topicsListItemsCount = topicsListItems.length;

  if (currentPage * itemsPerPage < topicsListItemsCount) {
    for (
      let i = itemsPerPage * currentPage;
      i <= topicsListItemsCount && i <= itemsPerPage * (currentPage + 1);
      i++
    ) {
      if (i == topicsListItemsCount) {
        seeMoreButton.innerHTML = "see less";
      } else {
        topicsListItems[i].classList.remove("visually-hidden");
      }
    }

    currentPage++;
  } else {
    for (let x = 4; x < topicsListItemsCount; x++) {
      topicsListItems[x].classList.add("visually-hidden");
      window.scrollTo({
        top: 1500,
        left: 0,
        behavior: "smooth",
      });
    }
    currentPage = 1;
    seeMoreButton.innerHTML = "see more";
  }
}

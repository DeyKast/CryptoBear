const topicItems = document.querySelectorAll(".topicsListItem");

topicItems.forEach((topicItem) => {
  const topicInfo = topicItem.querySelector(".topicsListItemInfo");
  const arrowIcon = topicItem.querySelector(".arrowIcon");

  topicItem.addEventListener("click", () => {
    topicInfo.classList.toggle("openInfo");
    arrowIcon.classList.toggle("openInfoIcon");
  });
});

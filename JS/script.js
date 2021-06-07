var progressbar = document.querySelector(".progressbar");

window.onscroll = function () {
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  let progressbarWidth = (window.pageYOffset / totalHeight) * 100;
  progressbar.style.width = progressbarWidth + "%";
};

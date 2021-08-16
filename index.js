/* Tratamento de Datas */
var data = new Date();
var ano = data.getFullYear();

document.querySelector(".hora").innerText = `${ano}`;

/* Scroll top */
var scrollToTopBtn = document.getElementById("scrollTop");
var rootScroll = document.documentElement;

function scrollToTop() {
  rootScroll.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
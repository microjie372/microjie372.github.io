// Project page behaviour, from the Academic Project Page Template (carousel and video parts removed).

function toggleMoreWorks() {
  document.getElementById("moreWorksDropdown").classList.toggle("show");
  document.querySelector(".more-works-btn").classList.toggle("active");
}

function closeMoreWorks() {
  document.getElementById("moreWorksDropdown").classList.remove("show");
  document.querySelector(".more-works-btn").classList.remove("active");
}

document.addEventListener("click", function (event) {
  var container = document.querySelector(".more-works-container");
  if (container && !container.contains(event.target)) {
    closeMoreWorks();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMoreWorks();
  }
});

function copyBibTeX() {
  var text = document.getElementById("bibtex-code").textContent;
  var button = document.querySelector(".copy-bibtex-btn");
  var label = button.querySelector(".copy-text");

  function done() {
    button.classList.add("copied");
    label.textContent = "Copied";
    setTimeout(function () {
      button.classList.remove("copied");
      label.textContent = "Copy";
    }, 2000);
  }

  function fallback() {
    var area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    done();
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, fallback);
  } else {
    fallback();
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  document.querySelector(".scroll-to-top").classList.toggle("visible", window.pageYOffset > 300);
});

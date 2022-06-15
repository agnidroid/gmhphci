(function () {
  let toTopBtn = document.getElementById("backtotop");
  console.log(toTopBtn);
  window.onscroll = () => {
    scrollFunction();
  };
  function scrollFunction() {
    //   Show Button
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      toTopBtn.classList.remove("d-none");
    } else {
      toTopBtn.classList.add("d-none");
    }
  }
  scrollFunction();

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  toTopBtn.addEventListener("click", topFunction);
  
  window.onload = () => {
    topFunction()
  }
})();

(function () {
  const navbar = document.getElementById("navbar");
  const menu = navbar.querySelector("div.menu");
  const close_btn = document.getElementById("close-btn");
  const open_btn = document.querySelector("#open-btn");
  const links = navbar.querySelectorAll('li.link');

  open_btn.addEventListener("click", (e) => {
    menu.classList.replace("hide","show")
    console.log(e.target)
  })
  function closeMenu() {
    menu.classList.replace("show","hide")
  }

  links.forEach(element => {
    element.addEventListener("click", closeMenu)
  });
  close_btn.addEventListener("click", closeMenu)


  console.log(navbar);
  console.log(links);
})();

// Adding Class Carasoul
function a_c_carasoul(active, t_elt, auto_c_t, ...clickableBtn) {
  t_elt[0].classList.add("active");
  const nextElt = () => {
    let active_elt = active.querySelector(".active");
    active_elt.classList.remove("active");
    if (active_elt.nextElementSibling) {
      active_elt.nextElementSibling.classList.add("active");
    } else {
      t_elt[0].classList.add("active");
    }
    setTimeout(() => active_elt.classList.remove("active"));
  };
  const prevElt = () => {
    let active_elt = active.querySelector(".active");
    active_elt.classList.remove("active");
    if (active_elt.previousElementSibling) {
      active_elt.previousElementSibling.classList.add("active");
    } else {
      t_elt[t_elt.length - 1].classList.add("active");
    }
    setTimeout(() => active_elt.classList.remove("active"));
  };
  if (true) {
    if (auto_c_t != 0) {
      setInterval(nextElt, auto_c_t); 
    }
  }
  if (clickableBtn.length != 0) {
    clickableBtn[0].addEventListener("click", nextElt)
    clickableBtn[1].addEventListener("click", prevElt) 
  }
}


 // Header BG Carasoul
 (function() {
  let slides = document.querySelectorAll("#header .header_bg > div")
  a_c_carasoul(document.querySelector("#header .header_bg"), slides, 10000)
})();
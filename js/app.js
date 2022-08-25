// Scroll To Top
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

  // window.onload = () => {
  //   topFunction()
  // }
})();

// Open/Close Menu
(function () {
  const navbar = document.getElementById("navbar");
  const menu = navbar.querySelector("div.menu-container");
  const close_btn = document.getElementById("close-btn");
  const open_btn = document.querySelector("#open-btn");
  const links = navbar.querySelectorAll('li.link');
  const drop_li = navbar.querySelectorAll('li.dropdown li');

  open_btn.addEventListener("click", (e) => {
    menu.classList.replace("hide", "show")
    console.log(e.target)
  })
  function closeMenu() {
    menu.classList.replace("show", "hide")
  }

  links.forEach(element => {
    element.addEventListener("click", closeMenu)
  });
  drop_li.forEach(element => {
    element.addEventListener("click", closeMenu)
  });
  close_btn.addEventListener("click", closeMenu)


  console.log(navbar);
  console.log(links);
})();

// Accordion 
function accordion(active_parent, d_clickable_items, exception) {
  // click function
  const accordion = (el) => {
    let active_accordion = active_parent.querySelector(".active-accordion");
    // Toggling Active Accordion
    if (el.classList.contains("active-accordion")) {
      el.classList.remove("active-accordion");
    } else {
      el.classList.add("active-accordion");
    }

    setTimeout(() => active_accordion.classList.remove("active-accordion"));
  };
  // getting all the items
  d_clickable_items.forEach((el) => {
    console.log(el);
    el.addEventListener("click", (par) => {
      accordion(el);
    });
  });

  document.querySelectorAll("#navbar li").forEach(li => {
    // console.log(li);
    li.addEventListener("click", () => {
      if (!li.classList.contains("dropdown")) {
        let active = document.querySelector("#navbar > .container div.menu-container .container > ul .active-accordion");
        setTimeout(() => {
          active.classList.remove("active-accordion")
        }, 1);
      }
    })
  })
}
// Menu Accordion
(function () {
  const active_parent = document.querySelector("#navbar > .container div.menu-container .container > ul");
  const d_clickable_items = document.querySelectorAll(
    "#navbar > .container div.menu-container .container > ul li.dropdown"
  );

  accordion(active_parent, d_clickable_items)
})();

// How to reach Accordion
(function () {
  const active_parent = document.querySelector(
    ".htru .container main div.ground"
  );
  const d_clickable_items = document.querySelectorAll(
    ".htru .container main div.ground > div h2"
  );

  accordion(active_parent, d_clickable_items)
})();

// Committee
(function () {
  const accordion_header_container = document.querySelector(".committee > .container > .ground .accordion .accordion_headers");
  const accordion_headers_items = document.querySelectorAll(".committee > .container > .ground .accordion .accordion_headers li");
  const accordion_contents = document.querySelector(".committee > .container > .ground .accordion .accordion_contents");
  const accordion_contents_items = document.querySelectorAll(".committee > .container > .ground .accordion .accordion_contents .list");

  function cmt_accordion(el, index) {
    // Toggler
    let active_accordion_toggler = accordion_header_container.querySelector(
      ".active-accordion"
    );
    if (!el.classList.contains("active-accordion")) {
      el.classList.add("active-accordion");
      setTimeout(() => active_accordion_toggler.classList.remove("active-accordion"), 0);
    }
    // Content 
    let active_accordion_content = accordion_contents.querySelector(
      ".active-accordion"
    );

    console.log(active_accordion_content);

    if (!accordion_contents_items[index].classList.contains("active-accordion")) {
      accordion_contents_items[index].classList.add("active-accordion");
      setTimeout(() => active_accordion_content.classList.remove("active-accordion"), 0);

    }
  }

  accordion_headers_items.forEach((el, index, parent) => {
    // console.log(index, el);
    el.addEventListener("click", () => {
      cmt_accordion(el, index)
    })
  })

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

// Menu Accordion 
// (function () {
//   const mb_ul_dropdown = document.querySelector(
//     "#navbar > .container div.menu-container .container > ul"
//   );
//   const dropdown_item = document.querySelectorAll(
//     "#navbar > .container div.menu-container .container > ul li.dropdown"
//   );

//   console.log(mb_ul_dropdown);
//   console.log(dropdown_item);
//   // click function
//   const accordion = (el) => {
//     let active_accordion = document.querySelector(
//       "li.dropdown.active-accordion"
//     );
//     if (el.classList.contains("active-accordion")) {
//       el.classList.remove("active-accordion");
//     } else {
//       el.classList.add("active-accordion");
//     }

//     setTimeout(() => active_accordion.classList.remove("active-accordion"), 1);
//   };
//   // getting all the items
//   dropdown_item.forEach((el) => {
//     console.log(el);
//     el.addEventListener("click", (par) => {
//       accordion(el);
//     });
//   });
// })();

// Header BG Carasoul
(function () {
  let slides = document.querySelectorAll("#header .header_bg > div")
  // a_c_carasoul(document.querySelector("#header .header_bg"), slides, 10000)
})();


// Opening Closing Menu
// (function () {
//   let menu_toggler = document.getElementById("open-btn");
//   let menu_container = document.querySelector(".menu-container");
//   let mb_wrapper = document.querySelector(".menu-container>.container");
//   let close_btn = document.querySelector(
//     "#close-btn"
//   );
//   menu_toggler.addEventListener("click", (toggler) => {
//     menu_container.style.width = "100%";
//     mb_wrapper.style.width = "400px";
//   });
//   const closeMenu = () => {
//     mb_wrapper.style.width = "0";
//     setTimeout(() => {
//       menu_container.style.width = "0";
//     }, 100);
//   };
//   close_btn.addEventListener("click", closeMenu);
//   menu_container.querySelector(".shadow").addEventListener("click", closeMenu);
// })();

//Sponsorship Page
function gotosponsorshippage()
{
  let contentsofthepage=document.getElementById("contents");
  for (let item of contentsofthepage.children) {
      if(item.id!="sponsorshippage")
      {
        console.log(item.style.display);
        item.style.display="none";
      }
      else
      {
        item.style.display="block";
      }
  }
  
}

//Copies the sponsorship page from existing page
(function () {
  let sponsorshipdata=document.getElementById("sponsorshipdata").cloneNode(true);
  let sponsorshipdatacopy=document.getElementById("sponsorshipdatacopy")
  sponsorshipdatacopy.appendChild(sponsorshipdata);
  sponsorshipdata.id="";
})();
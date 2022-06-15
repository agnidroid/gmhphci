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
  
  // Opening Closing Menu
  (function () {
    let menu_toggler = document.getElementById("menu-toggler");
    let menu_container = document.querySelector(".menu-container");
    let mb_wrapper = document.querySelector(".menu-container .mb-wrapper");
    let close_btn = document.querySelector(
      ".menu-container .mb-wrapper .mb-item a"
    );
    menu_toggler.addEventListener("click", (toggler) => {
      menu_container.style.width = "100vw";
      mb_wrapper.style.width = "360px";
    });
    const closeMenu = () => {
      mb_wrapper.style.width = "0";
      setTimeout(() => {
        menu_container.style.width = "0";
      }, 100);
    };
    close_btn.addEventListener("click", closeMenu);
    menu_container.querySelector(".shadow").addEventListener("click", closeMenu);
  })();
  
  // Teacher
  (function () {
    let tcr = document.querySelectorAll(".professional .tcr");
    let nextBtn = document.querySelector(".professional .next");
    let prevBtn = document.querySelector(".professional .prev");
  
    // A C Carasoul function Call
    a_c_carasoul(document.querySelector(".professional > .wrapper > .sec_1"), tcr, 0, nextBtn, prevBtn);
  })();
  
  // Bulletin
  (function () {
    let blt_li = document.querySelectorAll(".bulletin li");
    let nextBtn = document.querySelector(".bulletin .next");
    let prevBtn = document.querySelector(".bulletin .prev");
    // A C Carasoul function Call
    a_c_carasoul(document.querySelector(".bulletin .bulletin_cnt"), blt_li, 10000, nextBtn, prevBtn);
  })();
  
  // Active Class
  (function () {
    const navbar = document.getElementById("navbar");
    let li_item = navbar.getElementsByClassName('link');
    const changer = (li) => {
      let active = document.querySelector("#navbar .link.active");
      li.classList.add("active");
  
      setTimeout(() => {
        active.classList.remove("active");
      });
    };
  
    li_item.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        changer(li);
      });
      li.addEventListener("mouseleave", () => {
        changer(li);
        li_item[0].classList.add("active");
      });
    });
  })();
  
  // Menu Accordion
  (function () {
    const mb_ul_dropdown = document.querySelector(
      "nav.main_nav div.menu-container ul.mb-ul"
    );
    const dropdown_item = document.querySelectorAll(
      "nav.main_nav div.menu-container ul.mb-ul li.dropdown"
    );
    // click function
    const accordion = (el) => {
      let active_accordion = document.querySelector(
        "li.dropdown.active-accordion"
      );
      if (el.classList.contains("active-accordion")) {
        el.classList.remove("active-accordion");
      } else {
        el.classList.add("active-accordion");
      }
  
      setTimeout(() => active_accordion.classList.remove("active-accordion"), 1);
    };
    // getting all the items
    dropdown_item.forEach((el) => {
      el.addEventListener("click", (par) => {
        accordion(el);
      });
    });
  })();
  
  // Navbar scroll
  (function () {
    // let navbar = document.getElementById("navbar");
    let toTopBtn = document.getElementById("backtotop");
    console.log(toTopBtn);
    //   navbar.classList.add("fixed-top");
    window.onscroll = () => {
      scrollFunction();
    };
    function scrollFunction() {
    //   if (
    //     document.body.scrollTop > 200 ||
    //     document.documentElement.scrollTop > 200
    //   ) {
    //     navbar.style.marginTop = "-2rem";
    //   } else {
    //     navbar.style.marginTop = "0";
    //   }
  
    //   if (
    //     document.body.scrollTop > window.innerHeight - 100 ||
    //     document.documentElement.scrollTop > window.innerHeight - 100
    //   ) {
    //     // navbar.classList.remove("fixed-top")
    //     navbar.classList.add("fixed-top");
    //   } else {
    //     navbar.classList.remove("fixed-top");
    //   }
  
      //   Show Button
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
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
  })();
  
  // Increment Section
//   (function () {
//     const counter__controls = document.querySelectorAll(".counter-control");
//     counter__controls.forEach((counter) => {
//       // Counter Initial Value
//       counter.innerHTML = 0;
//       const updateCounter = () => {
//         const targetCount = +counter.getAttribute("data-target");
//         const startingCount = +counter.innerHTML;
//         const incr = targetCount / 100;
//         if (startingCount < targetCount) {
//           counter.innerHTML = Math.round(startingCount + incr);
//           setTimeout(updateCounter, 15);
//         } else {
//           counter.innerHTML = targetCount;
//         }
//       };
//       updateCounter();
//     });
//   })();
  
  // Date & Time
//   (function () {
//     setInterval(() => {
//       let date = new Date();
//       let timestamp = document.querySelector("#timestamp");
//       let day = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//       ];
//       let month = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//       ];
  
//       let todayDate = date.getDate();
  
//       if (todayDate == 1) {
//         todayDate = 1 + "st";
//       } else if (todayDate == 2) {
//         todayDate = 2 + "nd";
//       } else if (todayDate == 3) {
//         todayDate = 3 + "rd";
//       } else {
//         todayDate = todayDate + "th";
//       }
  
//       timestamp.innerHTML = `
//           <span>${day[date.getDay()]}</span>
//           <span>${date.toLocaleTimeString()},</span>
//           <span> ${todayDate} ${month[date.getMonth()]},</span>
//           <span> ${date.getFullYear()}</span>`;
//     }, 1000);
//   })();
  
  // function mb_menu_accordion() {
  //   const mb_ul_dropdown = document.querySelector(
  //     "nav.main_nav div.menu-container ul.mb-ul"
  //   );
  //   const dropdown_item = document.querySelectorAll(
  //     "nav.main_nav div.menu-container ul.mb-ul li.dropdown"
  //   );
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
  //     el.addEventListener("click", (par) => {
  //       accordion(el);
  //     });
  //   });
  // }
  
  // function mb_menu() {
  //   let menu_toggler = document.getElementById("menu-toggler");
  //   let menu_container = document.querySelector(".menu-container");
  //   let mb_wrapper = document.querySelector(".menu-container .mb-wrapper");
  //   let close_btn = document.querySelector(
  //     ".menu-container .mb-wrapper .mb-item a"
  //   );
  //   menu_toggler.addEventListener("click", (toggler) => {
  //     menu_container.style.width = "100vw";
  //     mb_wrapper.style.width = "300px";
  //   });
  //   const closeMenu = () => {
  //     mb_wrapper.style.width = "0";
  //     setTimeout(() => {
  //       menu_container.style.width = "0";
  //     }, 100);
  //   };
  //   close_btn.addEventListener("click", closeMenu);
  //   menu_container.querySelector(".shadow").addEventListener("click", closeMenu);
  // }
  
  // function navbar_scroll() {
  //   let navbar = document.getElementById("navbar");
  //   navbar.classList.add("fixed-top");
  //   window.onscroll = () => {
  //     scrollFunction();
  //   };
  //   function scrollFunction() {
  //     if (
  //       document.body.scrollTop > 200 ||
  //       document.documentElement.scrollTop > 200
  //     ) {
  //       navbar.style.marginTop = "-2rem";
  //     } else {
  //       navbar.style.marginTop = "0";
  //     }
  
  //     if (
  //       document.body.scrollTop > window.innerHeight ||
  //       document.documentElement.scrollTop > window.innerHeight
  //     ) {
  //       // navbar.classList.remove("fixed-top")
  //       navbar.classList.add("fixed-top");
  //     } else {
  //       navbar.classList.remove("fixed-top");
  //     }
  //   }
  //   scrollFunction();
  // }
  
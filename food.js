document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdown = this.parentElement;
      const dropdownMenu = this.nextElementSibling;
      const icon = this.querySelector("i");

      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        document.querySelectorAll(".dropdown.open").forEach((d) => {
          d.classList.remove("open");
          const i = d.querySelector("i");
          i.classList.remove("fa-chevron-up");
          i.classList.add("fa-chevron-down");
        });

        dropdown.classList.add("open");
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
});

// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve user preferences from local storage
  const userPreferences = JSON.parse(localStorage.getItem("db"));

  console.log("Retrieved userPreferences:", userPreferences);

  if (userPreferences && userPreferences.length > 0) {
    // Destructure specificMeal from userPreferences, defaulting allergy to "None"
    const { specificMeal } = userPreferences[0];
    const mealTypes = specificMeal.map((meal) => meal.toLowerCase());

    // Iterate over each dropdown
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      // Get the meal type from the dropdown toggle text
      const mealType = dropdown.querySelector(".dropdown-toggle div").textContent.trim().toLowerCase();
      const menuItems = dropdown.querySelectorAll(".dropdown-menu li");
      
      // Show or hide the dropdown based on meal type
      if (mealTypes.includes(mealType)) {
        dropdown.style.display = "block";
        // Show all items in the dropdown since we're no longer filtering by allergens
        menuItems.forEach((item) => {
          item.style.display = "block";
        });
      } else {
        dropdown.style.display = "none";
      }
    });
  } else {
    console.error("No user preferences found in local storage.");
  }
});
document.addEventListener("DOMContentLoaded", function() {
  // Fetch user data from local storage
  const userData = JSON.parse(localStorage.getItem('db'));

  // Check if userData exists and is in the correct format
  if (userData && Array.isArray(userData) && userData.length > 0) {
    const userAllergy = userData[0].allergy ? userData[0].allergy.toLowerCase() : '';

    const mealItems = document.querySelectorAll('li[data-allergy]');

    mealItems.forEach(item => {
      const itemAllergy = item.getAttribute('data-allergy').toLowerCase();

      if (userAllergy === 'none') {
        item.style.display = ''; // Display all meals if user allergy is 'none'
      } else if (itemAllergy === userAllergy) {
        item.style.display = 'none'; // Hide meals with the specified allergy
      } else {
        item.style.display = ''; // Display meals without the specified allergy
      }
    });
  }
});

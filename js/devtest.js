// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Count up for GREEEN CURRENT PLEDGES */
for (i=0;i <= 1423;i++){
    (function(i) {
        setTimeout(function(){
           document.getElementById("counter").innerHTML = i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        }, i * 2);
    })(i);
}

/* Sets Each district for PLEDGES / Animation */
function pledgeAmount(pledges, district, pledgesNumber) { 
    for (i=0;i <= pledges;i++){
        (function(i) {
            setTimeout(function(){
                // 45 because width of space 
                var districtWidth = i / 129 * 45;

                 /* Sets Each district width for PLEDGES */
                document.getElementById(district).style.width = districtWidth + '%';

                /* Count up for PLEDGES */
                document.getElementById(pledgesNumber).innerHTML = i + ' Pledges';
            }, i * 20);
        })(i);
    }
}


/* district 1 */
var pledges1 = 112;
pledgeAmount(pledges1, 'district1', 'pledges-number1');

/* district 2 */
var pledges2 = 98;
pledgeAmount(pledges2, 'district2', 'pledges-number2');

/* district 3 */
var pledges3 = 119;
pledgeAmount(pledges3, 'district3', 'pledges-number3');

/* district 4 */
var pledges4 = 126;
pledgeAmount(pledges4, 'district4', 'pledges-number4');

/* district 5 */
var pledges5 = 129;
pledgeAmount(pledges5, 'district5', 'pledges-number5');

/* district 6 */
var pledges6 = 44;
pledgeAmount(pledges6, 'district6', 'pledges-number6');

/* district 7 */
var pledges7 = 118;
pledgeAmount(pledges7, 'district7', 'pledges-number7');

/* district 8 */
var pledges8 = 125;
pledgeAmount(pledges8, 'district8', 'pledges-number8');

/* district 9 */
var pledges9 = 101;
pledgeAmount(pledges9, 'district9', 'pledges-number9');

/* district 10 */
var pledges10 = 27;
pledgeAmount(pledges10, 'district10', 'pledges-number10');


/* NAVIGATION */
// Add active class to the current button (highlight it)
var header = document.getElementById("navigation");
var links = header.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Mobile Nav
function activateNavigation(y) {
    y.classList.toggle("change");
    var x = document.getElementById("navigation");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

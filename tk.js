const menuBtns = document.querySelectorAll('.bmBtn');
// Her har vi valgt alle burgermenu knapperne bmBtn med en querySelectorAll 
menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

        const subMenu = btn.nextElementSibling;

        if (subMenu.style.display === 'block') {

            subMenu.style.display = 'none';

        } else {
            subMenu.style.display = 'block';
        }
    });
});
//kode der gør at det ikke er muligt at vælge en dato før den aktuelle dato når man skal reservere pladser på teaterkatten
// Her går går javascript ind og finder ElementByIf Dato, som dækker over datofeltet i reservationen
var datoFelt = document.getElementById("Dato");
// Her finder man den aktuelle aktuelle dato ved at generere den aktuelle dato som en string i År,måneds og dato 
var aktuelDato = new Date().toISOString().split("T")[0];
// Her går vi ind og sætter en grænse så man som minumum kun kan vælge den aktuelle dato, og derfor ikke kan -
// trykke på forige datoer i kalenderen. 
datoFelt.setAttribute("min", aktuelDato);
// nedeunder kan man se koden der giver en alert når man trykker på reserver knappen
var reserverBtn = document.getElementsByClassName("reserverBtn")[0];

reserverBtn.addEventListener("click", function(event) {
  // Viser en alert-besked
  alert("Du bliver nu ført videre til din mail. Her skal du ikke ændre på noget, men blot sende mailen og vente på at din bordreservation bliver bekræftet");
});

// hertil kommer der kode til vores reviews på siden.
//her skal nogle af de anmeldelser som de har fået på facebook vises på skift.
var reviewSlide = document.querySelectorAll("#reviewBox .reviewData");

var currentSlide = 0; 

function slideToNextReview() {
    reviewSlide[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % reviewSlide.length;
    reviewSlide[currentSlide].style.display = "block";
}

for (var i = 1; i < reviewSlide.length; i++) {
    reviewSlide[i].style.display = "none";
}


setInterval(slideToNextReview,3500); //Her sætter vi timeren til 3,5 sek sekunder, så slideren skifter til et andet review efter 4 sek.

//Her kommer der kode til at få menukortene til at komme frem 


function visDrinkCategory(category){
    //skjuler alle drikkekategorier
    var drinkCategory = document.getElementsByClassName("drinkCategory");
    for (var i = 0; i < drinkCategory.length; i++){
        drinkCategory[i].style.display = "none";
    }

// denne kode fjerner aktiv klasse fra de knapper der er trykke på
var drinkButton = document.getElementsByClassName("drinksBtn");
for (var j = 0; j < drinkButton.length;j++){
    drinkButton[j].classList.remove("aktivBtn");
}
// kode til at tilføje en aktiv klasse til den knap som kunder trykker på med henblik på art gp ind og ændre farven på den i ccs. så man ikk er i tvivl om hvilken knap man har trykket på.
var selectedBtn = document.querySelector(`button[onclick="visDrinkCategory('${category}')"]`);
selectedBtn.classList.add("aktivBtn");
// koden der får de forskellige kategorier til at blive vist på siden
var selectedCategory = document.getElementById(category + "Category");
selectedCategory.style.display = "block";

}


function openMenu() {
  document.getElementById("menuOverlay").style.height = "100%";
}

function closeMenu() {
  document.getElementById("menuOverlay").style.height = "0%";
  document.getElementById("kaffeOverlay").style.width = "0%";
  document.getElementById("vdOverlay").style.width = "0%";
  document.getElementById("ctOverlay").style.width = "0%";
  document.getElementById("oelOverlay").style.width = "0%";
  document.getElementById("vinOverlay").style.width = "0%";
  document.getElementById("spritOverlay").style.width = "0%";
  document.getElementById("absinOverlay").style.width = "0%";

}

function openBook() {
    document.getElementById("bookOverlay").style.height = "100%";
  }
  
  function closeBook() {
    document.getElementById("bookOverlay").style.height = "0%";
  }

  function openEvents() {
    document.getElementById("eventsOverlay").style.height = "100%";
  }
  
  function closeEvents() {
    document.getElementById("eventsOverlay").style.height = "0%";
  }
  

  function openKaffe() {

    document.getElementById("kaffeOverlay").style.width = "67%";
    document.getElementById("vinOverlay").style.width = "0%";
    document.getElementById("absinOverlay").style.width = "0%";
    document.getElementById("spritOverlay").style.width = "0%";
    document.getElementById("oelOverlay").style.width = "0%";
    document.getElementById("ctOverlay").style.width = "0%";
    document.getElementById("vdOverlay").style.width = "0%";


  }
  
  function closeKaffe() {
    document.getElementById("kaffeOverlay").style.width = "0%";
 
  }

  function openVd() {

    document.getElementById("vdOverlay").style.width = "67%";
    document.getElementById("kaffeOverlay").style.width = "0%";
    document.getElementById("absinOverlay").style.width = "0%";
    document.getElementById("spritOverlay").style.width = "0%";
    document.getElementById("oelOverlay").style.width = "0%";
    document.getElementById("ctOverlay").style.width = "0%";
    document.getElementById("vinOverlay").style.width = "0%";
   


  }
  
  function closeVd() {
    document.getElementById("vdOverlay").style.width = "0%";
  }

  function openCt() {

    document.getElementById("ctOverlay").style.width = "67%";
    document.getElementById("kaffeOverlay").style.width = "0%";
    document.getElementById("absinOverlay").style.width = "0%";
    document.getElementById("spritOverlay").style.width = "0%";
    document.getElementById("oelOverlay").style.width = "0%";
    document.getElementById("vinOverlay").style.width = "0%";
    document.getElementById("vdOverlay").style.width = "0%";



  }
  
  function closeCt() {
    document.getElementById("ctOverlay").style.width = "0%";
  }

  function openOel() {

    document.getElementById("oelOverlay").style.width = "67%";
    document.getElementById("kaffeOverlay").style.width = "0%";
    document.getElementById("absinOverlay").style.width = "0%";
    document.getElementById("spritOverlay").style.width = "0%";
    document.getElementById("vinOverlay").style.width = "0%";
    document.getElementById("ctOverlay").style.width = "0%";
    document.getElementById("vdOverlay").style.width = "0%";


  }
  
  function closeOel() {
    document.getElementById("oelOverlay").style.width = "0%";
  }

  function openVin() {

    document.getElementById("vinOverlay").style.width = "67%";
    document.getElementById("kaffeOverlay").style.width = "0%";
    document.getElementById("absinOverlay").style.width = "0%";
    document.getElementById("spritOverlay").style.width = "0%";
    document.getElementById("oelOverlay").style.width = "0%";
    document.getElementById("ctOverlay").style.width = "0%";
    document.getElementById("vdOverlay").style.width = "0%";


  }
  
  function closeVin() {
    document.getElementById("vinOverlay").style.width = "0%";

  }

  function openSprit() {

    document.getElementById("spritOverlay").style.width = "67%";
    document.getElementById("kaffeOverlay").style.width = "0%";
    document.getElementById("absinOverlay").style.width = "0%";
    document.getElementById("vinOverlay").style.width = "0%";
    document.getElementById("oelOverlay").style.width = "0%";
    document.getElementById("ctOverlay").style.width = "0%";
    document.getElementById("vdOverlay").style.width = "0%";



  }
  
  function closeSprit() {
    document.getElementById("spritOverlay").style.width = "0%";

  }

  function openAbsin() {

    document.getElementById("absinOverlay").style.width = "67%";
    document.getElementById("kaffeOverlay").style.width = "0%";
    document.getElementById("vinOverlay").style.width = "0%";
    document.getElementById("spritOverlay").style.width = "0%";
    document.getElementById("oelOverlay").style.width = "0%";
    document.getElementById("ctOverlay").style.width = "0%";
    document.getElementById("vdOverlay").style.width = "0%";


    


  }
  
  function closeAbsin() {

    document.getElementById("absinOverlay").style.width = "0%";

  }


//------------------------------- 
//collects items from html and stores them in variables
var sound = document.getElementById("sound");
var icon = document.getElementById("icon");

icon.onclick = function()// when icon is clicked run this function
{
    if (sound.paused) {// if sound is paused then play the sound and change the icon to pause
       sound.play();
        icon.src = "media/pause.svg";
    }
    else
    {// if icon is playing pause and then change the icon to play
        sound.pause();
        icon.src = "media/play.svg";
    }
}

//------------------------------- 
function getKnife() {//function to add knife and gun to session storage
  sessionStorage.knife = "knife";
}

function getGun() {
 sessionStorage.gun = "gun";
}

function gainMemory() {// function to gain memory to storage

    if (sessionStorage.memoryThomas == "thomas")//if storage is already thomas then display below
    {
      document.getElementById("thomas").innerHTML = "you have already gained this memory";
    }
    else{// if storage is not already thomas then display this
      document.getElementById("thomas").innerHTML = "You gained a memory of Thomas, you remember he taught you how to fight in close range combat. This memory could be useful later.";
    }
    sessionStorage.memoryThomas = "thomas";// set storage to thomas
}

function checkBody()
{
  if (sessionStorage.deadBody == "Jack")
    {
      document.getElementById("jack").innerHTML = "you have already check his body";
    }
    else{
      document.getElementById("jack").innerHTML = "You look in closer and notice that the person torn apart is Jack, another member of your group. He taught you how to use firearms, this memory could be useful later.";
    }
    sessionStorage.deadBody = "Jack";
}


function fightBeast(){// ending
  var x = document.getElementById("killBeast");
  if (sessionStorage.deadBody == "Jack" && sessionStorage.gun == "gun")// if user found memory and has gun display text below
  {
    x.innerHTML = "Luckily you checked the body of your fallen comrade and remember how to use the firearm, the creature jumps towards you but you are able to take a couple shots before it hit you. You slayed the beast and won, what challenges will you encounter next. To be continued... ";
  }else if (sessionStorage.deadBody != "Jack" && sessionStorage.gun == "gun")//  if user did not find the memory but has the gun display text below, etc...
  {
    x.innerHTML = "The creature jumps towards you and you scramble for the firearm, you pull the trigger yet nothing comes out. The creature overpowers you and takes you to the ground. You have nothing left to protect you and the creature tears you limb from limb.";
  }else if (sessionStorage.knife == "knife" && sessionStorage.memoryThomas != "thomas")
  {
    x.innerHTML = "The creature jumps towards you. The creature overpowers you and takes you to the ground. You realise you picked up the knife earlier however the creature knocks it out of your hand and tears you limb from limb.";
  }else if (sessionStorage.knife == "knife" && sessionStorage.memoryThomas == "thomas")
  {
    x.innerHTML = "The creature jumps towards you. The creature overpowers you and takes you to the ground. You realise you picked up the knife earlier, you manage to stab the creature injuring it and causing it to flee. To be continued...";
  }else if (sessionStorage.knife != "knife" && sessionStorage.memoryThomas == "thomas")
  {
    x.innerHTML = "The creature jumps towards you. The creature overpowers you and takes you to the ground. The creature tears you limb from limb.";
  }else if (sessionStorage.knife != "knife" && sessionStorage.memoryThomas != "thomas")
  {
    x.innerHTML = "The creature jumps towards you. The creature overpowers you and takes you to the ground. The creature tears you limb from limb.";
  }

  sessionStorage.clear();// clears the sessions variables

}

function myFunction(ending) { // function used to hide ending
  var x = document.getElementById(ending);
  if (x.style.display == "block") { 
      x.style.display = "none"; 
  } else { 
      x.style.display = "block"; 
  }
}
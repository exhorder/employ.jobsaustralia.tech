function toggleDisplay(){
    var element = document.getElementById(event.target.id + "-content");
    
    if(element.style.display == "none"){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
}

function toggleTeamDisplay(){
    document.getElementById("aaron-content").style.display = "none";
    document.getElementById("ozlem-content").style.display = "none";
    document.getElementById("kim-content").style.display = "none";
    document.getElementById("melissa-content").style.display = "none";
    document.getElementById("dennis-content").style.display = "none";
    document.getElementById(event.target.id + "-content").style.display = "block";
}

function randomiseTeam(){
    function shuffle(a){
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    var team = ["aaron,Aaron Horler", "ozlem,Ozlem Kirmizi", "kim,Kim Luu", "melissa,Melissa Nguyen", "dennis,Dennis Mihalache"];
    shuffle(team);

    var namesDiv = document.getElementById("names");

    var i;
    for(i = 0; i < team.length; i++){
        var button = document.createElement("button");
        button.id = team[i].split(",")[0];
        button.className = "btn btn-primary";
        button.style.marginTop = "5px";
        button.style.marginBottom = "5px";
        button.innerHTML = team[i].split(",")[1];
        namesDiv.appendChild(button);
        namesDiv.innerHTML += " ";
    }

    document.getElementById(team[0].split(",")[0] + "-content").style.display = "block";

    document.getElementById("aaron").addEventListener("click", toggleTeamDisplay);
    document.getElementById("ozlem").addEventListener("click", toggleTeamDisplay);
    document.getElementById("kim").addEventListener("click", toggleTeamDisplay);
    document.getElementById("melissa").addEventListener("click", toggleTeamDisplay);
    document.getElementById("dennis").addEventListener("click", toggleTeamDisplay);
}

if(document.getElementById("profile") !== null){
    document.getElementById("confirm-delete").addEventListener("click", toggleDisplay);
    document.getElementById("really-confirm-delete").addEventListener("click", toggleDisplay);
    document.getElementById("change-password").addEventListener("click", toggleDisplay);
}
else if(document.getElementById("team") !== null){
    document.addEventListener('DOMContentLoaded', randomiseTeam);
}
else if(document.getElementById("jobs") !== null){
    document.getElementById("delete-job").addEventListener("click", toggleDisplay);
}

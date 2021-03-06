/* Generic function to toggle the display of an element. */
function toggleDisplay(event){
    event.preventDefault();

    var element = document.getElementById(event.target.id + "-content");
    
    if(element.style.display == "block"){
        element.style.display = "none";
    }
    else{
        element.style.display = "block";
    }
}

/* Function to toggle the display of each team member on the about page. */
function toggleTeamDisplay(event){
    document.getElementById("redacted-content").style.display = "none";
    document.getElementById("aaron-content").style.display = "none";
    document.getElementById("ozlem-content").style.display = "none";
    document.getElementById("kim-content").style.display = "none";
    document.getElementById("melissa-content").style.display = "none";
    document.getElementById(event.target.id + "-content").style.display = "block";
}

/* Function to randomise the order of the team on the about page. */
function randomiseTeam(){
    /* https://stackoverflow.com/a/6274381 */
    function shuffle(a){
        var j, x, i;
        for(i = a.length; i; i--){
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    var team = ["aaron,Aaron Horler", "ozlem,Ozlem Kirmizi", "kim,Kim Luu", "melissa,Melissa Nguyen", "redacted,Redacted"];
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

    document.getElementById("ozlem").addEventListener("click", toggleTeamDisplay);
    document.getElementById("redacted").addEventListener("click", toggleTeamDisplay);
    document.getElementById("melissa").addEventListener("click", toggleTeamDisplay);
    document.getElementById("kim").addEventListener("click", toggleTeamDisplay);
    document.getElementById("aaron").addEventListener("click", toggleTeamDisplay);
}

/* Function to submit POST data to server with form in the background. */
function submitForm(event){
    event.preventDefault();
    document.getElementById(event.target.id + "-form").submit();
}

/* Function to verify the self-reported skills of a job seeker against their public GitHub repositories. */
function gitHubVerifySkills(){

    /* Get GitHub username from document. */
    var username =  document.getElementById("github").value;

    if(username !== "" && username !== null){

        /* Full resource link to GitHub API. */
        var resource = "https://api.github.com/users/" + username + "/repos";

        /* Get CSRF token from document. */
        var token = document.getElementsByName("csrf-token")[0].content;

        /* Get Job ID from document. */
        var jobID = document.getElementById("jobID").value;

        /* Array to be populated with programming skills. */
        var skills;

        /* Language count. */
        var count = 0;

        /* Function to print the count of matching repositories. */
        function printGitHubVerify(count){
            document.getElementById("github-report").innerHTML += "We found " + count + " repositories from this applicant that match the listed skill requirements for this job.";
        }

        /* Get programming skills for job. */
        $.getJSON("/api/job/" + jobID + "/token/" + token, function(job){
            skills = [job.java, job.python, job.c, job.csharp, job.cplus, job.php, job.html, job.css, job.javascript, job.sql, job.perl, job.bash, job.batch, job.r, job.go, job.ruby, job.asp, job.scala, job.actionscript, job.assembly, job.autohotkey, job.coffeescript, job.d, job.fsharp, job.haskell, job.matlab, job.objectivec, job.objectivecplus, job.pascal, job.powershell, job.rust, job.swift, job.typescript, job.vue, job.webassembly, job.apache, job.docker, job.nginx, job.dns];
        })
        .then(function(){

            /* Compare skills to list of repositories owned by the user. */
            $.getJSON(resource, function(data){
                var i;
                for(i = 0; i < data.length; i++){

                    // Ignore repositories with no recognised language, and ignore forks.
                    if(data[i].language !== null && data[i].fork == false){

                        if(skills[0] && data[i].language == "Java"){
                            count++;
                        }
                        else if(skills[1] && data[i].language == "Python"){
                            count++;
                        }
                        else if(skills[2] && data[i].language == "C"){
                            count++;
                        }
                        else if(skills[3] && data[i].language == "C#"){
                            count++;
                        }
                        else if(skills[4] && data[i].language == "C++"){
                            count++;
                        }
                        else if(skills[5] && data[i].language == "PHP"){
                            count++;
                        }
                        else if(skills[6] && data[i].language == "HTML"){
                            count++;
                        }
                        else if(skills[7] && data[i].language == "CSS"){
                            count++;
                        }
                        else if(skills[8] && data[i].language == "JavaScript"){
                            count++;
                        }
                        else if(skills[9] && data[i].language == "SQL"){
                            count++;
                        }
                        else if(skills[10] && data[i].language == "Perl"){
                            count++;
                        }
                        else if(skills[11] && data[i].language == "Shell"){
                            count++;
                        }
                        else if(skills[12] && data[i].language == "Batchfile"){
                            count++;
                        }
                        else if(skills[13] && data[i].language == "R"){
                            count++;
                        }
                        else if(skills[14] && data[i].language == "Go"){
                            count++;
                        }
                        else if(skills[15] && data[i].language == "Ruby"){
                            count++;
                        }
                        else if(skills[16] && data[i].language == "ASP"){
                            count++;
                        }
                        else if(skills[17] && data[i].language == "Scala"){
                            count++;
                        }
                        else if(skills[18] && data[i].language == "ActionScript"){
                            count++;
                        }
                        else if(skills[19] && data[i].language == "WebAssembly"){
                            count++;
                        }
                        else if(skills[20] && data[i].language == "AutoHotkey"){
                            count++;
                        }
                        else if(skills[21] && data[i].language == "CoffeeScript"){
                            count++;
                        }
                        else if(skills[22] && data[i].language == "D"){
                            count++;
                        }
                        else if(skills[23] && data[i].language == "F#"){
                            count++;
                        }
                        else if(skills[24] && data[i].language == "Haskell"){
                            count++;
                        }
                        else if(skills[25] && data[i].language == "Matlab"){
                            count++;
                        }
                        else if(skills[26] && data[i].language == "Objective-C"){
                            count++;
                        }
                        else if(skills[27] && data[i].language == "Objective-C++"){
                            count++;
                        }
                        else if(skills[28] && data[i].language == "Pascal"){
                            count++;
                        }
                        else if(skills[29] && data[i].language == "PowerShell"){
                            count++;
                        }
                        else if(skills[30] && data[i].language == "Rust"){
                            count++;
                        }
                        else if(skills[31] && data[i].language == "Swift"){
                            count++;
                        }
                        else if(skills[32] && data[i].language == "TypeScript"){
                            count++;
                        }
                        else if(skills[33] && data[i].language == "Vue"){
                            count++;
                        }
                        else if(skills[34] && data[i].language == "WebAssembly"){
                            count++;
                        }
                        else if(skills[35] && data[i].language == "ApacheConf"){
                            count++;
                        }
                        else if(skills[36] && data[i].language == "Dockerfile"){
                            count++;
                        }
                        else if(skills[37] && data[i].language == "Nginx"){
                            count++;
                        }
                        else if(skills[38] && data[i].language == "DNS Zone"){
                            count++;
                        }
                    }
                }

                printGitHubVerify(count);
            });
        });
    }
}

/* Salary logic. */
function applySalaryLogic(){
    var hours = document.getElementById("hours");
    var rate = document.getElementById("rate");
    var salary = document.getElementById("salary");

    if(hours.value == "parttime" && rate.value == "hourly"){
        salary.min = "18";
        salary.max = "1000";
    }
    else if(hours.value == "parttime" && rate.value == "weekly"){
        salary.min = "200";
        salary.max = "2000";
    }
    else if(hours.value == "parttime" && rate.value == "fortnightly"){
        salary.min = "500";
        salary.max = "3000";
    }
    else if(hours.value == "parttime" && rate.value == "monthly"){
        salary.min = "1000";
        salary.max = "4000";
    }
    else if(hours.value == "parttime" && rate.value == "annually"){
        salary.min = "10000";
        salary.max = "40000";
    }
    else if(hours.value == "fulltime" && rate.value == "hourly"){
        salary.min = "24";
        salary.max = "1000";
    }
    else if(hours.value == "fulltime" && rate.value == "weekly"){
        salary.min = "1000";
        salary.max = "2000";
    }
    else if(hours.value == "fulltime" && rate.value == "fortnightly"){
        salary.min = "2000";
        salary.max = "4000";
    }
    else if(hours.value == "fulltime" && rate.value == "monthly"){
        salary.min = "3000";
        salary.max = "5000";
    }
    else if(hours.value == "fulltime" && rate.value == "annually"){
        salary.min = "40000";
        salary.max = "200000";
    }
    else if(rate.value == "daily"){
        salary.min = "50";
        salary.max = "2000";
    }
}

/* Importance logic. */
function applyImportanceLoic(){
    if(this.id == "mostimportant"){
        document.getElementById("leastimportant").children[1].disabled = null;
        document.getElementById("leastimportant").children[2].disabled = null;
        document.getElementById("leastimportant").children[3].disabled = null;

        if(this.value == "skills"){
            document.getElementById("leastimportant").children[1].disabled = "disabled";
        }
        else if(this.value == "education"){
            document.getElementById("leastimportant").children[2].disabled = "disabled";
        }
        else if(this.value == "experience"){
            document.getElementById("leastimportant").children[3].disabled = "disabled";
        }
    }
    else if(this.id == "leastimportant"){
        document.getElementById("mostimportant").children[1].disabled = null;
        document.getElementById("mostimportant").children[2].disabled = null;
        document.getElementById("mostimportant").children[3].disabled = null;

        if(this.value == "skills"){
            document.getElementById("mostimportant").children[1].disabled = "disabled";
        }
        else if(this.value == "education"){
            document.getElementById("mostimportant").children[2].disabled = "disabled";
        }
        else if(this.value == "experience"){
            document.getElementById("mostimportant").children[3].disabled = "disabled";
        }
    }
}

/* Function to (roughly) get the users location by their IP address using an external resource. */
function getLocationByIP(){
    /* Respect do-not-track setting. */
    if(navigator.doNotTrack !== "1"){

        /* This resource (freegeoip.net) may be blocked by some ad blocking and privacy software. In such a case, this will silently fail. */
        var resource = "https://freegeoip.net/json/";

        $.getJSON(resource, function(location){
            /* Only autofill if country is detected as Australia. */
            if(location.country_code == "AU"){
                document.getElementById("state").value = location.region_code.toLowerCase();
                document.getElementById("city").value = location.city;
            }
        });
    }
}

/* Moo. */
function moo(){
    if(this.checked){
        var audio = new Audio('/audio/moo.opus');
        audio.play();
    }
}

/* Add EventListeners depending on current page loaded. */
if(document.getElementById("profile") !== null){
    document.getElementById("confirm-delete").addEventListener("click", toggleDisplay);
    document.getElementById("really-confirm-delete").addEventListener("click", toggleDisplay);
    document.getElementById("change-password").addEventListener("click", toggleDisplay);
    document.getElementById("delete").addEventListener("click", submitForm);
}
else if(document.getElementById("team") !== null){
    document.addEventListener('DOMContentLoaded', randomiseTeam);
}
else if(document.getElementById("delete-job") !== null){
    document.getElementById("delete-job-button").addEventListener("click", toggleDisplay);
    document.getElementById("delete-job-confirm").addEventListener("click", submitForm);
}
else if(document.getElementById("post") !== null){
    document.getElementById("hours").addEventListener("change", applySalaryLogic);
    document.getElementById("rate").addEventListener("change", applySalaryLogic);
    document.getElementById("mostimportant").addEventListener("change", applyImportanceLoic);
    document.getElementById("leastimportant").addEventListener("change", applyImportanceLoic);
    document.getElementById("cow").addEventListener("change", moo);
}
else if(document.getElementById("edit-job") !== null){
    document.getElementById("hours").addEventListener("change", applySalaryLogic);
    document.getElementById("rate").addEventListener("change", applySalaryLogic);
    document.getElementById("mostimportant").addEventListener("change", applyImportanceLoic);
    document.getElementById("leastimportant").addEventListener("change", applyImportanceLoic);
    document.getElementById("cow").addEventListener("change", moo);
}
else if(document.getElementById("application") !== null){
    document.addEventListener('DOMContentLoaded', gitHubVerifySkills);
    document.getElementById("reject").addEventListener("click", submitForm);
    document.getElementById("engage").addEventListener("click", submitForm);
}
else if(document.getElementById("register") !== null){
    document.addEventListener('DOMContentLoaded', getLocationByIP);
}

/* Add EventListener to logout link. */
if(document.getElementById("logout") !== null){
    document.getElementById("logout").addEventListener("click", submitForm);
}

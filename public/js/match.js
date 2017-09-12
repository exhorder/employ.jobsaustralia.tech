/* Function to print applicant to panel in view. */
function printApplicant(name, message, percentageMatch){
    var display = document.getElementById("applicants");

    var panel = document.createElement("div");
    panel.className = "panel panel-default";

    var heading = document.createElement("div");
    heading.className = "panel-heading";
    heading.innerHTML += name + " &bull; ";

    var match = document.createElement("strong");
    match.innerHTML = percentageMatch + "&#37;";

    var body = document.createElement("div");
    body.className = "panel-body";

    var p1 = document.createElement("p");
    p1.innerHTML = message;

    var hr1 = document.createElement("hr");

    // Additional attributes go here.

    var hr2 = document.createElement("hr");

    var p6 = document.createElement("p");

    var apply = document.createElement("a");
    apply.className = "btn btn-primary";
    //apply.href = "/job/" + id;
    apply.innerHTML = "View";

    panel.appendChild(heading);
    panel.appendChild(body);
    heading.append(match);
    body.append(p1);
    body.append(hr1);
    body.append(hr2);
    body.append(p6);
    p6.append(apply);
    display.appendChild(panel);

    document.getElementById("loading").style.display = "none";
}

/* Function to perform matchmaking. */
function match(){
    /* Get ID of job from document. */
    var jobID = document.getElementById("jobID").value;
	
	/* Input array (needs to be grabbed from job). */
	var input;
	
	/* Array of positions of interest. */
	var bitCheck = [];
	
	/* Array of applicant indexes. */
	var appIndex = [];
	
	/* Array of arrays to compare. */
	var appMatch = [];
	
	/* Array of percentage matches. */
	var percentageMatch = [];
	
    /* Get job. */
    $.getJSON("/api/job/" + jobID, function(job){
        input = [job.java, job.python, job.c, job.csharp, job.cplus, job.php, job.html, job.css, job.javascript, job.sql, job.unix, job.winserver, job.windesktop, job.linuxdesktop, job.macosdesktop, job.pearl, job.bash, job.batch, job.cisco, job.office, job.r, job.go, job.ruby, job.asp, job.scala];
		
		/* Determine which bits are non-zero and stores into bitcheck array. */
		var i;
		for(var i = 0; i < input.length; i++)
		{
			if(input[i] == 1)
			{
				bitCheck.push(i);
			}
		}
    })
    .then(function(){

        /* Get applicants to job. */
        $.getJSON("/api/applicants/job/" + jobID, function(applicants){
            /* Populate values into appIndex, appMatch and percentageMatch arrays. */
			var i;
            for(i = 0; i < applicants.length; i++){
				appMatch[i] = [applicants[i].java, applicants[i].python, applicants[i].c, applicants[i].csharp, applicants[i].cplus, applicants[i].php, applicants[i].html, applicants[i].css, applicants[i].javascript, applicants[i].sql, applicants[i].unix, applicants[i].winserver, applicants[i].windesktop, applicants[i].linuxdesktop, applicants[i].macosdesktop, applicants[i].pearl, applicants[i].bash, applicants[i].batch, applicants[i].cisco, applicants[i].office, applicants[i].r, applicants[i].go, applicants[i].ruby, applicants[i].asp, applicants[i].scala];
				
				/* Match counter. */
				var count = 0;
				
				/* Checks only the values in the positions stored in bitCheck.
				Increases count if non-zero (i.e. there is a match). */
				var j; 
				for(j = 0; j < bitCheck.length; j++)
				{
					var position = bitCheck[j];
					
					if(appMatch[i][position] == 1)
					{
						count++;
					}
				}
				
				/* Calculate percentage match. */
				percentageMatch[i] = (count / bitCheck.length) * 100;
            }
			
			/* Bubble sort. */
            var swapped;
			
            do{
                swapped = false;

                var i;
                for(i = 0; i < appIndex.length-1; i++){
                    if(percentageMatch[i] < percentageMatch[i+1]){
                        var tempPer = percentageMatch[i];
                        percentageMatch[i] = percentageMatch[i+1];
                        percentageMatch[i+1] = tempPer;

                        var tempId = appIndex[i];
                        appIndex[i] = appIndex[i+1];
                        appIndex[i+1] = tempId;

                        var tempApp = appMatch[i];
                        appMatch[i] = appMatch[i+1];
                        appMatch[i+1] = tempApp;

                        swapped = true;
                    }
                }
            }
            while(swapped);
        })
        .then(function(){
            // The API URL to get a job seeker by ID is /api/jobseeker/{id}. I made an API for experience, but I'm not sure if it's needed considering experience will be returned using this API.
            // Good luck.
        });
    });

    /* Dummy call to function to print dummy applicant. */
    printApplicant("Bob", "Hey, I'm Bob. You should hire me.", 98);
}

/* Initialisation function to test for JavaScript, display loading animation, and call match function. */
function init(){
    document.getElementById("applicants").innerHTML = "";

    document.getElementById("noscript").style.display = "none";
    document.getElementById("noapplicants").style.display = "none";
    document.getElementById("error").style.display = "none";
    document.getElementById("loading").style.display = "block";

    match();
}

document.addEventListener('DOMContentLoaded', init);
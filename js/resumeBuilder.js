/*
 This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Shaowei JS");

// var awsomeToughts = "I am Shaowei and I am AWESOME!";
//console.log(awsomeToughts)

// var funThoughts = awsomeToughts.replace("AWESOME","FUN");
// $("#main").append(funThoughts)

// var formattedName = HTMLheaderName.replace("%data%","Shaowei")
// var formattedRole = HTMLheaderRole.replace("%data%","web developer")

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var audacity = "audacity";
// var udacity = audacity.charAt(1).toUpperCase()+audacity.slice(2);
// console.log(udacity);

// var bio = {"name":"Shaowei","role":"learner","contact_info":"5083088487","picture_URL":"https://www.linkedin.com/in/shaowei-gong-6a3603114?trk=hp-identity-photo",
//	"welcome_message":"hello","skill":"hahahaha"}

// $("#main").append(bio["name"]);

// var work = {};
// work.current_job = "student";
// work.employer = "wpi";
// work.year = "23";
// work.city= "Worcester"

// var education = {"school":{"city":"Worcester","major":"Data Science","minor":"English","graduation_year":"2017"},{"online_course":"Udacity"}
// }}};
// education["lastSchool"]="wpi";
// education["year"]="2015";
// education["city"]="MASS"

// $("#main").append(work.current_job);
// $("#main").append(education["city"]);

var work={
	"jobs": [{
		"employer": "China Household Finance Survey",
		"title":"Data Analyst Intern",
		"location": "Chengdu",
		"dates": "March 2015- June 2015",
		"description": "• Organize data, input data into Python Dataframe, and clean missing data, transform data type into type that is desired.<br>• Visualize information of family’s net assets distribution into a heatmap with Python Basemap and matplotlib."
	}
	]
	
}
work.display=function(){
	if (work["jobs"].length>0){

		for (job in work['jobs']){
			$("#workExperience").append(HTMLworkStart);
			var employ= HTMLworkEmployer.replace("%data%",work['jobs'][job]["employer"]);
			var title= HTMLworkTitle.replace("%data%",work['jobs'][job]['title']);
			var location= HTMLworkLocation.replace("%data%",work['jobs'][job]['location'])
			conca=employ+title;
			var workdate = HTMLworkDates.replace('%data%',work['jobs'][job]["dates"]);
			var desc= HTMLworkDescription.replace("%data%",work['jobs'][job]["description"]);
			$(".work-entry:last").append(conca);
			$(".work-entry:last").append(workdate);
			$(".work-entry:last").append(location);
			$(".work-entry:last").append(desc);
		};
	}
}

var project= {
	"projects": [{
		"title": "Airline Reservation System,WPI",
		"dates": "January 2016 – present",
		"description": "• Retrieve flights, flight, airports, airport, tickets data from RESTful API as XML formats and parse them.<br>• Connect flights as air lines that meet the requirements of users with backtrackng algorithm.<br>Technologies Used: Java EE, RESTful API, DOM, XML, Servlet, Eclipse, JQuery, HTML,CSS, Bootstrap, MVC",
		"images": ["C:/Users/Shaowei/Desktop/practice-resume/images/map.jpg"]
	}, {
		"title": "Android Recipe Application,WPI",
		"dates": "January 2016 – present",
		"description": "• Design database schema, retrieve data from RESTful API, convert semi-structure data into SQLite relations.<br>• Build queries that correspond to operations of users, retrieve and display data on phone screen. <br>Technologies Used: Java, SQLite, Android Studio, JSON, MVC",
		"images": ["C:/Users/Shaowei/Desktop/practice-resume/images/map.jpg"]
	},
	{
		"title": "Analyze Playing Style of NBA Superstars, WPI",
		"dates": "January 2016-February 2016",
		"description": "• Retrieve data from RESTful API as JSON format, parse data to Pandas dataframe. <br>• Visualize shooting choices into court heatmap marked by shooting distribution with seaborn, matplotlib.<br>• Reduce the dimensions of data with PCA and cluster players with K-means Clustering and Hierarchical Clustering. <br>Technologies Used: RESRful API, JSON, Python, R, PCA K-means Clustering, Hierarchical Clustering",
		"images": ["C:/Users/Shaowei/Desktop/practice-resume/images/map.jpg"]
	},
	{
		"title": "Online Bookstore,WPI",
		"dates": "October 2015-December 2015",
		"description": "• Design a MySQL database schema and webpage implemented by HTML CSS, JavaScript.<br>• Implement search, sort, buy functionality with Django.<br>Technologies Used: Django, MySQL, Pycharm, JavaScript, HTML,CSS, Bootstrap, MVC",
		"images": ["C:/Users/Shaowei/Desktop/practice-resume/images/map.jpg"]
	}
	]

}
project.display=
function () {
	if (project['projects'].length > 0) {
		for (pro in project['projects']) {
			$("#projects").append(HTMLprojectStart);
			var title = HTMLprojectTitle.replace('%data%', project['projects'][pro]['title']);
			var date = HTMLprojectDates.replace('%data%', project['projects'][pro]['dates']);
			var desc = HTMLprojectDescription.replace('%data%', project['projects'][pro]['description']);
			$(".project-entry:last").append(title);
			$(".project-entry:last").append(date);
			$(".project-entry:last").append(desc);

			for (img in project['projects'][pro]['images']) {
				var img = HTMLprojectImage.replace('%data%', project['projects'][pro]['images'][img]);
				$(".project-entry:last").append(img);
			}


		}
	}

}

var bio={
	"name": "Shaowei Gong",
	"role": "Data Science Graduate Student in WPI",
	"welcomeMessage": "Let me introduce myself",
	"contacts": {
		"mobile": "5083088487",
		"email": "sgong@wpi.edu",
		"github": "codescracker",
		"twitter": "@codescracker",
		"location": "Worcester"
	},
	"skills": ["Java", "JavaScript",'Python','R','SQLite','MySQL','HTML','CSS','Django','AndroidStudio','Pycharm','Eclipse','API','Git','solid data structure and algorithm foundation'],
	"biopic": "C:/Users/Shaowei/Desktop/practice-resume/images/Shaowei.jpg"

}

bio.display= function(){
	

	if (bio["role"].length>0){
		$("#header").prepend(HTMLheaderRole.replace('%data%',bio['role']));

	};
    
    if (bio["name"].length>0){
		$("#header").prepend(HTMLheaderName.replace('%data%',bio['name']));

	};
     
	if (bio["contacts"]){
		$("#topContacts").append(HTMLmobile.replace('%data%',bio['contacts']['mobile']));
		$("#topContacts").append(HTMLemail.replace('%data%',bio['contacts']['email']));
		$("#topContacts").append(HTMLgithub.replace('%data%',bio['contacts']['github']));
		$("#topContacts").append(HTMLtwitter.replace('%data%',bio['contacts']['twitter']));
		$("#topContacts").append(HTMLlocation.replace('%data%',bio['contacts']['location']));

	};


	$("#header").append(HTMLbioPic.replace('%data%',bio['biopic']));
	$("#header").append(HTMLwelcomeMsg.replace('%data%',bio['welcomeMessage']));

	if (bio["skills"].length>0){
		$("#header").append(HTMLskillsStart);

		for (var i =0; i<bio["skills"].length; i++){
			$("#skills").append(HTMLskills.replace('%data%',bio['skills'][i]))}
		}

	}

	var education={
		"schools": [
		{
			"name": "Southwestern University of Finance and Economics",
			"location": "Chengdu",
			"degree": "Balchor",
			"majors": [
			"Statistics"
			],
			"dates": 2015,
			"website": "http://e.swufe.edu.cn/"
		},
		{
			"name": "Worcester Polytechnic Institute",
			"location": "Worcester",
			"degree": "Master",
			"majors": ["Data Science"],
			"dates": 2017,
			"website": "https://www.wpi.edu"
		}
		],
		"onlineCourse": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2016,
			'url':'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			"title": "Databases",
			"school": "Stanford Online",
			"dates": 2015,
			'url':'https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about'
		}
		],
		

	}

	education.display= function(){

		if (education['schools'].length>0){
			for (school in education['schools']){
				$("#education").append(HTMLschoolStart);
				var name = HTMLschoolName.replace('%data%',education['schools'][school]['name']);
				var dates = HTMLschoolDates.replace('%data%',education['schools'][school]['dates']);
				var location = HTMLschoolLocation.replace('%data%',education['schools'][school]['location']);

				$(".education-entry:last").append(name);
				$(".education-entry:last").append(dates);
				$(".education-entry:last").append(location);


				for (maj in education['schools'][school]['majors']){
					var major = HTMLschoolMajor.replace('%data%',education['schools'][school]['majors'][maj]);
					$(".education-entry:last").append(major);
				}

			}

		}

		if (education['onlineCourse'].length>0){
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart)
			for (online_course in education['onlineCourse']){
				var title = HTMLonlineTitle.replace('%data%',education['onlineCourse'][online_course]['title']);
				var school = HTMLonlineSchool.replace('%data%',education['onlineCourse'][online_course]['school']);
				var date = HTMLonlineDates.replace('%data%',education['onlineCourse'][online_course]['dates']);
				var url = HTMLonlineURL.replace('%data%',education['onlineCourse'][online_course]['url']);

				$(".education-entry:last").append(title);
				$(".education-entry:last").append(date);
				$(".education-entry:last").append(location);
				$(".education-entry:last").append(url);

			}
		}
	}


	work.display();
	project.display();
	bio.display();
	education.display();

	$("#mapDiv").append(googleMap);

	

// function displayskill(){
// 	if (bio["skills"].length>0){
// 		$("#header").append(HTMLskillsStart);

// 		for (var i =0; i<bio["skills"].length; i++){
// 			$("#skills").append(HTMLskills.replace('%data%',bio['skills'][i]))}
// 		}
// 	}


// 	function displayjob(){
// 		if (work["jobs"].length>0){

// 			for (job in work['jobs']){
// 				$("#workExperience").append(HTMLworkStart);
// 				var employ= HTMLworkEmployer.replace("%data%",work['jobs'][job]["employer"]);
// 				var title= HTMLworkTitle.replace("%data%",work['jobs'][job]['title']);
// 				conca=employ+title;
// 				var workdate = HTMLworkDates.replace('%data%',work['jobs'][job]["dates"]);
// 				var desc= HTMLworkDescription.replace("%data%",work['jobs'][job]["description"]);
// 				$(".work-entry:last").append(conca);
// 				$(".work-entry:last").append(workdate);
// 				$(".work-entry:last").append(desc);
// 			};
// 		}
// 	}

// 	displayskill();
// 	displayjob();

// 	$("#main").append(internationalizeButton);

// 	function inName(name){
// 		var listName = name.trim().split(" ");
// 		var firstName = listName[0];
// 		firstName = firstName[0].toUpperCase()+firstName.slice(1);
// 		var lastName = listName[1];
// 		lastName = lastName.toUpperCase();
// 		var res = firstName.concat(' ',lastName);
// 		return res
// 	}


// 	project.display=function(){
// 		if (project['projects'].length>0){
// 			for (pro in project['projects']){
// 				$("#projects").append(HTMLprojectStart);
// 				var title = HTMLprojectTitle.replace('%data%',project['projects'][pro]['title']);
// 				var date = HTMLprojectDates.replace('%data%',project['projects'][pro]['dates']);
// 				var desc = HTMLprojectDescription.replace('%data%',project['projects'][pro]['description']);
// 				var img = HTMLprojectImage.replace('%data%',project['projects'][pro]['images']);
// 				$(".project-entry:last").append(title);
// 				$(".project-entry:last").append(date);
// 				$(".project-entry:last").append(desc);
// 				$(".project-entry:last").append(img);
// 			}
// 		}

// 	}

// 	project.display();

// 	$("#mapDiv").append(googleMap);
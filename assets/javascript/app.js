$(document).ready(function () {
    var right = 0;
    var wrong = 0;
    var timeout = 0;
    var questionClock = 3;
    var questionNum = 0;
    var intermissionClock= 5;
    var intermission = false;
    var playing = false;

    var question1 = {
        question: "How many teams are in the NFL",
        answer1: "28",
        answer2: "29",
        answer3: "34",
        answer4: "32",
        answer: "32"
    }

    var question2 = {
        question: "Which one of these teams have won a superbowl?",
        answer1: "Los Angeles Chargers",
        answer2: "Cleveland Browns",
        answer3: "Detroit Lions",
        answer4: "Tampa Bay Buccaneers",
        answer: "Tampa Bay Buccaneers"
    }
    var question3 = {
        question: "This QB was a triple-threat player",
        answer1: "Johnny Manziel",
        answer2: "Steve Young",
        answer3: "Sammy Baugh",
        answer4: "John Elway",
        answer: "Sammy Baugh"
    }
    var question4 = {
        question: "Who was the first player to rush for 2000 yards in an NFL season?",
        answer1: "Ladanian Tomlinson",
        answer2: "O.J Simpson",
        answer3: "Adrian Peterson",
        answer4: "Eric Dickerson",
        answer: "O.J Simpson"
    }
    var question5 = {
        question: "Which one of these players dont have exactly 2 Superbowl MVP's",
        answer1: "Terry Bradshaw",
        answer2: "Bart Starr",
        answer3: "Eli Manning",
        answer4: "Joe Montana",
        answer: "Joe Montana"
    }
    var question6 = {
        question: "This Head Coach holds the record for most wins in a career",
        answer1: "Don Shula",
        answer2: "Vince Lombardi",
        answer3: "Bill Bilichick",
        answer4: "John Madden",
        answer: "Don Shula"
    }
    var question7 = {
        question: "How many years must a player be retired before being eligible for the Hall of Fame?",
        answer1: "4",
        answer2: "5",
        answer3: "6",
        answer4: "8",
        answer: "4",
    }
    var questionArray = [question1, question2, question3, question4, question5, question6, question7]

    function initialize() {
        $("#question").html(questionArray[questionNum].question);
        $("#answer1").html(questionArray[questionNum].answer1)
        $("#answer2").html(questionArray[questionNum].answer2)
        $("#answer3").html(questionArray[questionNum].answer3)
        $("#answer4").html(questionArray[questionNum].answer4)
    }

    function intermissionTimer() {
        var intermissionTimeout = setInterval(function () {
            $("#timer").html("Time Remaining: " + intermissionClock);
            if (intermissionClock === 0) {
                clearInterval(intermissionTimeout)
                questionNum++;
                initialize();
                intermissionClock = 5;
                questionClock = 10;
                intermission = false;
            }
            intermissionClock--;
        }, 1000)
    }

    function guessTimer() {
        var guessTimeout = setInterval(function () {
            $("#timer").html("Time Remaining: " + questionClock);
            if (questionClock === 0) {
                clearInterval(guessTimeout);
                timeout++;
                intermission = true;
                $("#answer1").html("")
                $("#answer2").html("")
                $("#answer3").html("")
                $("#answer4").html("")
            }
            questionClock--;
        }, 1000)
    }

    $("#play").on("click", function () {
        playing = true;
        initialize();
        for(i = 0; i < questionArray.length;i++)
        {
            setTimeout(guessTimer(), 10000).then(intermissionTimer())
        }
    })

})

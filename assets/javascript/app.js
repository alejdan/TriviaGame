$(document).ready(function () {

    $("#start").on("click", function () {

        $("#lobby").hide();

        $("#quiz").show();

        var count = 81;

        var intervalId;

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {

            //  Decrease number by one.
            count--;

            //  Show the number in the #time-left tag.
            $("#time-left").text(count);


            //  Once number hits zero...
            if (count === 0) {

                $("#quiz").hide();

                $("#end").show();

                function checkAnswer(question) {
                    if ($(question).val() === "correct") {
                        correctAnswers++;
                    } else if ($(question).val() === "wrong") {
                        incorrectAnswers++;
                    } else {
                        unanswered++;
                    }
                }

                checkAnswer(".question1:checked");
                checkAnswer(".question2:checked");
                checkAnswer(".question3:checked");
                checkAnswer(".question4:checked");
                checkAnswer(".question5:checked");
                checkAnswer(".question6:checked");
                checkAnswer(".question7:checked");

                $("#correctAnswers").text(correctAnswers);
                $("#incorrectAnswers").text(incorrectAnswers);
                $("#unanswered").text(unanswered);
                
            }

        }
        run();

    });

    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;

    $("#finish").on("click", function finish_quiz() {

        $("#quiz").hide();

        $("#end").show();
        
        function checkAnswer (question) {
            if ($(question).val() === "correct") {
                correctAnswers++;
            } else if ($(question).val() === "wrong") {
                incorrectAnswers++;
            } else {
                unanswered++;
            }
        }
        
        checkAnswer(".question1:checked");
        checkAnswer(".question2:checked");
        checkAnswer(".question3:checked");
        checkAnswer(".question4:checked");
        checkAnswer(".question5:checked");
        checkAnswer(".question6:checked");
        checkAnswer(".question7:checked");

        $("#correctAnswers").text(correctAnswers);
        $("#incorrectAnswers").text(incorrectAnswers);
        $("#unanswered").text(unanswered);
        
    });

    
});
$("#l-one").click(function () {
    $("#one").show();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    $("#six").hide();
    $("#seven").hide();
    $("#eight").hide();

});

$("#l-two").click(function () {

    $("#two").show();
    $("#one").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    $("#six").hide();
    $("#seven").hide();
    $("#eight").hide();


});

$("#l-three").click(function () {
    $("#three").show();
    $("#one").hide();
    $("#two").hide();
    $("#four").hide();
    $("#five").hide();
    $("#six").hide();
    $("#seven").hide();
    $("#eight").hide();


});

$("#l-four").click(function () {
    $("#four").show();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#five").hide();
    $("#six").hide();
    $("#seven").hide();
    $("#eight").hide();
});

$("#l-five").click(function () {
    $("#five").show();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#six").hide();
    $("#seven").hide();
    $("#eight").hide();
});

$("#l-six").click(function () {
    $("#six").show();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    $("#seven").hide();
    $("#eight").hide();
});

$("#l-seven").click(function () {
    $("#seven").show();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    $("#six").hide();
    $("#eight").hide();

});

$("#l-eight").click(function () {
    $("#seven").hide();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    $("#six").hide();
    $("#eight").show();

});

//*******************************************************************************

$("#firstOdd").click(function() {
    $("#firstOddPdfs").show();
    $("#firstEvenPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").hide();
    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").hide();
    $("#fourthOddPdfs").hide();
    $("#fourthEvenPdfs").hide();

});

$("#firstEven").click(function() {

    $("#firstEvenPdfs").show();
    $("#firstOddPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").hide();
    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").hide();
    $("#fouthOddPdfs").hide();
    $("#fourthEvenPdfs").hide();
});



$("#secondOdd").click(function() {

    $("#secondOddPdfs").show();

    $("#firstEvenPdfs").hide();
    $("#firstOddPdfs").hide();

    $("#secondEvenPdfs").hide();

    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").hide();
    $("#fouthOddPdfs").hide();

    $("#fourthEvenPdfs").hide();
});


$("#secondEven").click(function() {

    $("#firstOddPdfs").hide();
    $("#firstEvenPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").show();

    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").hide();
    $("#fourthOddPdfs").hide();
    $("#fourthEvenPdfs").hide();
});


$("#thirdOdd").click(function() {

    $("#firstOddPdfs").hide();
    $("#firstEvenPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").hide();

    $("#thirdOddPdfs").show();
    $("#thirdEvenPdfs").hide();
    $("#fouthOddPdfs").hide();
    $("#fourthEvenPdfs").hide();
});


$("#thirdEven").click(function() {

    $("#firstOddPdfs").hide();
    $("#firstEvenPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").hide();

    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").show();
    $("#fouthOddPdfs").hide();
    $("#fourthEvenPdfs").hide();
});

$("#fourthOdd").click(function() {

    $("#firstOddPdfs").hide();
    $("#firstEvenPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").hide();

    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").hide();
    $("#fourthOddPdfs").show();
    $("#fourthEvenPdfs").hide();
});


$("#fourthEven").click(function() {

    $("#firstOddPdfs").hide();
    $("#firstEvenPdfs").hide();
    $("#secondOddPdfs").hide();
    $("#secondEvenPdfs").hide();

    $("#thirdOddPdfs").hide();
    $("#thirdEvenPdfs").hide();
    $("#fourthOddPdfs").hide();
    $("#fourthEvenPdfs").show();
});

//***********************************menu bar***********************************************

$("#mHome").click(function() {
    $("#home").show();
    
    $("#CourseInformation").hide();
    $("#CourseTeacherInformation").hide();
    $("#SemesterFinalQuestions").hide();
    $("#BookReference").hide();
});


$("#mCourseInformation").click(function() {  
    $("#home").hide();
     $("#CourseInformation").show();
    $("#CourseTeacherInformation").hide();
    $("#SemesterFinalQuestions").hide();
    $("#BookReference").hide();
});


$("#mCourseTeacherInformation").click(function() {

     $("#home").hide();
     $("#CourseInformation").hide();
    $("#CourseTeacherInformation").show();
    $("#SemesterFinalQuestions").hide();
    $("#BookReference").hide();
});

$("#mSemesterFinalQuestions").click(function() {

     $("#home").hide();
     $("#CourseInformation").hide();
    $("#CourseTeacherInformation").hide();
    $("#SemesterFinalQuestions").show();
    $("#BookReference").hide();
});


$("#mBookReference").click(function() {

  $("#home").hide();
     $("#CourseInformation").hide();
    $("#CourseTeacherInformation").hide();
    $("#SemesterFinalQuestions").hide();
    $("#BookReference").show();
});

//**************************************************

$("#bar").click(function(){
   $("#toggle").slideToggle(); 
});

$(".subMenuBox").click(function(){
   $(".submenu").toggle();
   $(".submenu").animate({right: "18px"
   },"slow");
    
});



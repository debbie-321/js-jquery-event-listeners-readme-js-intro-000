//define functions here

$(document).ready(function(){

// call functions here
function getIt (){
  //The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".

  $("p").click(function(){
  alert("Hey!");

  });
}

function frameIt (){
  //The function should bind the load event that adds the class tasty to the image to add a red frame to the image.


  $('img').on('load', function(){
    $('img').addClass("tasty");
  });



}

function pressIt (){

  if (key.which === 71){
    alert('G was pressed');
  }
});

}

function submitIt (){



  $("form").on("submit", function() {

    alert('Your form is going to be submitted now.');



});

});

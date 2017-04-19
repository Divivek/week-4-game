  var lowRange = 19;
  var hiRange = 120;
  var crystalimages =  ["./assests/images/crystal1.jpg", "./assests/images/crystal2.jpg","./assests/images/crystal3.jpg","./assests/images/crystal4.jpg"];
  var targetNumber;
  var counter ;
  var win = 0;
  var lost = 0;
  var crystalNumbersLowRange = 1;
  var crystalNumbersHiRange = 12;
  var numberOptions = [0, 0, 0, 0];

  for (var i = 0; i < numberOptions.length; i++) {
    
    // assigning var to image
    var  imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", crystalimages[i]);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
  }

  init();

  function init() {

    //$("#crystals").empty();
    $("#winNumber").text(win);
    $("#lostNumber").text(lost);
    targetNumber = Math.floor(Math.random() * (hiRange-lowRange))+lowRange;
    $("#number-to-guess").text(targetNumber);
    counter = 0;
    $("#scoreCard").text(counter);
  // Creating loop for  multiple crystals each with their own unique number value.
  for (var i = 0; i < numberOptions.length; i++) {

      numberOptions[i] = Math.floor(Math.random() * (crystalNumbersHiRange-crystalNumbersLowRange))+crystalNumbersLowRange;
      // assigning a new number to the image
      debugger
      //$(".crystal-image")[i].attributes[2].value = numberOptions[i];
      $(".crystal-image")[i].attributes["data-crystalvalue"].value = numberOptions[i];
    }// end of loop
  }  // End of init function
     //  click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    //  game win-lose logic applies
    $("#scoreCard").text(counter);

    if (counter === targetNumber) {
     
      win++;
    
      init();
    }

    else if (counter >= targetNumber) {
  
      lost++;
     
      init();
    }

  });

   $("#reset-btn").on("click",function(){
            
    init(); 
  });

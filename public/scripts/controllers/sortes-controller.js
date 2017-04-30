import { templateLoader } from 'templateLoader';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('sortes')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);

            //submit question button 
          var questionBtn = $(".submitBtn");

            //random number button
          var $randomNumBtn = $(".randomNumBtn");

            //question input field
          var inputField = $("#EnterQuestion");

            //input question string
          var text = document.getElementById("text").innerHTML;

            //random number button again for visibility purposes
          var generateNumBtn = document.getElementsByClassName("randomNumBtn")[0];

            //random number result paragraph
          var resultP = document.getElementById("resultNumP");

            //prophecy paragraph
          var prophecyP = document.getElementById("prophecyP");

            //source Iliad text split
          var textArr = text.split(/\r\n|\r|\n/g);

            //click submit question button, set and display question text and display generate random number button;
          questionBtn.click(function submitQuestion() {

              $("#questionP").text(inputField.val());

              generateNumBtn.style.display = "block";
          });

            //click generate random number button
          $randomNumBtn.click(function generateRandomNum() {

              //set text for the time before the result number is shown and display it
              $("#resultNumP").text("The old lady stirs the cauldron...");

              resultP.style.display = "block";
              //

              //hide prophecy text if it is shown and set it to something before the prophecy is shown
              prophecyP.style.display = "none";

              $("#prophecyP").text("The Oracle gazes into the mists...");
              //

              //generate random number in range of number of verses in Iliad
              var randomNum = Math.floor((Math.random() * 19000) + 1);

              //get verse using the number and trim spaces
              var prophecy = textArr[randomNum].trim();

              //add+trim the next verse if the matching verse is not the last
              if (randomNum !== 19000) {
                  prophecy += " / " + textArr[randomNum + 1].trim()
              }

              //remove numbers/spaces/brackets from prophecy
              prophecy = prophecy.replace(/[0-9]/g, '');

              prophecy = prophecy.replace(/\s{2,}/g, '');

              prophecy = prophecy.replace(/[{()}]/g, '');

              prophecy = prophecy.replace(/[[\]]/g, '');
              //

              //conduct divination with timeouts
              //display matching number
              setTimeout(function () {
                  $("#resultNumP").text(`Your number of verse is: ${randomNum}`);
              }, 3000);

              //display prophecy paragraph("gazes into the mists....")
              setTimeout(function () {
                  prophecyP.style.display = "block";
              }, 6000);

              // display the prophecy
              setTimeout(function () {
                  $("#prophecyP").text(`Your prophecy is: "${prophecy}"`);
              }, 9000);
              //
          });
        });
}
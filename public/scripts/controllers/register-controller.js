import { templateLoader } from 'templateLoader';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('/register')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);

            //names self-explanatory
            var registerBtn = $(".registerBtn");

            var enterPasswordField = $("#EnterPassword");

            var repeatPasswordField = $("#RepeatPassword");

            var enterUsername = $("#EnterUsername");

            var chooseCountry = $("#ChooseCountry");

            var enterEmail = $("#EnterEmail");

            //validators on register button click, names self-explanatory
            registerBtn.click(function validate() {
                if(enterPasswordField[0].value !== repeatPasswordField[0].value){
                    alert("Passwords are not equal.");
                }
                if(enterPasswordField[0].value === "" || enterUsername[0].value === "" || enterEmail[0].value === "" || chooseCountry[0].value === "None"){
                  alert("Fill all fields.");
                }
                if(enterEmail[0].value.indexOf('@') === -1) {
                  alert("E-mail is not valid.");
                }
          });
        });
}

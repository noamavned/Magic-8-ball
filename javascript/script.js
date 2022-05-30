var text = "";
var responses = []
for (let index = 1; index < 21; index++) { responses.push("../src/imgs/" + index + ".jpg") }

function shake_ball() {
    /**********************************
     * REMOVE TEXT AND STORE IT IN H1 *
     **********************************/
    if (document.getElementById("que").value === '') {
        document.getElementById("image").src = "../src/imgs/error.jpg"
        return;
    }
    document.getElementById("questionAnswer").innerHTML = document.getElementById("que").value;
    document.getElementById("que").value = "";
    /************************
     * ADD CLASS TO ELEMENT *
     ************************/
    document.getElementById("image").classList.add("shake");
    document.getElementById("image").src = "../src/imgs/tamplate.jpeg"
    /***********************************
     * REMOVE CLASS AFTER 0.75 SECONDS *
     *          CHOOSE ANSWER          *
     ***********************************/
    setTimeout(function () {
        document.getElementById("image").classList.remove("shake");
        document.getElementById("image").src = responses[Math.floor(Math.random() * responses.length)];
    }, 750);
}

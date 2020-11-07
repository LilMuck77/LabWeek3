$(document).ready(function () {
    $("#textBoxOne").change(textboxHeardChange);
    $("#textBoxTwo").keypress(textboxHeardKeypress);

    function textboxHeardChange() {
        // generate random number
        var randomNumber = Math.random();

        // write it to the paragraph
        $("#output").text(randomNumber);
    }

    function textboxHeardKeypress(event) {
        // find out what key was pressed
        var character = event.key;

        // write it to the paragraph
        $("#output").text(character);

    }
});
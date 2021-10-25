$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const inputArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    const pushArray = [];
    pushArray.push(inputArray[1]);
    pushArray.push(inputArray[0]);
    pushArray.push(inputArray[2]);

    

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    $("ul#outputList").prepend("<li>" + pushArray[0] + "</li>");

  });
});

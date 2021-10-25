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


    const tag1 = $(".person1");
    const tag2 = $(".person2");
    const tag3 = $(".animal");
    const tag4 = $(".exclamation");
    const tag5 = $(".verb");
    const tag6 = $(".noun");

    const tagArray = [tag1,tag2,tag3,tag4,tag5,tag6];
    let index = 0;
    inputArray.forEach(function(tag) {
      tagArray[index].text(inputArray[index]);
      index +=1;
    });

    $("#story").show();
  });
});

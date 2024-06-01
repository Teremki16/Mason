
$(document).ready(function () {
  let Notes = [];
  $("#add").on("click", function () {
    let title = $("#addNotatkaPole").val()
    let Note = $("#pole").val()
    let Data = new Date().getTime()
    let note = {
      title: title,
      text: Note,
      date: Data,
      isCompleted: false
    }
    Notes.push(note);
    console.log(Notes)
    $("#addNotatkaPole").val("")
    $("#pole").val("")
    draw()
  })


  function draw() {
    Notes.forEach(element => {
      let notatka = `
    <div class="note">
      <div class="zagal">${element.title}</div>
      <div class="notatka">${element.text}</div>
      <div class="date">${element.date}</div>
      <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="archiv"><i class="fa-solid fa-check"></i></button>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
  `
      $(".notes").append(notatka)
    });
  }








});
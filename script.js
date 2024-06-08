
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
  $(".notes").empty()
  
  Notes.forEach(element => {
    let notatka = `
    <div class="note ${element.isCompleted}">
    <div class="zagal">${element.title}</div>
    <div class="notatka">${element.text}</div>
    <div class="date">${new Date(element.date).toLocaleString()}</div>
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="archiv" onclick="find(${element.date})"><i class="fa-solid fa-check"></i></button>
    <button class="delete" onclick="del(${element.date})"><i class="fa-solid fa-trash"></i></button>
    </div>
    `
    $(".notes").append(notatka)
  });
  localStorage.setItem("note", JSON.stringify(Notes))
}


function del(d) {
  Notes = Notes.filter(obj => obj.date != d);
  console.log(d)
  draw();
}

function find(idToFind) {
  let objectToUpdate = Notes.find(obj => obj.date === idToFind);
  if (objectToUpdate) {
    objectToUpdate.isCompleted = !objectToUpdate.isCompleted;
  }
  console.log(Notes)
  draw();
}

$("#clear").on("click", function(){
  Notes = [];
  draw();
})


let load = JSON.parse(localStorage.getItem("note")) 
if(load != null){

 Notes = load
 draw()

}

  let Notes = [];
  
  $("#add").on("click", function () {

if ($("#addNotatkaPole").val() != "" && $("#pole").val() != "") {

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
  }
  else{
    alert("Заповніть всі поля!")
  }
  })
  
  
  function draw() {
    $(".notes").empty()
    
    Notes.forEach(element => {
      let notatka = `
      <div class="note ${element.isCompleted}">
      <div class="Text">
      <div class="zagal">${element.title}</div>
      <div class="notatka">${element.text}</div>
      </div>
      <div class="date">${new Date(element.date).toLocaleString()}</div>
      <div class="smth4u">
      <button class="edit" onclick="change(${element.date})"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="archiv" onclick="find(${element.date})"><i class="fa-solid fa-check"></i></button>
      <button class="delete" onclick="del(${element.date})"><i class="fa-solid fa-trash"></i></button>
      </div>
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
  
  function change(idToFind) {
    $(".redag").css("display", "flex")
    let objectToUpdate = Notes.find(obj => obj.date === idToFind);
    $("#addInput").val(objectToUpdate.title);
    $("#addText").val(objectToUpdate.text);
    $("#save").attr("onclick", `save(${idToFind})`)
  }
  
  function save(idToFind) {
    let objectToUpdate = Notes.find(obj => obj.date === idToFind);
    objectToUpdate.title = $("#addInput").val();
    objectToUpdate.text = $("#addText").val();
    $(".redag").css("display", "none");
    draw(); 
  }
  
  $("#close").on("click", ()=>{
    $(".redag").css("display", "none")
  })

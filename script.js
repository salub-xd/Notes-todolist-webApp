console.log("Welcome WEB Note app")
showNote()
let addbtn = document.getElementById("addbtn")
// To Add the notes
addbtn.addEventListener("click", function(e) {
  let addtext = document.getElementById("addtext")
  let notes = localStorage.getItem("notes")

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes)
  }

  notesObj.push(addtext.value)
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtext.value = "";
  // console.log(notesObj);
  showNote()

})



// To Show the notes on webpage

function showNote() {
  let notes = localStorage.getItem("notes")

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes)
  }
  let ihtml = "";
  notesObj.forEach(function(Element, index) {
    ihtml += `
         <div class="noteCards card my-3 mx-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${Element}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note </button>
            </div>
        </div> 
    
    `
  });

  let notesElm = document.getElementById("notes")
  if (notesObj.length != 0) {
    notesElm.innerHTML = ihtml;
  }
  else {
    notesElm.innerHTML = `<h4>Nothing to show! Use "Add a Note" section above to add notes</h4>.`
  }
}


// To Delete the notes 

function deleteNote(index) {

  // console.log("Deleting the note", index)

  let notes = localStorage.getItem("notes")

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes)
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNote();

}


// To Search the Notes in Search bar

let search = document.getElementById("searchtxt")

search.addEventListener("input", function() {
  let inputVal = search.value.toLowerCase();
  // console.log("Input has been fired ", inputVal)
  let noteCards = document.getElementsByClassName("noteCards");
  Array.from(noteCards).forEach(function(Element) {
    let cardTxt = Element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt)
    if (cardTxt.includes(inputVal)) {
      Element.style.display = "block"
    }
    else {
      Element.style.display = "none"

    }
  })


})



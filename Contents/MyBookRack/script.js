// select popup box and popup overlay
var popupoverlay = document.querySelector('.popup-overlay');
var popupbox = document.querySelector('.popup-box')
var addpopupbtn = document.getElementById('add-btn')

addpopupbtn.addEventListener("click", function(){
  popupoverlay.style.display = "block"
  popupbox.style.display = "block"
})

//select cancel Button
var cancelbtn = document.getElementById("cancel-book")
cancelbtn.addEventListener("click", function(){
  event.preventDefault()
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"
})

//select container
var container = document.querySelector('.container')
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-description") 

addbook.addEventListener("click", function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class", "book-class")
  div.innerHTML = `<h1>${booktitle.value}</h1>
                   <h5>${bookauthor.value}</h5>
                   <p>${bookdescription.value}</p>
                   <button onclick='deletebook(event)'>DELETE</button>`
  container.append(div)
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"
})
function deletebook(event){
  event.target.parentElement.remove()
}
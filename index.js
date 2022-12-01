
//All objects are going to be stored in this simple array
    let myLibrary = [];
  // Constructor for every Book object
  function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages= pages
    this.read= read
  }

  //Function to take users input and store the new book objects into an array.
  function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
  }

  //Function that loops through myLibrary array and displays each book on the page
  //To do this, create divs and add innerHTML
  const divContainer = document.getElementById("container");

  function displayEachBook(){
    for (let i = myLibrary.length-1; i < myLibrary.length; i++) {
      
        //Creating card for content of book
        const newDiv = document.createElement("div");
        newDiv.className=("bookDiv");
        newDiv.innerHTML= "<p><b>Title:</b>"+ myLibrary[i].title+"</p>"+
                          "<p><b>Author:</b> "+myLibrary[i].author+"</p>"+
                          "<p><b>Pages:</b> "+myLibrary[i].pages+"</p>"+
                          "<p id ='"+i+"'><b>Book read?: </b> "+ ifRead(myLibrary[i].read) +"</p>";
        divContainer.appendChild(newDiv);


        //add remove button
        const removeButton =document.createElement("button");
        removeButton.innerHTML="Remove";
        removeButton.classList.add("displayButton");
        
        //event listener to delete content of book when remove button is pressed
        
        removeButton.addEventListener("click", () => {
          newDiv.remove();
          delete myLibrary[i];
        });
      
        //add read button
        const readButton = document.createElement("button");
        readButton.innerHTML="Book Read?";
        //toggle read button
        const readBool = document.getElementById(i);
        readButton.addEventListener("click", () => {

          if (ifRead(myLibrary[i].read)=="Yes"){
            myLibrary[i].read=false;
            readBool.innerHTML="<b>Book read?: </b> "+ifRead(myLibrary[i].read);
            ;
          }else{
            myLibrary[i].read=true;
            readBool.innerHTML="<b>Book read?: </b> "+ifRead(myLibrary[i].read);
          }

        });

        
        newDiv.appendChild(readButton);
        newDiv.appendChild(removeButton);
        readButton.classList.add("displayButton");

    };
  };

//function to return yes/no instead of true/false
  function ifRead(read){
    if(read==true){
      return "Yes";
    } else {
      return "No";
    };
  };

  //function to hide form
function hideForm(){
  const form = document.getElementById("form");
  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible';
  } else {
    form.style.visibility = 'hidden';
  }
}



  //Makes form visible when New Book button is clicked
  const newBookBtn = document.getElementById("newBookBtn");
  newBookBtn.addEventListener('click', () => {
    hideForm();
  })


  const exitNewBookForm =document.getElementById("exitNewBookForm");
  exitNewBookForm.addEventListener("click", () => {
    event.preventDefault();
    hideForm();
  })

  //gets from input
  // and adds info to MyLibrary 
  //when submit is pressed
  
  const submitBtn = document.getElementById("submitNewBookInfo");
  submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = Number(document.getElementById('pagesInput').value);
    const read = Boolean(document.getElementById('readInput').checked);
    myLibrary.push(new Book(title, author, pages, read));
    
    document.getElementById('titleInput').value='';
    document.getElementById('authorInput').value='';
    document.getElementById('pagesInput').value=0;
    document.getElementById('readInput').checked= false;

    displayEachBook();
    hideForm();
    
  });




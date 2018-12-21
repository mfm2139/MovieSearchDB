const apiKey = 'e9c04929'
let key = 't' //standing for title

let searchBox = document.querySelector('#searchBox')
let poster = document.querySelector('#poster')
let title = document.querySelector('#title')
let actors = document.querySelector('#actors')

console.log("hi")
//creating a variable called 'searchbox'
//searchbox is assigned to the input search box class

searchBox.addEventListener('keyup', function(e){
  //if nothing is typed, return and exit ouf of the function
  if(!e.target.value){
  // anbove just means if nothing is typed
  poster.src=""
  title.innerHTML=""
} else {
  getMovie(e.target.value)
  //every time the event listener fires -- key goes up -- it will call
  // getMovie, a function we define below
}
})

function getMovie (input){
  //the input here is whatever the user put in
  //this gets called only if the user input something here
  //below its a template literal; just a way of concatenating strings
  //defined apiKey above, key above, and then it accepts input from the user
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&${key}=${input}`)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    makeMovie(data)
  })
}

function makeMovie(movie){
  console.log(movie)
  if(movie.Error==='Movie not found!'){
    poster.src="images/cantFind.jpg"
    title.innerHTML= ''
  } else {
    title.innerHTML=movie.Title
    actors.innerHTML=movie.Actors
    poster.src = movie.Poster
  }
}

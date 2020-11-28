
// function removeTransition(e) { // removeTransition(e) removes all transition effects from the key pressed
//     console.log(e)
//     if (e.propertyName !== 'transform') return; //if the propertyName of the key pressed isn't 'transform', ignore that key
//     e.target.classList.remove('playing'); //removes the transition effect from the key pressed by targeting the classList and using the remove method on 'playing'
//   }

// function playSound(e) { // playSound(e) queues the audio for the key pressed
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // assigning audio to the audio sound of the key pressed
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // assigining key to the correct key pressed
//     if (!audio) return; // if the key pressed isn't apart of the data-key attribute, ignore it
//     key.classList.add('playing'); // using the add() method to add 'playing' to the classList of key
//     audio.currentTime = 0; // setting the default time of the audio to 0
//     audio.play(); // executes the audio when the function is called
// }

// const keys = Array.from(document.querySelectorAll('.key')); //assigning keys to the array list of all the keys
// keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //adding an event listener to each key in the array to activate the transition end and calling for the removeTransition function
// window.addEventListener('keydown', playSound); // adding an eventListener to window to play a sound on 'keydown'


window.addEventListener('keydown', function (e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
})

function removeTransition(e){
  if(e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

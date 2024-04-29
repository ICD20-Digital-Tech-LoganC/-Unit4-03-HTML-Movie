function calculateAge() {
  let age = document.getElementById("userGuess").value;

  if (age >= 18) {
      document.getElementById("result").textContent = "You can watch all movies.";
  } 
  
  else if (age >= 15) {
      document.getElementById("result").textContent = "You can watch all movies except R rated movies.";
  }

  else if (age >= 13) {
      document.getElementById("result").textContent = "You don't need parental guidance for PG-13 movies.";
  }

  else if (age >= 5) {
      document.getElementById("result").textContent = "You can't watch PG movies alone.";
  }
  
  else if (age >= 0) {
      document.getElementById("result").textContent = "You can't watch movies alone.";
  } 
  
  else {
      document.getElementById("result").textContent = "Invalid age. Please enter a valid age.";
  }

  
}
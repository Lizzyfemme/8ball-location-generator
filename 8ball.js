 function getRandomLocation() {
      const rand = Math.random() * 100;
      if (rand < 50) return "Art Class";
      else if (rand < 65) return "Office";
      else if (rand < 75) return "Cafeteria";
      else if (rand < 80) return "Great Hall";
      else if (rand < 90) return "Staff Washroom";
      else if (rand < 95) return "Art Storage Closet";
      else return "Staffroom";
    }

function showRandomLocation() {
  const label = document.getElementById("location");

  label.textContent = getRandomLocation();

  label.classList.remove("fade");
  void label.offsetWidth; 
  label.classList.add("fade");
}
  document.getElementById("getRandomLocation")
            .addEventListener("click", showRandomLocation);
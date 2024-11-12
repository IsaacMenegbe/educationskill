// Select the toggle button and nav links
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.navbar');

// Function to toggle the "active" class on navLinks
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Coming Soon Alert for Partnerships
function comingSoon() {
  alert("Coming Soon...");
}

// Add Success Story
function addStory() {
  const name = document.getElementById("name").value;
  const story = document.getElementById("story").value;

  if (name && story) {
    const newStory = document.createElement("div");
    newStory.classList.add("story-card");
    newStory.innerHTML = `<h3>${name}</h3><p>"${story}"</p>`;
    document.getElementById("stories-container").appendChild(newStory);
    document.getElementById("name").value = '';
    document.getElementById("story").value = '';
  } else {
    alert("Please fill in both fields.");
  }
}

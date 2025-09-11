

function openTab(evt, tabName) {
  const contents = document.querySelectorAll(".tab-content, .tab-experience");
  contents.forEach(content => content.classList.remove("active"));

  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach(tab => tab.classList.remove("active"));

  const target = document.getElementById(tabName);
  if (target) {
    target.classList.add("active");
    evt.currentTarget.classList.add("active");  // ✅ marks the clicked button
  }
}

const profilePic = document.getElementById('profile-pic');
const images = ['img/profilepic.jpg', 'img/profilepic.png'];
let current = 0;

setInterval(() => {
  // Add flip class
  profilePic.classList.add('flip');

  // Wait for half the animation, then switch image
  setTimeout(() => {
    current = (current + 1) % images.length;
    profilePic.src = images[current];
    profilePic.classList.remove('flip'); // reset flip
  }, 300); // half of 0.6s transition
}, 10000); // every 10 seconds

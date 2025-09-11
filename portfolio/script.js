function openTab(evt, tabName) {
  // Hide all tab contents
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => content.classList.remove("active"));

  // Remove "active" from all buttons
  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Show selected
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

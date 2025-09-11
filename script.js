

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

// Get a reference to the checkbox element
let checkbox = document.getElementById("switch-3");

// Get a reference to the hidden <div> element
let hiddenDiv = document.getElementById("address-hidden");

// Add an event listener to the checkbox for the "change" event
checkbox.addEventListener("change", function () {
  // Check if the checkbox is checked
  if (checkbox.checked) {
    // If checked, make the hidden <div> visible
    hiddenDiv.style.display = "none";
  } else {
    // If not checked, hide the hidden <div>
    hiddenDiv.style.display = "block";
  }
});


/* ----------  Sign up form validation ---------- */
function validateSignup() {
  // 1) Read what the user typed
  var name     = document.getElementById("reg-name").value;
  var email    = document.getElementById("reg-email").value;
  var password = document.getElementById("reg-password").value;
  var confirm  = document.getElementById("reg-confirm").value;
  var message  = document.getElementById("signup-error");

  // 2) Check each field
  if (name == "") {
    message.innerHTML = "Please enter your name.";
    document.getElementById("reg-name").style.borderColor = "Crimson";
    return false;
  }
  if (email == "") {
    message.innerHTML = "Please enter your email.";
    document.getElementById("reg-email").style.borderColor = "Crimson";
    return false;
  }
  if (password.length < 8) {
    message.innerHTML = "Password must be at least 8 characters.";
    document.getElementById("reg-password").style.borderColor = "Crimson";
    return false;
  }
  if (password != confirm) {
    message.innerHTML = "Passwords do not match.";
    document.getElementById("reg-confirm").style.borderColor = "Crimson";
    return false;
  }

  // 3) Everything is correct
  window.alert("Welcome " + name + "! Your account was created.");
  return true;
}

/* ----------  Add Product form validation ---------- */

// Runs when the user leaves a field (onblur): red if empty, green if filled
function checkField(field) {
  if (field.value == "") {
    field.style.borderColor = "Crimson";
  } else {
    field.style.borderColor = "SeaGreen";
  }
}

// Runs when the user clicks "Save Product" (onsubmit)
function validateProduct() {
  var name    = document.getElementById("name").value;
  var company = document.getElementById("company").value;
  var store   = document.getElementById("store").value;
  var date    = document.getElementById("purchase-date").value;
  var months  = document.getElementById("months").value;
  var message = document.getElementById("product-error");

  if (name == "" || company == "" || store == "" || date == "") {
    message.innerHTML = "Please fill in all fields marked with *.";
    return false;
  }
  if (months == "" || parseInt(months) < 1 || parseInt(months) > 120) {
    message.innerHTML = "Warranty period must be between 1 and 120 months.";
    document.getElementById("months").style.borderColor = "Crimson";
    return false;
  }

  window.alert(name + " was saved successfully!");
  return true;
}

/* ---------- Dashboard filter buttons ---------- */
function filterProducts(status) {
  var count = 0;

  // Go through the 5 cards one by one (card1 ... card5)
  for (var i = 1; i <= 5; i++) {
    var card = document.getElementById("card" + i);
    var cardStatus = document.getElementById("status" + i).innerHTML;

    if (status == "All" || status == cardStatus) {
      card.style.display = "block";   
      count++;
    } else {
      card.style.display = "none";    
    }
  }
  document.getElementById("filter-result").innerHTML = "Showing " + count + " product(s): " + status;
}

/* ----------Warranty claim message ---------- */
function generateMessage() {
  // 1) Read the user's choices
  var issue       = document.getElementById("issue").value;
  var description = document.getElementById("description").value;

  // 2) Which radio button is selected?
  var request = "repair";
  if (document.getElementById("replace").checked) {
    request = "replacement";
  } else if (document.getElementById("refund").checked) {
    request = "refund";
  }

  // 3) The description must not be empty
  if (description == "") {
    window.alert("Please describe the problem first.");
    return;
  }

  // 4) Write the problem part of the message and show the message box
  document.getElementById("msg-problem").innerHTML =
    "Issue: " + issue + ". " + description +
    " I would like to request a " + request + " under warranty. The invoice is attached.";
  document.getElementById("claim-message").style.display = "block";
}
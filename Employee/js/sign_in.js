document.querySelector('.Sup-login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the input fields
  var username = document.getElementById('Username').value;
  var password = document.getElementById('Password').value;

  // Define the valid users and their passwords
  const users = {
      "user1": "pass1",
      "user2": "pass2",
      "user3": "pass3"
  };

  // Check if the entered username exists and the password is correct
  if (users[username] && users[username] === password) {
      // Redirect to the professional.html page
      window.location.href = '../admin/professional.html';
  } else {
      // Display a SweetAlert error message
      swal("Error", "Invalid username or password!", "error");
  }
});
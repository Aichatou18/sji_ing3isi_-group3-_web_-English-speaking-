document.querySelector('.Sup-login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the input fields
  var username = document.getElementById('Adminname').value;
  var password = document.getElementById('A-Password').value;

  // Define the valid users and their passwords
  const admin = {
      "admin1": "pass1",
      "admin2": "pass2",
      "admin3": "pass3"
  };

  // Check if the entered username exists and the password is correct
  if (admin[username] && admin[username] === password) {
      // Redirect to the professional.html page
      window.location.href = '../admin/professional.html';
  } else {
      // Display a SweetAlert error message
      swal("Error", "Invalid username or password!", "error");
  }
});


document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    var usernameInput = document.getElementById('Username').value;
    var passwordInput = document.getElementById('Password').value;

    // Retrieve the users from local storage and parse it
    const users = JSON.parse(localStorage.getItem('adminProfile'));
    
    // Validate the credentials
    let isValidUser = false;
    if (users) {
        for (let user of users) {
            if (user.employeeName === usernameInput && user.employeepassword === passwordInput) {
                isValidUser = true;
                break; // Exit the loop if a match is found
            }
        }
    }

    // Redirect or display error based on validation
    if (isValidUser) {
        // Redirect to the professional.html page
        window.location.href = '../admin/prof.html';
    } else {
        // Display a SweetAlert error message
        swal("Error", "Invalid username or password!", "error");
    }
});
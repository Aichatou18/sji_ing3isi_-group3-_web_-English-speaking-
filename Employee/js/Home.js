
var form = document.getElementById("registrationForm");
  modal = document.getElementById("userForm"),
  modalTitle = document.querySelector("#userForm .modal-title"),
  newUserBtn = document.querySelector(".newUser")

newUserBtn.addEventListener('click', () => {
  submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
  isEdit = false
  imgInput.src = "../images/Profile Icon.webp"
  form.reset()
});
// Get the container where the cards will be added

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];
let cardContainer = $("#cardContainer");

// Clear the container
cardContainer.empty();

// Loop through the data from local storage
getData.forEach((userProfile, index) => {
  let address = `${userProfile.employeeDepartment} ${userProfile.employeeDistrict} ${userProfile.employeeNeighborhood} ${userProfile.employeeRegion} ${userProfile.employeepLocation}`;
  let img = userProfile.picture;
  let title = userProfile.employeeName;
  let sector = userProfile.employeeSector;
  let activity = userProfile.employeeActivity;
  let phone = userProfile.employeePhone;
  let region = userProfile.employeeRegion;
  let email = userProfile.employeeEmail;

  let card = `
    <div class="card mb-3" onclick="showCardDetails(this)">
      <img src="${img}" class="card-img-top" alt="..." id="img-${index}">
      <div class="card-body">
        <h5 class="card-title" id="name-${index}">${title}</h5>
        <p class="card-text" id="sector-${index}"><span class="emoji">📔</span>${sector}</p>
        <p class="card-text" id="activity-${index}"><span class="emoji">💻</span>${activity}</p>
        <p class="card-text" id="phone-${index}"><span class="emoji">📞</span>${phone}</p>
        <p class="card-text" id="address-${index}" style="display:none">${address}</p>
        <p class="card-text" id="region-${index}"><span class="emoji">📍</span>${region}</p>
        <p class="card-text" id="email-${index}" style="display:none"><span class="emoji">📧</span>${email}</p>
      </div>
    </div>`;
  
  // Create a new container for each card
  cardContainer.append(card);
});

function filterCards(searchTerm) {
  $("#cardContainer .card").each(function () {
    var title = $(this).find(".card-title").text().toLowerCase();
    var sector = $(this).find("[id^='sector']").text().toLowerCase();
    var address = $(this).find("[id^='address']").text().toLowerCase();
    var activity = $(this).find("[id^='activity']").text().toLowerCase();

    if (searchTerm === 'all' || title.includes(searchTerm) || sector.includes(searchTerm) || address.includes(searchTerm) || activity.includes(searchTerm)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

$('#searchInput').on('input', function () {
  let val = $(this).val().toLowerCase();
  filterCards(val);
});

// Handle sector filtering
const style = document.createElement('style');
style.textContent = `
  .selected {
    background-color: #000 !important; /* Replace with your color */
    color: #fff !important; /* Replace with your color */
    border-radius: 0px !important;
  }
`;
document.head.appendChild(style);

// Get all the buttons
let buttons = document.querySelectorAll('.nav-link');

// Set the "All" button as selected by default
buttons[0].classList.add('selected');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Remove the 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    this.classList.add('selected');

    // Filter the cards
    filterCards(this.textContent.toLowerCase());
  });
});

function showCardDetails(currentCard) {
  // Get the index from the card's corresponding elements
  const index = currentCard.querySelector('.card-title').id.split('-')[1];

  // Get the elements using the unique IDs
  const sectorElement = document.getElementById(`sector-${index}`);
  const imageElement = document.getElementById(`img-${index}`);
  const nameElement = document.getElementById(`name-${index}`);
  const activityElement = document.getElementById(`activity-${index}`);
  const phoneElement = document.getElementById(`phone-${index}`);
  const addressElement = document.getElementById(`address-${index}`);
  const regionElement = document.getElementById(`region-${index}`);
  const emailElement = document.getElementById(`email-${index}`);

  // Extract the text content and image source
  const name = nameElement.textContent.trim();
  const sector = sectorElement.textContent.trim();
  const imageSource = imageElement.src;
  const activity = activityElement.textContent.trim();
  const phone = phoneElement.textContent.trim();
  const address = addressElement.textContent.trim();
  const region = regionElement.textContent.trim();
  const email = emailElement.textContent.trim();

  // Create a custom HTML string to include the image and details
  const customHTML = `
    <img src="${imageSource}" alt="${sector}" width="100" height="100" class="circular-image">
    <p>Name: ${name}</p>
    <p>Sector: ${sector}</p>
    <p>Activity: ${activity}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <p>Region: ${region}</p>
    <p>Email: <a href="mailto:${email}">${email}</a></p>
  `;

  Swal.fire({
    title: 'Professional Details',
    html: customHTML,
    icon: null,
    customClass: 'swal-glassy',
    confirmButtonColor: '#d33',
    confirmButtonText: 'Close'
  });
}



var RegionSatinfo = {
  Center: {
    Haute_Sanga: {
      Yaounde: {
        Acacia: ["Rond point", "Maison damas"],
        Biyem_assi:["lycee biyem assi", "Carrefour biyem assi"],
        Damas: ["Rond1point", "Maison1damas"]
      },

      Obala: {
        Akong: ["Rond point", "Maison blanche"],
        Dam: ["Rond point", "Rose"]
      }

    }

  },

  Littoral: {
    Moungo: {
      Douala: {
        Bonajo: ["lycee Akwa"],
        Deido: ["Rond point Deido", "Maison deido"],
        Bonaberi: ["Rond point Kadey", "bomba"],
        Ndokoti: ["Avenue", "Carrefour"],

      },
      Nkam: {
        Bonaberi: ["Rond point Kadey", "bomba"],
        Ndokoti: ["Avenue", "Carrefour"]
      }
    }
  }
}



function updateLocationSelection() {
  const selectRegion = document.getElementById('Region'),
    selectDepartment = document.getElementById('Department'),
    selectDistrict = document.getElementById('District'),
    selectNeighborhood = document.getElementById('Neighborhood'),
    selectLocation = document.getElementById('pLocation'),
    selects = document.querySelectorAll('select');

  // Disable location select elements initially
  selectDepartment.disabled = true;
  selectDistrict.disabled = true;
  selectNeighborhood.disabled = true;
  selectLocation.disabled = true;

  // Set cursor to default for disabled elements
  selects.forEach(select => {
    if (select.disabled === true) {
      select.style.cursor = "auto";
    }
  });

  // Populate Region select element
  for (let region in RegionSatinfo) {
    selectRegion.options[selectRegion.options.length] = new Option(region, region);
  }

  // Region Change Event Listener
  selectRegion.onchange = (e) => {
    selectDepartment.disabled = false;
    selectDistrict.disabled = true;
    selectNeighborhood.disabled = true;
    selectLocation.disabled = true;

    selectDepartment.length = 1; // Clear previous department options
    selectDistrict.length = 1; // Clear previous district options
    selectNeighborhood.length = 1; // Clear previous neighborhood options
    selectLocation.length = 1; // Clear previous location options

    // Populate Department select element based on selected Region
    for (let department in RegionSatinfo[e.target.value]) {
      selectDepartment.options[selectDepartment.options.length] = new Option(department, department);
    }
  };

  // Department Change Event Listener
  selectDepartment.onchange = (e) => {
    selectDistrict.disabled = false;
    selectNeighborhood.disabled = true;
    selectLocation.disabled = true;

    selectDistrict.length = 1; // Clear previous district options
    selectNeighborhood.length = 1; // Clear previous neighborhood options
    selectLocation.length = 1; // Clear previous location options

    // Populate District select element based on selected Region and Department
    for (let district in RegionSatinfo[selectRegion.value][e.target.value]) {
      selectDistrict.options[selectDistrict.options.length] = new Option(district, district);
    }
  };

  // District Change Event Listener
  selectDistrict.onchange = (e) => {
    selectNeighborhood.disabled = false;
    selectLocation.disabled = true;

    selectNeighborhood.length = 1; // Clear previous neighborhood options
    selectLocation.length = 1; // Clear previous location options

    // Populate Neighborhood select element based on selected Region, Department, and District
    for (let neighborhood in RegionSatinfo[selectRegion.value][selectDepartment.value][e.target.value]) {
      selectNeighborhood.options[selectNeighborhood.options.length] = new Option(neighborhood, neighborhood);
    }
  };

  // Neighborhood Change Event Listener
  selectNeighborhood.onchange = (e) => {
    selectLocation.disabled = false;

    selectLocation.length = 1; // Clear previous location options

    // Populate Location select element based on selected Region, Department, District, and Neighborhood
    const locations = RegionSatinfo[selectRegion.value][selectDepartment.value][selectDistrict.value][e.target.value];
    for (let i = 0; i < locations.length; i++) {
      selectLocation.options[selectLocation.options.length] = new Option(locations[i], locations[i]);
    }
  };
}
updateLocationSelection();
const registrationBody = JSON.parse(localStorage.getItem('registrations')) || [];;
console.log(registrations);

let selectedImage = "../images/Profile Icon.webp";

// Handle image upload and preview
document.getElementById('imgInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            selectedImage = event.target.result;
            document.querySelector('.img').src = selectedImage;
        };
        reader.readAsDataURL(file);
    }
});

// Main form submission handler
function handleFormSubmit(event) {
    event.preventDefault();

    // Get all form values
    const formData = {
        photo: selectedImage,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        sector: document.getElementById('Sector').value,
        activity: document.getElementById('activity').value,
        region: document.getElementById('Region').value,
        department: document.getElementById('Department').value,
        district: document.getElementById('District').value,
        neighborhood: document.getElementById('Neighborhood').value,
        location: document.getElementById('pLocation').value,
        jobDescription: document.getElementById('jobDescription').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || ''
    };

    if (validateForm(formData)) {
        saveToLocalStorage(formData);
        alert('Registration successful!');
        clearForm();
        // Close modal using Bootstrap
        const modal = bootstrap.Modal.getInstance(document.getElementById('userForm'));
        modal.hide();
    } else {
        alert('Please fill all required fields!');
    }
}

function validateForm(formData) {
    const requiredFields = Object.entries(formData).filter(([key]) => key !== 'photo');
    return requiredFields.every(([_, value]) => value !== '' && value !== undefined);
}

function saveToLocalStorage(formData) {
    let existingData = JSON.parse(localStorage.getItem('registrations')) || [];
    formData.id = Date.now();
    formData.timestamp = new Date().toISOString();
    existingData.push(formData);
    localStorage.setItem('registrations', JSON.stringify(existingData));
}

function clearForm() {
    document.getElementById('myForm').reset();
    document.querySelector('.img').src = "../images/Profile Icon.webp";
    selectedImage = "../images/Profile Icon.webp";
}

// Add phone validation on input
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('phone').addEventListener('input', function(e) {
        const phoneNumber = e.target.value;
        const errorMessage = document.getElementById('error-message');
        
        if (phoneNumber.length < 9) {
            errorMessage.textContent = 'Phone number must be at least 9 digits';
            errorMessage.style.color = 'red';
        } else {
            errorMessage.textContent = '';
        }
    });
});

// Function to retrieve registrations (useful for displaying data later)
// function getRegistrations() {
//     return JSON.parse(localStorage.getItem('registrations')) || [];
// }


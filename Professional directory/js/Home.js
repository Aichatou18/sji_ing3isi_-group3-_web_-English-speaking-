// // Get the container where the cards will be added
// let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];
// // let cardContainer = document.getElementById("cardContainer");
// let cardContainer = $("#cardContainer");

// // Clear the container
// cardContainer.empty();



// //adding swiper

// // import Swiper JS
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const swiper = new Swiper('.swiper', {
//             direction: 'vertical', // Set the direction to horizontal
//             loop: true, // Enable looping of slides
//            // slidesPerView: 1, // Show one slide at a time
//             //spaceBetween: 30, // Space between slides
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             breakpoints: {
//                 640: {
//                     slidesPerView: 2, // Show 2 slides on small screens
//                     spaceBetween: 20,
//                 },
//                 1024: {
//                     slidesPerView: 3, // Show 3 slides on medium screens
//                     spaceBetween: 30,
//                 },
//             },
//             // And if we need scrollbar
//             scrollbar: {
//               el: '.swiper-scrollbar',
//             },
//             modules: [Navigation, Pagination],

//         })


// // Loop through the data from local storage
// let newDat = getData.forEach(userProfile => {
//   let address = userProfile.employeeDepartment + userProfile.employeeDistrict
//     + userProfile.employeeNeighborhood + userProfile.employeeRegion + userProfile.employeepLocation;
//   let img = userProfile.picture;
//   let title = userProfile.employeeName;
//   let sector = userProfile.employeeSector;
//   let activity = userProfile.employeeActivity;
//   let phone = userProfile.employeePhone;
//   let region = userProfile.employeeRegion;
//   let email = userProfile.employeeEmail;
//   let col = `
//       <div class="col">
//   <div class="card h-100 text-center" onclick="showCardDetails(this)">
//     <img src="${img}" class="card-img-top" alt="..." id="img" >
//     <div class="card-body">
//       <h5 class="card-title" id="name">${title}</h5>
//       <p class="card-text" id="sector"><span class="emoji">📔</span>${sector}</p>
//       <p class="card-text" id="Activity"><span class="emoji">💻</span>${activity}</p>
//       <p class="card-text" id="Phonenumber"><span class="emoji">📞</span> ${phone}</p>
//       <p class="card-text" id="address" style="display:none">${address}</p>
//       <p class="card-text" id="region"><span class="emoji">📍</span>${region}</p>
//       <p class="card-text" id="email" style="display:none"><span class="emoji">📧</span>${email}</p>
//     </div>
//   </div>
// </div>`
//   cardContainer.append(col);
// });



// function filterCards(searchTerm) {
//   $("#cardContainer .col").each(function () {
//     var text = $(this).children(".card").children(".card-body").children(".card-title").text().toLowerCase();
//     var textAddress = $(this).children(".card").children(".card-body").children("#address").text().toLowerCase();
//     if (text.includes(searchTerm) || textAddress.includes(searchTerm)) {
//       $(this).show();
//     } else {
//       $(this).hide();
//     }

//   });
// }
// $('#searchInput').on('input', function () {
//   let val = $(this).val().toLowerCase()
//   console.log(val);
//   filterCards(val)
// })
// //for sectors and active class per active for each thing
// const style = document.createElement('style');
// style.textContent = `
//   .selected {
//     background-color: var(--blackbooth) !important;
//     color: var(--primary) !important;
//     border-radius: 0px !important;
//   }
// `;
// document.head.appendChild(style);

// // Get all the buttons
// let buttons = document.querySelectorAll('.nav-link');

// // Set the "All" button as selected by default
// buttons[0].classList.add('selected');

// // Add a click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', function () {
//     // Remove the 'selected' class from all buttons
//     buttons.forEach(btn => btn.classList.remove('selected'));

//     // Add the 'selected' class to the clicked button
//     this.classList.add('selected');

//     // Filter the cards
//     filterCards(this.textContent.toLowerCase());
//   });
// });

// function filterCards(searchTerm) {
//   $("#cardContainer .col").each(function () {
//     var title = $(this).children(".card").children(".card-body").children(".card-title").text().toLowerCase();
//     var sector = $(this).children(".card").children(".card-body").children("#sector").text().toLowerCase();
//     var address = $(this).children(".card").children(".card-body").children("#address").text().toLowerCase();

//     if (searchTerm === 'all' || title.includes(searchTerm) || sector.includes(searchTerm) || address.includes(searchTerm)) {
//       $(this).show();
//     } else {
//       $(this).hide();
//     }
//   });
// }

// $('.nav-link:first').addClass('selected'); // Set the "All" button as selected by default
// handleSearchInput(); // Call the function to set up the event listeners


// // Attach click event listener to the entire card
// const cards = document.querySelectorAll('.card');
// cards.forEach(card => {
// card.addEventListener('click', () => showCardDetails(card));
// });


// //pop up of things
// function showCardDetails(currentCard) {
//   // Get the sector and image elements from the clicked card
//   const sectorElement = currentCard.querySelector('#sector');
//   const imageElement = currentCard.querySelector('#img');
//   const NameElement = currentCard.querySelector('#name');
//   const ActivityElement = currentCard.querySelector('#Activity');
//   const PhoneElement = currentCard.querySelector('#Phonenumber');
//   const addressElement = currentCard.querySelector('#address');
//   const regionElement = currentCard.querySelector('#region');
//   const emailElement = currentCard.querySelector('#email');


//   // Extract the sector text content and image source
//   const name = NameElement.textContent.trim();
//   const sector = sectorElement.textContent.trim();
//   const imageSource = imageElement.src;
//   const activity = ActivityElement.textContent.trim();
//   const phone = PhoneElement.textContent.trim();
//   const address = addressElement.textContent;
//   const region = regionElement.textContent.trim();
//   const email = emailElement.textContent.trim();

//   // Create a custom HTML string to include the image and sector
//   const customHTML = `
//     <img src="${imageSource}" alt="${sector}" width="100" height="100" class="circular-image">
//      <p>Name: ${name}</p>
//     <p>Sector: ${sector}</p>
//     <p>Activity: ${activity}</p>
//     <p>Phone: ${phone}</p>
//     <p>Address: ${address}</p>
//     <p>Region: ${region}</p>
//     <p>Email:<a href="mailto:${email}"> ${email} <a/></p>



//   `;

//   Swal.fire({
//     title: 'Professional Details',
//     html: customHTML,
//     icon: null,
//     customClass: 'swal-glassy',

//     confirmButtonColor: '#d33',

//     confirmButtonText: 'Close'
//   });
// }

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
        <p class="card-text" id="department-${index}"><span class="emoji">🏢</span>${userProfile.employeeDepartment}</p> <!-- Add department -->
        <p class="card-text" id="location-${index}"><span class="emoji">📍</span>${userProfile.employeepLocation}</p> <!-- Add location -->
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
    var department = $(this).find("[id^='department']").text().toLowerCase(); // Ensure department exists
    var location = $(this).find("[id^='location']").text().toLowerCase(); // Ensure location exists

    if (title.includes(searchTerm) || 
        sector.includes(searchTerm) || 
        address.includes(searchTerm) || 
        activity.includes(searchTerm) || 
        department.includes(searchTerm) || 
        location.includes(searchTerm)) {
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

function registerUser() {
  const formData = {};
  formData.firstName = document.getElementById('firstName').value;
  formData.lastName = document.getElementById('lastName').value;
  formData.email = document.getElementById('email').value;
  formData.phone = document.getElementById('phone').value;
  formData.residence = document.getElementById('residence').value;
  formData.resume = document.getElementById('resume').value;
  formData.jobDescription = document.getElementById('jobDescription').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  formData.gender = gender ? gender.value : "Not specified";

  let storedData = localStorage.getItem('registrationData');
  let registrationArray = storedData ? JSON.parse(storedData) : []; 
  registrationArray.push(formData);
  localStorage.setItem('registrationData', JSON.stringify(registrationArray));

  alert('Registration saved to local storage!');
  document.getElementById('registrationForm').reset();
} 
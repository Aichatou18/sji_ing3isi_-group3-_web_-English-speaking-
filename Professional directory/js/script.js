var form = document.getElementById("myForm"),
  imgInput = document.querySelector(".img"),
  file = document.getElementById("imgInput"),
  userName = document.getElementById("name"),
  phone = document.getElementById("phone"),
  activity = document.getElementById("activity"),
  sector = document.getElementById("Sector"),
  email = document.getElementById("email"),
  Region = document.getElementById("Region"),
  department = document.getElementById("Department"),
  district = document.getElementById("District"),
  neighborhood = document.getElementById("Neighborhood"),
  pLocation = document.getElementById("pLocation"),
  submitBtn = document.querySelector(".submit"),
  userInfo = document.getElementById("data"),
  modal = document.getElementById("userForm"),
  modalTitle = document.querySelector("#userForm .modal-title"),
  newUserBtn = document.querySelector(".newUser");

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

let isEdit = false, editId;
showInfo();

newUserBtn.addEventListener('click', () => {
  submitBtn.innerText = 'Submit';
  modalTitle.innerText = "Fill the Form";
  isEdit = false;
  imgInput.src = "../images/Profile Icon.webp";
  form.reset();
});

file.onchange = function () {
  if (file.files[0].size < 5000000) {  // 5MB = 5000000
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      imgUrl = e.target.result;
      imgInput.src = imgUrl;
    }

    fileReader.readAsDataURL(file.files[0]);
  } else {
    alert("This file is too large!");
  }
}

function showInfo() {
  // Clear existing employee details
  document.querySelectorAll('.employeeDetails').forEach(info => info.remove());

  // Use getData directly for all pills
  getData.forEach((element, index) => {
    let createElement = `
      <tr class="employeeDetails">
        <td>${index + 1}</td>
        <td><img src="${element.picture}" alt="" width="50" height="50"></td>
        <td>${element.employeeName}</td>
        <td>${element.employeeSector}</td>
        <td>${element.employeeActivity}</td>
        <td>${element.employeeEmail}</td>
        <td>${element.employeePhone}</td>
        <td>${element.employeeRegion}</td>
        <td>${element.employeeDepartment}</td>
        <td>${element.employeeDistrict}</td>
        <td>${element.employeeNeighborhood}</td>
        <td>${element.employeepLocation}</td>
        <td>
          <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeeSector}', '${element.employeeActivity}', '${element.employeeRegion}', '${element.employeeDepartment}', '${element.employeeDistrict}','${element.employeeNeighborhood}','${element.employeepLocation}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>
          <button class="btn btn-primary" onclick="editInfo('${index}', '${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeeSector}', '${element.employeeActivity}', '${element.employeeRegion}', '${element.employeeDepartment}', '${element.employeeDistrict}','${element.employeeNeighborhood}','${element.employeepLocation}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>
          <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
        </td>
      </tr>`;

    userInfo.innerHTML += createElement;
  });
}
showInfo();

function readInfo(pic, name, email, phone, sector, activity, region, department, district, neighborhood, plocation) {
  document.querySelector('.showImg').src = pic;
  document.querySelector('#showName').value = name;
  document.querySelector("#showEmail").value = email;
  document.querySelector("#showPhone").value = phone;
  document.querySelector("#ShowSector").value = sector;
  document.querySelector("#Showactivity").value = activity;
  document.querySelector("#ShowRegion").value = region;
  document.querySelector("#ShowDepartment").value = department;
  document.querySelector("#ShowDistrict").value = district;
  document.querySelector("#ShowNeighborhood").value = neighborhood;
  document.querySelector("#ShowLocation").value = plocation;
}

function editInfo(index, pic, name, email, phone, sector, activity, region, department, district, neighborhood, plocation) {
  isEdit = true;
  editId = index;
  imgInput.src = pic;
  userName.value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  document.getElementById("Sector").value = sector;
  document.getElementById("activity").value = activity;
  Region.value = region;
  Region.length = 1; // Clear previous department options
  department.value = department;
  district.value = district;
  neighborhood.value = neighborhood;
  pLocation.value = plocation;
  updateLocationSelection();

  submitBtn.innerText = "Update";
  modalTitle.innerText = "Update The Form";
}

function deleteInfo(index) {
  Swal.fire({
    title: 'Delete Confirmation',
    text: "Are you sure you want to delete this information?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9844ebef',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete'
  }).then((result) => {
    if (result.isConfirmed) {
      getData.splice(index, 1);
      localStorage.setItem("userProfile", JSON.stringify(getData));
      showInfo();
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const information = {
    picture: imgInput.src == undefined ? "../images/Profile Icon.webp" : imgInput.src,
    employeeName: userName.value,
    employeePhone: phone.value,
    employeeEmail: email.value,
    employeeSector: sector.value,
    employeeActivity: activity.value,
    employeeRegion: Region.value,
    employeeDepartment: department.value,
    employeeDistrict: district.value,
    employeeNeighborhood: neighborhood.value,
    employeepLocation: pLocation.value,
  };

  if (!isEdit) {
    getData.push(information);
    showAlert(); // success
  } else {
    getData[editId] = information;
    isEdit = false;
  }

  localStorage.setItem('userProfile', JSON.stringify(getData));
  submitBtn.innerText = "Submit";
  modalTitle.innerHTML = "Fill The Form";
  showInfo();
  form.reset();
  imgInput.src = "../images/Profile Icon.webp";
});

// Custom alert
function showAlert() {
  Swal.fire({
    title: 'Employee Confirmation',
    text: 'A new employee was created successfully.',
    confirmButtonColor: '#9844ebef',
    buttons: true,
  });
}

// Region and Location Data
var RegionSatinfo = {
  Adamawa: {
    Vina: {
      Ngaoundéré: {
        Bamenda: ["Bamenda Town", "Bamenda 3"],
        Bafoussam: ["Bafoussam Town", "Bafoussam 2"],
      },
      Banyo: {
        Banyo: ["Banyo Town", "Banyo 2"],
      },
    },
    Djérem: {
      Banyo: {
        Banyo: ["Banyo Town", "Banyo 2"],
      },
    },
  },
  Centre: {
    Mfoundi: {
      Yaoundé: {
        Akwa: ["Rond Point", "Maison Damas"],
        Biyem: ["Lycee Biyem Assi", "Carrefour Biyem Assi"],
      },
    },
    NyongetSoo: {
      Obala: {
        Akong: ["Rond Point", "Maison Blanche"],
      },
    },
  },
  East: {
    Haut_Nyong: {
      Bertoua: {
        Bertoua: ["Place des Fêtes", "Centre Ville"],
      },
    },
    Lom_et_Djerem: {
      Lomié: {
        Lomié: ["Lomié Town", "Lomié 2"],
      },
    },
  },
  Littoral: {
    Wouri: {
      Douala: {
        Bonaberi: ["Rond Point Kadey", "Bomba"],
        Deido: ["Rond Point Deido", "Maison Deido"],
      },
    },
  },
  North: {
    Mayo_Louti: {
      Maroua: {
        Maroua: ["Maroua Town", "Maroua 2"],
      },
    },
    Mayo_Sava: {
      Mokolo: {
        Mokolo: ["Mokolo Town", "Mokolo 2"],
      },
    },
  },
  Northwest: {
    Mezam: {
      Bamenda: {
        Bamenda: ["Bamenda Town", "Bamenda 2"],
      },
    },
    Donga_Mantung: {
      Nkambe: {
        Nkambe: ["Nkambe Town", "Nkambe 2"],
      },
    },
  },
  South: {
    Ocean: {
      Kribi: {
        Kribi: ["Kribi Town", "Kribi 2"],
      },
    },
    Dja_et_Lobo: {
      Ebolowa: {
        Ebolowa: ["Ebolowa Town", "Ebolowa 2"],
      },
    },
  },
  Southwest: {
    Fako: {
      Limbe: {
        Limbe: ["Limbe Town", "Limbe 2"],
      },
    },
    Ndian: {
      Londji: {
        Londji: ["Londji Town", "Londji 2"],
      },
    },
  },
  FarNorth: {
    Mayo_Sava: {
      Maroua: {
        Maroua: ["Maroua Town", "Maroua 2"],
      },
    },
    Mayo_Tsanaga: {
      Mokolo: {
        Mokolo: ["Mokolo Town", "Mokolo 2"],
      },
    },
  },
  West: {
    Menoua: {
      Dschang: {
        Dschang: ["Dschang Town", "Dschang 2"],
      },
    },
    Haut_Nkam: {
      Bafang: {
        Bafang: ["Bafang Town", "Bafang 2"],
      },
    },
  },
};

// Update location selection function
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

// Function to validate phone number
let phoneInput = document.getElementById('phone');
let errorMessage = document.getElementById('error-message');

phoneInput.addEventListener('keypress', function (e) {
  let key = e.key;

  if (!/\d/.test(key)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'red';
    errorMessage.innerText = 'Please enter only numbers for the phone number';
  } else {
    errorMessage.style.display = 'none';
  }
});

// Function for searching
let input = document.querySelector('input[type="search"]');
let table = document.querySelector('table');

input.addEventListener('input', function () {
  let query = this.value.toLowerCase();
  let rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    let rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(query) ? '' : 'none';
  });
});

// Activate the buttons of the nav bar and sort the table according to category
const style = document.createElement('style');
style.textContent = `
  .selected {
    background-color: var(--blackbooth) !important;
    color: var(--primary) !important;
    border-radius: 0px !important;
  }
`;
document.head.appendChild(style);

let buttons = document.querySelectorAll('.nav-link');
buttons[0].classList.add('selected');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('selected'));
    this.classList.add('selected');
    filterTable(this.textContent);
  });
});

function filterTable(category) {
  let rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    let rowCategory = row.cells[3].textContent;
    row.style.display = (rowCategory === category || category === 'All') ? '' : 'none';
  });
}

function storeData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var activity = document.getElementById("activity").value;
  var Sector = document.getElementById("Sector").value;
  var Region = document.getElementById("Region").value;
  var Department = document.getElementById("Department").value;
  var District = document.getElementById("District").value;
  var Neighborhood = document.getElementById("Neighborhood").value;
  var Location = document.getElementById("pLocation").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("activity", activity);
  localStorage.setItem("Sector", Sector);
  localStorage.setItem("Region", Region);
  localStorage.setItem("Department", Department);
  localStorage.setItem("District", District);
  localStorage.setItem("Neighborhood", Neighborhood);
  localStorage.setItem("pLocation", Location);
}

function createActionButtons(row, registration) {
  const actionCell = row.insertCell();
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => deleteRow(registration.index));
  actionCell.appendChild(deleteButton);

  const emailButton = document.createElement('button');
  emailButton.className = 'email-button btn btn-primary';
  emailButton.textContent = 'Approve';
  emailButton.addEventListener('click', () => {
    // openEmailClient(registration.email)
  });
  actionCell.appendChild(emailButton);
}

function addEmptyRow(tableBody) {
  let row = tableBody.insertRow();
  let cell = row.insertCell();
  cell.colSpan = 9;
  cell.textContent = 'No registration data found.';
}

function handleError(message) {
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';
  addEmptyRow(tableBody);
  console.error(message);
}

function deleteRow(index) {
  let storedData = localStorage.getItem('registrationData');
  let registrationArray = JSON.parse(storedData);
  registrationArray.splice(index, 1);
  localStorage.setItem('registrationData', JSON.stringify(registrationArray));
  displayData();
}
function searchData() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const rows = document.querySelectorAll('#data-table tbody tr');
  rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
}



function openEmailClient(email) {
  window.location.href = `mailto:${email}`;
}

function displayData() {
  const storedData = localStorage.getItem('registrationData');
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';

  if (storedData) {
      try {
          const registrationArray = JSON.parse(storedData);
          if (Array.isArray(registrationArray)) {
              if (registrationArray.length === 0) {
                  addEmptyRow(tableBody);
              } else {
                  registrationArray.forEach((registration, index) => {
                      registration.index = index;
                      const row = tableBody.insertRow();
                      for (const key in registration) {
                          if (key !== 'index') { 
                              const cell = row.insertCell();
                              cell.textContent = registration[key];
                          }
                      }
                      createActionButtons(row, registration);
                  });
              }
          } else {
              handleError("Error: Data in localStorage is not an array.");
          }
      } catch (error) {
          handleError("Error parsing JSON from localStorage: " + error);
      }
  } else {
      addEmptyRow(tableBody);
  }
}

displayData();





 
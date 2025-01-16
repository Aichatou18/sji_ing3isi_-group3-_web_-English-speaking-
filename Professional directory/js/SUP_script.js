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
  password = document.getElementById("password"),
  submitBtn = document.querySelector(".submit"),
  userInfo = document.getElementById("tdata"),
  modal = document.getElementById("userForm"),
  modalTitle = document.querySelector("#userForm .modal-title"),
  newUserBtn = document.querySelector(".newUser")

let getData = localStorage.getItem('adminProfile') ? JSON.parse(localStorage.getItem('adminProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', () => {
  submitBtn.innerText = 'Submit',
  modalTitle.innerText = "Fill The Admin Form"
  isEdit = false
  imgInput.src = "../images/Profile Icon.webp"
  form.reset()
})

file.onchange = function () {
  if (file.files[0].size < 5000000) {  // 5MB = 5000000
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      imgUrl = e.target.result
      imgInput.src = imgUrl
    }

    fileReader.readAsDataURL(file.files[0])
  }
  else {
    alert("This file is too large!")
  }
}

function showInfo() {
  document.querySelectorAll('.employeeDetails').forEach(info => info.remove());

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
        <td>${element.employeepassword}</td>
        <td>
          <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeEmail}',
            '${element.employeePhone}', '${element.employeeSector}', '${element.employeeActivity}', '${element.employeeRegion}',
            '${element.employeeDepartment}', '${element.employeeDistrict}','${element.employeeNeighborhood}','${element.employeepLocation}',
            '${element.employeepassword}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

          <button class="btn btn-primary" onclick="editInfo('${index}', '${element.picture}', '${element.employeeName}', '${element.employeeEmail}',
            '${element.employeePhone}', '${element.employeeSector}', '${element.employeeActivity}', '${element.employeeRegion}', '${element.employeeDepartment}',
            '${element.employeeDistrict}','${element.employeeNeighborhood}','${element.employeepLocation}', '${element.employeepassword}')" data-bs-toggle="modal"
            data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

          <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
        </td>
      </tr>`;

    userInfo.innerHTML += createElement;
  });
}
showInfo()

function readInfo(pic, name, email, phone, sector, activity, region, department, district, neighborhood, plocation, password) {
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
  document.querySelector("#ShowPassword").value = password;
}

function editInfo(index, pic, name, email, phone, sector, activity, region, department, district, neighborhood, plocation, password) {
  isEdit = true,
    editId = index,
    imgInput.src = pic,
    userName.value = name,
    document.getElementById("email").value = email,
    document.getElementById("phone").value = phone,
    document.getElementById("Sector").value = sector,
    document.getElementById("activity").value = activity,
    Region.value = region,
    Region.length = 1;
    department.value = department,
    district.value = district,
    neighborhood.value = neighborhood,
    pLocation.value = plocation,
    document.getElementById("password").value = password,
  updateLocationSelection()

  submitBtn.innerText = "Update"
  modalTitle.innerText = "Update The Admin Form"
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
      localStorage.setItem("adminProfile", JSON.stringify(getData));
      showInfo();
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const information = {
    picture: imgInput.src === undefined ? "../images/Profile Icon.webp" : imgInput.src,
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
    employeepassword: password.value,
  };

  if (!isEdit) {
    getData.push(information);
    showAlert(); // success
  } else {
    getData[editId] = information;
    isEdit = false;
  }

  localStorage.setItem('adminProfile', JSON.stringify(getData));

  submitBtn.innerText = "Submit";
  modalTitle.innerHTML = "Fill The Admin Form";

  showInfo();
  form.reset();
  imgInput.src = "../images/Profile Icon.webp";
});

//custom alert
function showAlert() {
  Swal.fire({
    title: 'Employee Confirmation',
    text: 'A new admin was created successfully.',
    confirmButtonColor: '#9844ebef',
    buttons: true,
  });
}

// Regions, Departments, and Districts of Cameroon
var RegionSatinfo = {
  Adamawa: {
    Vina: {
      Ngaoundéré: {
        "Bamenda": ["Bamenda Town", "Bamenda 3"],
        "Bafoussam": ["Bafoussam Town", "Bafoussam 2"]
      }
    },
    Djérem: {
      "Banyo": {
        "Banyo": ["Banyo Town", "Banyo 2"]
      }
    }
  },
  Centre: {
    Mfoundi: {
      Yaoundé: {
        "Akwa": ["Rond Point", "Maison Damas"],
        "Biyem Assi": ["Lycee Biyem Assi", "Carrefour Biyem Assi"]
      }
    },
    NyongetKéllé: {
      "Obala": {
        "Akong": ["Rond Point", "Maison Blanche"]
      }
    }
  },
  East: {
    HautNyong: {
      "Bertoua": {
        "Bertoua": ["Place des Fêtes", "Centre Ville"]
      }
    }
  },
  Littoral: {
    Wouri: {
      Douala: {
        "Bonaberi": ["Rond Point Kadey", "Bomba"],
        "Deido": ["Rond Point Deido", "Maison Deido"]
      }
    }
  },
  North: {
    MayoLouti: {
      "Maroua": {
        "Maroua": ["Maroua Town", "Maroua 2"]
      }
    }
  },
  Northwest: {
    Mezam: {
      Bamenda: {
        "Bamenda": ["Bamenda Town", "Bamenda 2"]
      }
    }
  },
  South: {
    Ocean: {
      "Kribi": {
        "Kribi": ["Kribi Town", "Kribi 2"]
      }
    }
  },
  Southwest: {
    Fako: {
      Limbe: {
        "Limbe": ["Limbe Town", "Limbe 2"]
      }
    }
  },
  FarNorth: {
    MayoSava: {
      "Maroua": {
        "Maroua": ["Maroua Town", "Maroua 2"]
      }
    }
  },
  West: {
    Menoua: {
      "Dschang": {
        "Dschang": ["Dschang Town", "Dschang 2"]
      }
    }
  }
};

function updateLocationSelection() {
  const selectRegion = document.getElementById('Region'),
    selectDepartment = document.getElementById('Department'),
    selectDistrict = document.getElementById('District'),
    selectNeighborhood = document.getElementById('Neighborhood'),
    selectLocation = document.getElementById('pLocation'),
    selects = document.querySelectorAll('select');

  selectDepartment.disabled = true;
  selectDistrict.disabled = true;
  selectNeighborhood.disabled = true;
  selectLocation.disabled = true;

  selects.forEach(select => {
    if (select.disabled === true) {
      select.style.cursor = "auto";
    }
  });

  for (let region in RegionSatinfo) {
    selectRegion.options[selectRegion.options.length] = new Option(region, region);
  }

  selectRegion.onchange = (e) => {
    selectDepartment.disabled = false;
    selectDistrict.disabled = true;
    selectNeighborhood.disabled = true;
    selectLocation.disabled = true;

    selectDepartment.length = 1;
    selectDistrict.length = 1;
    selectNeighborhood.length = 1;
    selectLocation.length = 1;

    for (let department in RegionSatinfo[e.target.value]) {
      selectDepartment.options[selectDepartment.options.length] = new Option(department, department);
    }
  };

  selectDepartment.onchange = (e) => {
    selectDistrict.disabled = false;
    selectNeighborhood.disabled = true;
    selectLocation.disabled = true;

    selectDistrict.length = 1;
    selectNeighborhood.length = 1;
    selectLocation.length = 1;

    for (let district in RegionSatinfo[selectRegion.value][e.target.value]) {
      selectDistrict.options[selectDistrict.options.length] = new Option(district, district);
    }
  };

  selectDistrict.onchange = (e) => {
    selectNeighborhood.disabled = false;
    selectLocation.disabled = true;

    selectNeighborhood.length = 1;
    selectLocation.length = 1;

    for (let neighborhood in RegionSatinfo[selectRegion.value][selectDepartment.value][e.target.value]) {
      selectNeighborhood.options[selectNeighborhood.options.length] = new Option(neighborhood, neighborhood);
    }
  };

  selectNeighborhood.onchange = (e) => {
    selectLocation.disabled = false;

    selectLocation.length = 1;

    const locations = RegionSatinfo[selectRegion.value][selectDepartment.value][selectDistrict.value][e.target.value];
    for (let i = 0; i < locations.length; i++) {
      selectLocation.options[selectLocation.options.length] = new Option(locations[i], locations[i]);
    }
  };
}

updateLocationSelection();
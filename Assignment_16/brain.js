
function toggle() {
    let result = document.getElementById("result-area");
    let signUp = document.getElementById("addUser");
    let login = document.getElementById("logInForm");
    let table = document.getElementById("tableSec");
    let deleteUser = document.getElementById("deleteuser");

    if (signUp.classList.contains('hidden')) {
        signUp.classList.remove('hidden');
        login.classList.add('hidden');
        result.classList.add('hidden');
        deleteUser.classList.add('hidden');
        table.classList.add('hidden');
    } else {
        signUp.classList.add('hidden');
        login.classList.add('hidden');
        deleteUser.classList.add('hidden');
        table.classList.add('hidden');
        result.classList.remove('hidden');
    }
}
function toggle1() {
    let result = document.getElementById("result-area");
    let login = document.getElementById("logInForm");
    let signUp = document.getElementById("addUser");
    let table = document.getElementById("tableSec");
    let deleteUser = document.getElementById("deleteuser");
    let updateForm = document.getElementById("updateFormSec");

    if (login.classList.contains("hidden")) {
        login.classList.remove("hidden");
        signUp.classList.add("hidden");
        table.classList.add("hidden");
        deleteUser.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.add("hidden");
    } else {
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        table.classList.add("hidden");
        deleteUser.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.remove("hidden");
    }
}
function toggle2() {
    let result = document.getElementById("result-area");
    let signUp = document.getElementById("addUser");
    let login = document.getElementById("logInForm");
    let table = document.getElementById("tableSec");
    let deleteUser = document.getElementById("deleteuser");
    let updateForm = document.getElementById("updateFormSec");

    if (table.classList.contains("hidden")) {
        table.classList.remove("hiddden");
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        deleteUser.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.add("hidden");
    } else {
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        table.classList.remove("hidden");
        deleteUser.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.remove("hidden");
    }
}
function toggle3() {
    let result = document.getElementById("result-area");
    let signUp = document.getElementById("addUser");
    let login = document.getElementById("logInForm");
    let table = document.getElementById("tableSec");
    let deleteUser = document.getElementById("deleteuser");
    let updateForm = document.getElementById("updateFormSec");

    if (deleteUser.classList.contains("hidden")) {
        deleteUser.classList.remove("hidden");
        table.classList.add("hiddden");
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.add("hidden");
    } else {
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        table.classList.add("hidden");
        deleteUser.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.remove("hidden");
    }
}
function toggle4() {
    let result = document.getElementById("result-area");
    let signUp = document.getElementById("addUser");
    let login = document.getElementById("logInForm");
    let table = document.getElementById("tableSec");
    let deleteUser = document.getElementById("deleteuser");
    let updateForm = document.getElementById("updateFormSec");

    if (updateForm.classList.contains("hidden")) {
        updateForm.classList.remove("hidden");
        deleteUser.classList.add("hidden");
        table.classList.add("hiddden");
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        result.classList.add("hidden");
    }
    else {
        login.classList.add("hidden");
        signUp.classList.add("hidden");
        table.classList.add("hidden");
        deleteUser.classList.add("hidden");
        updateForm.classList.add("hidden");
        result.classList.remove("hidden");
    }
}
function toggle5() {
    toggle1();
    let logInBtn = document.getElementById('logInButton');
    let logOutBtn = document.getElementById('logOutBtn');
    if (logInBtn.classList.contains('hidden')) {
        logInBtn.classList.remove('hidden')
        logOutBtn.classList.add('hidden')
    }

}
function toggle6() {
    let logInBtn = document.getElementById('logInButton');
    let logOutBtn = document.getElementById('logOutBtn');

    if (logOutBtn.classList.contains('hidden')) {
        logOutBtn.classList.remove('hidden');
        logInBtn.classList.add('hidden');
    }
}


//Local Storage 
//Function to Geneerate UserId
function generateUserId() {
    const characters = '0123456789';
    const length = 4;
    let userID = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.random() * characters.length;
        userID += characters.charAt(randomIndex);
    }

    return userID;
}
generateUserId();
//Function to Save User data Local Storage Data
function save() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userId = generateUserId();
    let user = {
        id: userId,
        name: name,
        address: address,
        email: email,
        password: password
    };
    let users = localStorage.getItem('users');
    if (!users) {
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
    users.push(user)
    alert("Add User Successfully.");

    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}


//Function to update the table with user data from local storage

function generateList() {
    let tableBody = document.querySelector('#tableSec tbody');
    tableBody.innerHTML = '';
    let users = JSON.parse(localStorage.getItem('users'));

    users.forEach(function (user, index) {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.address}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        `;
        tableBody.appendChild(row);

    })
    toggle2();

}
//Function delete user by user ID
function deleteUser() {
    let userId = document.getElementById('userId').value;
    let users = JSON.parse(localStorage.getItem('users'));
    let userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        alert("User Deleted Successfully...");
    }
    else {
        alert("Please Enter Correct User Id.");
    }
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('userId').value = '';
}

function logIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users'));
    let userEmail = users.findIndex(user => user.email == email);
    let userPassword = users.findIndex(user => user.password == password);
    if (userEmail !== -1 && userPassword !== -1) {
        alert("LogIn Succesfully...");
        toggle4();
        toggle6();

    }
    else {
        alert("Invalid Email and Password, Please Try Again...");
    }
    document.getElementById('email').value = '';
    document.getElementById('password').value;
};

function update() {
    let userId = document.getElementById('updateUserId').value;
    let name = document.getElementById('updateName').value;
    let city = document.getElementById('updateCity').value;
    let email = document.getElementById('updateEmail').value;
    let password = document.getElementById('updatePassword').value;

    let users = JSON.parse(localStorage.getItem('users'));
    let userIndex = users.findIndex(user => user.id == userId);
    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].address = city;
        users[userIndex].email = email;
        users[userIndex].password = password;
    }

    localStorage.setItem('users', JSON.stringify('users'));
    alert("Updation Complete..")

    document.getElementById('updateUserId').value = '';
    document.getElementById('updateName').value = '';
    document.getElementById('updateCity').value = '';
    document.getElementById('updateEmail').value = '';
    document.getElementById('updatePassword').value = '';
}


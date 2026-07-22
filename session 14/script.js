let users = []

let userForm = document.getElementById('userForm')
let divsContainer = document.getElementById('divsContainer')
let deleteBtn = document.getElementById('deleteBtn')

// add users
userForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let nameValue = document.getElementById('userName').value
    let emailValue = document.getElementById('userEmail').value

    let user = {
        name: nameValue,
        email: emailValue
    }

    users.push(user)

    console.table(users)

    showUsers()

    userForm.reset()
})

function showUsers() {

    divsContainer.innerHTML = ""

    users.forEach(function (ele, index) {

        divsContainer.innerHTML += `
            <div class="col-md-4">
                <div class="alert alert-primary shadow-sm mb-0">
                    <h4 class="alert-heading">Name: ${ele.name}</h4>
                    <p class="mb-0">Email: ${ele.email}</p>
                    <small class="text-muted">Index: ${index}</small>
                </div>
            </div>
        `
    })
}

// delete users
deleteBtn.addEventListener('click', function () {

    let nameValue = document.getElementById('userName').value
    let emailValue = document.getElementById('userEmail').value

    let index = users.findIndex(function (user) {
        return user.name === nameValue && user.email === emailValue
    })

    if (index !== -1) {

        users.splice(index, 1)

        console.table(users)

        showUsers()

        userForm.reset()

    } else {

        alert("User not found!")

    }

})

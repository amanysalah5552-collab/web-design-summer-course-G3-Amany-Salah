let users = []

// Add User
function addUser() {
  let id = Number(prompt("Enter ID"))
  let name = prompt("Enter Name")
  let balance = Number(prompt("Enter Balance"))

  let isExist = users.find(user => user.id == id)

  if (isExist) {
    alert("ID already exists")
    return
  }

  users.push({
    id: id,
    name: name,
    balance: balance
  })

  alert(
    "User Added Successfully\n" +
    "ID: " + id + "\n" +
    "Name: " + name + "\n" +
    "Balance: " + balance
  )

  console.log(users)
}

// Add 3 Users
addUser()
addUser()
addUser()


// Edit User Balance
function editUserId(id, newBalance) {

  let user = users.find(user => user.id == id)

  if (user) {

    let oldBalance = user.balance

    user.balance = newBalance

    alert(
      "Balance Updated Successfully\n" +
      "ID: " + user.id + "\n" +
      "Name: " + user.name + "\n" +
      "Old Balance: " + oldBalance + "\n" +
      "New Balance: " + newBalance
    )

    console.log(users)

  } else {
    alert("User not found")
  }
}

let editId = Number(prompt("Enter ID to edit"))
let newBalance = Number(prompt("Enter New Balance"))

editUserId(editId, newBalance)


// Transfer Balance
function transferBalance(fromId, toId, balance) {

  let fromUser = users.find(user => user.id == fromId)
  let toUser = users.find(user => user.id == toId)

  if (!fromUser || !toUser) {
    alert("User not found")
    return
  }

  if (fromUser.balance < balance) {
    alert("Insufficient balance")
    return
  }

  fromUser.balance -= balance
  toUser.balance += balance

  alert(
    "Transfer Completed\n" +
    "From: " + fromUser.name + "\n" +
    "To: " + toUser.name + "\n" +
    "Amount: " + balance + "\n" +
    "New Balance Of " + fromUser.name + ": " + fromUser.balance + "\n" +
    "New Balance Of " + toUser.name + ": " + toUser.balance
  )

  console.log(users)
}

let fromId = Number(prompt("Transfer From ID"))
let toId = Number(prompt("Transfer To ID"))
let amount = Number(prompt("Enter Amount"))

transferBalance(fromId, toId, amount)


// Delete User
function deleteUserById(id) {

  let index = users.findIndex(user => user.id == id)

  if (index != -1) {

    let deletedUser = users[index]

    users.splice(index, 1)

    alert(
      "User Deleted Successfully\n" +
      "ID: " + deletedUser.id + "\n" +
      "Name: " + deletedUser.name + "\n" +
      "Balance: " + deletedUser.balance
    )

    console.log(users)

  } else {
    alert("User not found")
  }
}

let deleteId = Number(prompt("Enter ID to delete"))

deleteUserById(deleteId)

console.log(users)
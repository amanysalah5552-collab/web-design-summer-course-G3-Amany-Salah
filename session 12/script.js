let courses = ["html", "css", "js"]

let input = prompt("Enter your course")

let findIndex = courses.findIndex((item) => item == input)

if (findIndex !== -1) {
  alert("The index of the course is " + findIndex)
} 
else {
  courses.push(input)
  let newIndex = courses.length - 1
  alert("The course is not found and added to the index " + newIndex)
}
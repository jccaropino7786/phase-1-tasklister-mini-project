document.addEventListener("DOMContentLoaded", () => {
  
 //working with code
 //select some elements
 //need to apend task to list - select list
 const taskForm = document.getElementById("create-task-form")
// console.log(taskForm)
const taskList = document.querySelector("#tasks")
// console.log(taskList)
const userInput = document.getElementById("new-task-description")
// console.log(userInput)
//create element id li
//li text content is going to be appended to list


taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submitted")
  // console.log(userInput.value)
  const listItem = document.createElement("li")
  // console.log(listItem)
  listItem.textContent = userInput.value
  taskList.appendChild(listItem)
})

// write a helper function?
// we need to access what the user write in
//we need create some list items to display
//we need to append items to our task list







});

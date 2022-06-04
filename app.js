// DECLARATIONS & SELECTORS
let inputEl = document.querySelector("#input-el");
const addBtn = document.querySelector(".add-el");
const ulEl = document.querySelector(".task-ul");
let errorEl = document.querySelector(".error-el");

// EVENT LISTENERS
addBtn.addEventListener("click", renderAdd);

// FUNCTIONS
function renderAdd() {
  if (!inputEl.value === true) {
    errorEl.innerText = " ***  please, do some work *** ";
  } else {
    errorEl.innerText = "";

    const li = document.createElement("li");
    li.className = "list-item";
    // li.innerText = inputEl.value;

    const spanText = document.createElement("span");
    spanText.className = "span-text";
    spanText.innerText = inputEl.value;



    const btnWrapper = document.createElement("div");
    btnWrapper.className = "btn-wrapper";

    const checkBtn = document.createElement("button");
    checkBtn.className = "check-btn";
    checkBtn.innerText = "check";

    const deletBtn = document.createElement("button");
    deletBtn.className = "delete-btn";
    deletBtn.innerText = "Delete";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";

    btnWrapper.append(editBtn);
    btnWrapper.append(checkBtn);
    btnWrapper.append(deletBtn);
    li.append(spanText)
    li.append(btnWrapper);
    ulEl.append(li);
    // console.log(ulEl);

    inputEl.value = "";

    //CHECK EVENT LISTENER FOR CHECKBTN
    checkBtn.addEventListener("click", renderStoke);

    //CHECKBTN FUNCTION
    function renderStoke() {
        if (checkBtn.innerText === "Check") {
            li.style.textDecorationLine = "line-through";
            li.style.opacity = "0.7";
            checkBtn.innerText = "Unheck"; 
        } else {
            li.style.textDecorationLine = "none";
            li.style.opacity = "1";
            checkBtn.innerText = "check";
        }
    }

    deletBtn.addEventListener("click", renderDelete);

    //CHECKBTN FUNCTION
    function renderDelete() {
      li.remove();
    }
    editBtn.addEventListener('click', rendeEdit)




    function rendeEdit() {
      inputEl.value = spanText.innerText;
      li.remove();
  
    }
  


}







}

let $ = document;
const listContainer = $.querySelector("#list");
const pageNumsContainer = $.querySelector("#pagination");

// آرایه کاربران
let users = [
  { id: 1, name: "hooman", family: "hadi" },
  { id: 2, name: "num 2", family: "salehi" },
  { id: 3, name: "num 3", family: "mahmoodi" },
  { id: 4, name: "num 4", family: "user" },
  { id: 5, name: "num 5", family: "user" },
  { id: 6, name: "num 6", family: "user" },
  { id: 7, name: "num 7", family: "user" },
  { id: 8, name: "num 8", family: "user" },
  { id: 9, name: "num 9", family: "user" },
  { id: 10, name: "num 10", family: "user" },
  { id: 11, name: "num 11", family: "user" },
  { id: 12, name: "num 12", family: "user" },
  { id: 13, name: "num 13", family: "user" },
  { id: 14, name: "num 14", family: "user" },
  { id: 15, name: "num 15", family: "user" },
  { id: 16, name: "num 16", family: "user" },
  { id: 17, name: "num 17", family: "user" },
  { id: 18, name: "num 18", family: "user" },
  { id: 19, name: "num 19", family: "user" },
  { id: 20, name: "num 20", family: "user" },
  { id: 21, name: "num 21", family: "user" },
  { id: 22, name: "num 22", family: "user" },
];

// صفحه ی حال حاضر
let curentPage = 1;

// تعداد ردیف ها
let rowCount = 5;

// فانکشن نمایش کاربران (ایجاد آرایه کاربران جدا شده)
function displayUsers() {
  listContainer.innerHTML = "";

  let endIndex = curentPage * rowCount;
  let startIndex = endIndex - rowCount;
  let slicedUsers = users.slice(startIndex, endIndex);

  createSlicedArrayInDom(slicedUsers);
  setPageNumbers();
}

// فانکشن ساختن تک تک کاربران در دام
function createSlicedArrayInDom(slicedUsers) {
  slicedUsers.forEach(function (user) {
    let newDivElem = $.createElement("div");
    newDivElem.innerHTML = user.name + " " + user.family;
    newDivElem.classList.add("item");

    listContainer.append(newDivElem);
  });
}

// فانکشن عملیات دکمه های تغیر صفحه
function setPageNumbers() {
  pageNumsContainer.innerHTML = "";

  let pageCount = Math.ceil(users.length / rowCount);
  for (let i = 1; i <= pageCount; i++) {
    let newBtnElem = $.createElement("button");
    newBtnElem.classList.add("pagenumbers");
    newBtnElem.innerHTML = i;

    if (i === curentPage) {
      newBtnElem.classList.add("active");
    }

    pageNumsContainer.append(newBtnElem);
    newBtnElem.addEventListener("click", function changeCurentPage() {
      curentPage = i;
      displayUsers();
      setLocalStorage(i);
    });
  }
}

function setLocalStorage(curentPage) {
  localStorage.setItem("curentPage", curentPage);
}

function getLocalStorage() {
  // صفحه ی حال حاضر
  let savedCurentPage = localStorage.getItem("curentPage");
  if (savedCurentPage) {
    curentPage = parseInt(savedCurentPage, 10); // تبدیل به عدد
  }
  displayUsers(); // نمایش کاربران پس از بارگذاری صفحه
}

window.addEventListener("load", getLocalStorage);

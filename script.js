const secretAdmin = "2727"; 
let submissions = JSON.parse(localStorage.getItem("submissions") || "[]");

function login() {
  const name = document.getElementById("nameInput").value.trim();
  if(name === "") return alert("כתוב שם!");
  
  if(name === secretAdmin){
    window.location.href = "admin.html";
  } else {
    localStorage.setItem("currentUser", name);
    window.location.href = "user.html";
  }
}

function submitShifts(){
  const table = document.getElementById("shiftsTable");
  const user = localStorage.getItem("currentUser");
  for(let r=1; r<table.rows.length; r++){
    let shift = table.rows[r].cells[0].innerText;
    for(let c=1; c<table.rows[r].cells.length; c++){
      let day = table.rows[0].cells[c].innerText;
      let checked = table.rows[r].cells[c].querySelector("input").checked;
      if(checked){
        submissions.push({user, day, shift});
      }
    }
  }
  localStorage.setItem("submissions", JSON.stringify(submissions));
  alert("המשמרות שלך הוגשו!");
  window.location.href = "index.html";
}

// פונקציה למנהלים
if(window.location.href.includes("admin.html")){
  document.getElementById("allData").innerText = JSON.stringify(submissions, null, 2);
}

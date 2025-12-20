/* LOGIN */
function login() {
    let user = document.getElementById("username").value
     let pass = document.getElementById("password").value

     if (user === "admin" && pass === "12345") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.htmal";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

/* CHECK LOGIN */
function checkLogin() {
    iflocalStorage.getItem("loggedIn") !== "true") {
    window.location.href="login,html";
} else {
    loadPage("home");
 }
}
/* LOGIN */
function logout() {
    localStorage.removeItem("loggedIn");
     window.location.href="login,html";

}
/* DYNAMIC CONTENT */
let content = document.getElementById("content");

function loadPage(page) {
    removeActive();
    document.getElementById("page").classList.add("active")

    if (page === "home") {
        changeBackground("home-bg");
        content.innerHTML = `
        <h2>Home</h2>
        <img scr = "images/Home.png" class="section-img">
            <p>Welcome to the website.<p>

  ' ;
  }
   if (page === "about") {
        changeBackground("about-bg");
        content.innerHTML = `
        <h2>About</h2>
        <img scr = "images/services.png" class="section
        <p>Fronted project using HTML,CSS,  and JavaScript.</p>
        ':
    }
        if (page === "services") {
        changeBackground("services-bg");
        content.innerHTML = `
        <h2>services</h2>
        <img scr = "images/services.png" class="section-img">
        </ul>
           <li>web Design</li>
           <li>Fronted Devoloment.
           <li>Javascript projects<
           </ul>
        ';
        }
        if (page === "contant") {
        changeBackground("contact-bg");
        content.innerHTML = `
        <h2>contact</h2>
        <img scr = "images/contact.png" class="section-img">
        <input type="text" placeholder="Name"><br>
        <input type="text" placeholder="Email"><br>
    <button>Submit</button>
    ';
    }
    }
    functoin remove Active() {
    document.queryselectorAll("nav a").for Each(a=>a.class List.remove("active"));
    }
    function change Background (class Name) {
        document.body.className = className;
    }
    }

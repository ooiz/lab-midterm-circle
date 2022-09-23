var projectID = document.querySelector("#project");
var postID = document.querySelector("#post");
var form = document.querySelector("form");
var newRoute = "";
var postNum = Number(window.location.search.replace(/[^1-3]/g, ""));
if (postNum === 0)
    postNum++;
var apiData;
if (postID != null) {
    newRoute = "../";
    apiData = "<h2>Others Projects</h2>";
    postApi();
}
if (projectID != null) {
    apiData = "<h2>Recent Projects</h2>";
    homeApi();
}
if (form != null)
    form.addEventListener("submit", addPost);
function homeApi() {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
        .then(function (response) { return response.json(); })
        .then(function (res) {
        res.forEach(function (post) {
            apiData += "<div>\n          <img src=\"".concat(newRoute, "img/").concat(post.id, ".jpg\" alt=\"").concat(post.id, ".jpg\" />\n          <h3>").concat(post.title, "</h3>\n          <p>").concat(post.body, "</p>\n          <a href=\"").concat(newRoute, "post/?").concat(post.id, "\">Learn More</a>\n          </div>");
        });
        projectID.innerHTML = apiData;
    })["catch"](function (error) { return console.log(error); });
}
function postApi() {
    fetch("https://jsonplaceholder.typicode.com/posts/".concat(postNum))
        .then(function (response) { return response.json(); })
        .then(function (res) {
        return (postID.innerHTML = "<div>\n        <h1>".concat(res.title, "</h1>\n        <img src=\"").concat(newRoute, "img/").concat(res.id, ".jpg\" alt=\"").concat(res.id, ".jpg\" />\n        <h3>").concat(res.body, "</h3>\n        </div>"));
    })["catch"](function (error) { return console.log(error); });
}
/* Contact page */
var API_URL = "https://jsonplaceholder.typicode.com/comments";
function addPost(preventForm) {
    preventForm.preventDefault();
    var contactname = form.querySelector("#contactname");
    contactname.value;
    var mail = form.querySelector("#mail");
    mail.value;
    var phone = form.querySelector("#phone");
    phone.value;
    var msg = form.querySelector("#msg");
    msg.value;
    var out = document.querySelector("#out");
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json, text/plain"
        },
        body: JSON.stringify({
            name: contactname,
            email: mail,
            phone: phone,
            body: msg
        })
    })
        .then(function (response) { return response.json(); })
        .then(function (dataForm) { return console.log(dataForm); })
        .then(function () {
        var message = "";
        message += "<h3>Message Submitted</h3>";
        out.innerHTML = message;
    })["catch"](function () {
        var message = "";
        message += "<h3>There has been an error with your message!</h3>";
        out.innerHTML = message;
    });
    contactname.value = "";
    mail.value = "";
    phone.value = "";
    msg.value = "";
}

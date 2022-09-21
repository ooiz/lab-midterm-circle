var projectID = document.querySelector("#project");
var postID = document.querySelector("#post");
var newRoute = "";
var postNum = Number(window.location.search.replace(/\W/g, ""));
if (postID != null)
    newRoute = "../";
console.log(postNum);
function homeApi() {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
        .then(function (response) { return response.json(); })
        .then(function (res) {
        var apiData = "<h2>Recent Projects</h2>";
        res.forEach(function (post) {
            apiData += "<div>\n          <img src=\"".concat(newRoute, "img/1.jpg\" alt=\"1.jpg\" />\n          <h3>").concat(post.title, "</h3>\n          <p>").concat(post.body, "</p>\n          <a href=\"\">Learn More</a>\n        </div>");
        });
        projectID.innerHTML = apiData;
    })["catch"](function (error) { return console.log(error); });
}
homeApi();
function postApi() {
    fetch("https://jsonplaceholder.typicode.com/posts/".concat(postNum))
        .then(function (response) { return response.json(); })
        .then(function (res) {
        return (postID.innerHTML = "<div>\n    <img src=\"".concat(newRoute, "img/1.jpg\" alt=\"1.jpg\" />\n    <h3>").concat(res.title, "</h3>\n    <p>").concat(res.body, "</p>\n    <a href=\"\">Learn More</a>\n  </div>"));
    })["catch"](function (error) { return console.log(error); });
}
postApi();

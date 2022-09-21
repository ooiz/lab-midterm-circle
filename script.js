var output = document.querySelector("#project");
function api() {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
        .then(function (response) { return response.json(); })
        .then(function (res) {
        var apiData = "<h2>Recent Projects</h2>";
        res.forEach(function (post) {
            apiData += "<div>\n          <img src=\"img/1.jpg\" alt=\"1.jpg\" />\n          <h3>".concat(post.title, "</h3>\n          <p>").concat(post.body, "</p>\n          <a href=\"\">Learn More</a>\n        </div>");
        });
        output.innerHTML = apiData;
    })["catch"](function (error) { return console.log(error); });
}
api();

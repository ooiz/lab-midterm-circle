let projectID = document.querySelector("#project") as HTMLDivElement;
let postID = document.querySelector("#post") as HTMLDivElement;
let newRoute: string = "";
let postNum: number = Number(window.location.search.replace(/\W/g, ""));
if (postID != null) newRoute = "../";

console.log(postNum);

function homeApi<T>(): void {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
    .then((response) => response.json())
    .then((res) => {
      let apiData = "<h2>Recent Projects</h2>";

      res.forEach((post) => {
        apiData += `<div>
          <img src="${newRoute}img/1.jpg" alt="1.jpg" />
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <a href="">Learn More</a>
        </div>`;
      });
      projectID.innerHTML = apiData;
    })
    .catch((error) => console.log(error));
}

homeApi();

function postApi<T>(): void {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`)
    .then((response) => response.json())
    .then(
      (res) =>
        (postID.innerHTML = `<div>
    <img src="${newRoute}img/1.jpg" alt="1.jpg" />
    <h3>${res.title}</h3>
    <p>${res.body}</p>
    <a href="">Learn More</a>
  </div>`)
    )
    .catch((error) => console.log(error));
}

postApi();

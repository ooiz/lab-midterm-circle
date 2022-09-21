let output = document.querySelector("#project") as HTMLDivElement;

function api<T>(): void {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
    .then((response) => response.json())
    .then((res) => {
      let apiData = "<h2>Recent Projects</h2>";

      res.forEach((post) => {
        apiData += `<div>
          <img src="img/1.jpg" alt="1.jpg" />
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <a href="">Learn More</a>
        </div>`;
      });
      output.innerHTML = apiData;
    })
    .catch((error) => console.log(error));
}

api();

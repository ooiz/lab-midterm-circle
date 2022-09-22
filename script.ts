let projectID = document.querySelector("#project") as HTMLDivElement;
let postID = document.querySelector("#post") as HTMLDivElement;
let form = document.querySelector("form") as HTMLFormElement;
let newRoute: string = "";
let postNum: number = Number(window.location.search.replace(/[^1-3]/g, ""));
if (postNum === 0) postNum++;
let apiData: string;
if (postID != null) {
  newRoute = "../";
  apiData = "<h2>Others Projects</h2>";
  postApi();
}
if (projectID != null) {
  apiData = "<h2>Recent Projects</h2>";
  homeApi();
}
if (form != null) form.addEventListener("submit", addPost);

function homeApi<T>(): void {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
    .then((response) => response.json())
    .then((res) => {
      res.forEach((post) => {
        apiData += `<div>
          <img src="${newRoute}img/${post.id}.jpg" alt="${post.id}.jpg" />
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <a href="post/?${post.id}">Learn More</a>
          </div>`;
      });
      projectID.innerHTML = apiData;
    })
    .catch((error) => console.log(error));
}

function postApi<T>(): void {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`)
    .then((response) => response.json())
    .then(
      (res) =>
        (postID.innerHTML = `<div>
        <h1>${res.title}</h1>
        <img src="${newRoute}img/${res.id}.jpg" alt="${res.id}.jpg" />
        <h3>${res.body}</h3>
        </div>`)
    )
    .catch((error) => console.log(error));
}

/* Contact page */

const API_URL: string = "https://jsonplaceholder.typicode.com/comments";

function addPost(preventForm): void {
  preventForm.preventDefault();

  let contactname = form.querySelector("#contactname") as HTMLInputElement;
  contactname.value;
  let mail = form.querySelector("#mail") as HTMLInputElement;
  mail.value;
  let phone = form.querySelector("#phone") as HTMLInputElement;
  phone.value;
  let msg = form.querySelector("#msg") as HTMLTextAreaElement;
  msg.value;
  let out = document.querySelector("#out") as HTMLDivElement;

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: contactname,
      email: mail,
      phone: phone,
      body: msg,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => console.log(dataForm))
    .then(() => {
      let message = "";
      message += `
		   <div id="message2">
		  <h6>Message Submitted</h6>
	  </div> 
		  `;
      out.innerHTML = message;
    })
    .catch(() => {
      let message = "";
      message += `
			 <div id="message2">
			<h6>oh oh, there has been an error with your message!</h6>
		</div> 
			`;
      out.innerHTML = message;
    });

  contactname.value = "";
  mail.value = "";
  phone.value = "";
  msg.value = "";
}

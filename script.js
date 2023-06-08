const USERS_LIST_API = "https://dummyjson.com/users";
const USERS_DETAILS_API = (id) => `https://dummyjson.com/users/users/${id}`;

const wrapper = document.createElement("div");
const section = document.getElementById("section");

wrapper.classList.add("wrapper");

section.appendChild(wrapper);

function getUsers() {
  fetch(USERS_LIST_API)
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);

      const { users } = data;
      users.forEach((user) => {
        card(user);
      });
    });
}

getUsers();

function card(user) {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = user.image;
  image.classList.add("image");

  div.classList.add("my-card");
  const firstName = document.createElement("span");
  firstName.innerHTML = user.firstName;
  const lastName = document.createElement("span");
  lastName.innerHTML = user.lastName;
  const email = document.createElement("span");
  email.innerHTML = user.email;
  const button = document.createElement("button");
  button.innerHTML = "more detail";
  button.classList.add("buttonUsers");
  button.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(user));
    window.open("details.html", "_self");
  });
  wrapper.appendChild(div);
  div.appendChild(image);
  div.appendChild(firstName);
  div.appendChild(lastName);
  div.appendChild(email);
  div.appendChild(button);
}

function createUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = user.image;
  img.classList.add("image");
  img.width = 110;
  img.height = 110;

  const fullName = document.createElement("h1");
  fullName.innerHTML = `${user.firstName} ${user.lastName}`;
  const email = document.createElement("span");
  email.innerHTML = `email: ${user.email}`;
  const phone = document.createElement("span");
  phone.innerHTML = `phone: ${user.phone}`;
  const birthDate = document.createElement("span");
  birthDate.innerHTML = `date: ${user.birthDate}`;
  const age = document.createElement("span");
  age.innerHTML = `age: ${user.age}`;
  const gender = document.createElement("span");
  gender.innerHTML = `gender: ${user.gender}`;

  div.appendChild(img);
  div.appendChild(fullName);
  div.appendChild(age);
  div.appendChild(gender);
  div.appendChild(birthDate);
  div.appendChild(phone);
  div.appendChild(email);

  const userContainer = document.getElementById("userContainer");
  userContainer.appendChild(div);
}

createUser();

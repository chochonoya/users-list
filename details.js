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
  //card2
  const card2 = document.createElement("div");
  card2.classList.add("card");

  const zagalovok = document.createElement("h2");
  zagalovok.innerHTML = "characteristic";
  const height = document.createElement("span");
  height.innerHTML = `height: ${user.height}`;
  const weight = document.createElement("span");
  weight.innerHTML = `weight: ${user.weight}`;
  const eyeColor = document.createElement("span");
  eyeColor.innerHTML = `eyeColor: ${user.eyeColor}`;
  const hair = document.createElement("span");
  hair.innerHTML = `hair: ${user.hair.color}`;
  const blood = document.createElement("span");
  blood.innerHTML = `blood Group: ${user.bloodGroup}`;

  card2.appendChild(zagalovok);
  card2.appendChild(blood);
  card2.appendChild(height);
  card2.appendChild(weight);
  card2.appendChild(hair);
  card2.appendChild(eyeColor);
  //card3
  const card3 = document.createElement("div");
  card3.classList.add("card");

  const zagalovok1 = document.createElement("h2");
  zagalovok1.innerHTML = "job information";
  const addressCompany = document.createElement("span");
  addressCompany.innerHTML = `address work: ${user.company.address.address}`;
  const cityCompany = document.createElement("span");
  cityCompany.innerHTML = `city company: ${user.company.address.city}`;
  const department = document.createElement("span");
  department.innerHTML = `department: ${user.company.department}`;
  const name = document.createElement("span");
  name.innerHTML = `name: ${user.company.name}`;
  const title = document.createElement("span");
  title.innerHTML = `title: ${user.company.title}`;

  card3.appendChild(zagalovok1);
  card3.appendChild(addressCompany);
  card3.appendChild(cityCompany);
  card3.appendChild(department);
  card3.appendChild(name);
  card3.appendChild(title);

  const userContainer = document.getElementById("userContainer");
  userContainer.appendChild(div);
  userContainer.appendChild(card2);
  userContainer.appendChild(card3);
}

createUser();

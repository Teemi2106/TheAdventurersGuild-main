function submit() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  if (name && age) {
    const section = document.getElementById("pick");
    const h1 = document.createElement("h1");
    h1.classList = "nameh1";
    const h2 = document.createElement("h2");
    h2.classList = "age";
    const h3b = document.createElement("h3");
    h3b.classList = "classh3";

    h1.textContent = `Name: ${name}`;
    h2.textContent = `Age: ${age}`;

    let area = Math.floor(Math.random() * 3) + 1;
    let advclass;

    if (area == 1) {
      advclass = "Mage";
    } else if (area == 2) {
      advclass = "Swordsman";
    } else {
      advclass = "Healer";
    }

    let mana = Math.floor(Math.random() * 100000) + 1;
    h3b.textContent = `Mana Level: ${mana}`;

    let status;
    const h3c = document.createElement("h3");

    if (mana <= 10000) {
      status = "Commoner";
    } else if (mana <= 30000) {
      status = "Noble";
    } else if (mana <= 50000) {
      status = "Hero";
    } else {
      status = "God's Chosen";
    }

    const h3 = document.createElement("h3");
    h3.classList = "advclass";
    h3.textContent = `Class: ${advclass}`;

    h3c.textContent = `Status : ${status}`;

    section.appendChild(h1);
    section.appendChild(h2);
    section.appendChild(h3);
    section.appendChild(h3b);
    section.appendChild(h3c);

    localStorage.setItem("advclass", advclass);
    localStorage.setItem("mana", mana.toString());
    localStorage.setItem("status", status);
  } else {
    alert("Error..Fill In details");
  }
}

function reset() {
  const section = document.getElementById("pick");
  section.textContent = "";

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function continueGame() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const advclassElements = document.getElementsByClassName("advclass");
  const manaElements = document.getElementsByClassName("classh3");

  if (name && age && advclassElements.length > 0 && manaElements.length > 0) {
    const advclass = localStorage.getItem("advclass");
    const mana = localStorage.getItem("mana");
    const status = localStorage.getItem("status");

    const userProfileWindow = window.open("userPage.html");

    userProfileWindow.addEventListener("load", function () {
      const userProfileDocument = userProfileWindow.document;

      userProfileDocument.getElementById(
        "profile-name"
      ).textContent = ` ${name}`;
      userProfileDocument.getElementById("profile-age").textContent = ` ${age}`;
      userProfileDocument.getElementById(
        "profile-advclass"
      ).textContent = ` ${advclass}`;
      userProfileDocument.getElementById(
        "profile-mana"
      ).textContent = ` ${mana}`;
      userProfileDocument.getElementById(
        "profile-status"
      ).textContent = ` ${status}`;
    });
  } else {
    alert("Error..");
  }
}

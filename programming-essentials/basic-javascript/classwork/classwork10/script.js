const contactName = document.getElementById("contactName");
const contactSurname = document.getElementById("contactSurname");
const contactAge = document.getElementById("contactAge");

const addContact = function () {
  const contactBirthDateMls = new Date().getTime() - contactAge.value * 1000 * 3600 * 24 * 365;
  const contactBirthDate = new Date(contactBirthDateMls);


  let newContact = {
    contactName: contactName.value,
    contactSurname: contactSurname.value,
    contactAge: contactAge.value,
    contactBirthDate: contactBirthDate,
  }

  let trElement = document.createElement("tr");
  contactsList.appendChild(trElement);

  let tdNameElement = document.createElement("td");
  tdNameElement.innerHTML = newContact.contactName;
  trElement.appendChild(tdNameElement);

  let tdSurnameElement = document.createElement("td");
  tdSurnameElement.innerHTML = newContact.contactSurname;
  trElement.appendChild(tdSurnameElement);

  let tdAgeElement = document.createElement("td");
  tdAgeElement.innerHTML = newContact.contactAge;
  trElement.appendChild(tdAgeElement);

  let tdBirthDateElement = document.createElement("td");
  tdBirthDateElement.innerHTML = newContact.contactBirthDate.getFullYear();
  trElement.appendChild(tdBirthDateElement);

  let tdDeleteElement = document.createElement("td");
  tdDeleteElement.innerHTML = "X";
  trElement.appendChild(tdDeleteElement);
  tdDeleteElement.onclick = function () {
    trElement.remove();
  }
}

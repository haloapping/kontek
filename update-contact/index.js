const urlParams = new URLSearchParams(window.location.search);
const contactID = parseInt(urlParams.get("id"));

const localStorageContacts = loadContacts();
const contactByID = localStorageContacts.find((contact) => contact.ID == contactID);

const fullName = document.getElementById("full-name");
fullName.setAttribute("value", contactByID.fullName);

const phone = document.getElementById("phone");
phone.setAttribute("value", contactByID.phone);

const email = document.getElementById("email");
email.setAttribute("value", contactByID.email);

const company = document.getElementById("company");
company.setAttribute("value", contactByID.company);

const jobTitle = document.getElementById("job-title");
jobTitle.setAttribute("value", contactByID.jobTitle);

const address = document.getElementById("address");
address.setAttribute("value", contactByID.address);
address.textContent = contactByID.address;

const birthdate = document.getElementById("birthdate");
birthdate.setAttribute("value", contactByID.birthdate);

const note = document.getElementById("notes");
note.setAttribute("value", contactByID.note);
note.textContent = contactByID.note;

const label = document.getElementById("label");
console.log(label.textContent);
if (label.textContent === "Partner") {
  label.options[1].selected = true;
} else if (label.textContent === "Manager") {
  label.options[2].selected = true;
} else if (label.textContent === "Assistant") {
  label.options[3].selected = true;
} else if (label.textContent === "Child") {
  label.options[4].selected = true;
} else if (label.textContent === "Brother") {
  label.options[5].selected = true;
} else {
  label.options[0].selected = true;
}

const isFavorited = document.getElementById("is-favorited");

const createdAt = document.getElementById("created-at");
createdAt.setAttribute("value", contactByID.createdAt);

const updateContactFormData = new FormData(this);

document.getElementById("update-contact-from").addEventListener("submit", function (event) {
  event.preventDefault();

  const updatedContact = {
    ID: newID,
    fullName: updateContactFormData.get("full-name"),
    phone: updateContactFormData.get("phone"),
    email: updateContactFormData.get("email"),
    company: updateContactFormData.get("company"),
    jobTitle: updateContactFormData.get("job-title"),
    address: updateContactFormData.get("address"),
    birthdate: updateContactFormData.get("birthdate"),
    note: updateContactFormData.get("notes"),
    label: updateContactFormData.get("label"),
    isFavorited: updateContactFormData.get("is-favorited"),
    createdAt: updateContactFormData.get("created-at"),
    updatedAt: new Date(),
  };

  localStorageContacts.splice(contactID, 0, updatedContact);
  saveContacts(localStorageContacts);

  alert("Contact is updated");
  window.location.href = "/index.html";
});

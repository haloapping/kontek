// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const contactId = parseInt(urlParams.get("id"));

// Get contact data
const contacts = loadContacts();
const contact = getContactByID(contacts, contactId);

if (!contact) {
  document.body.innerHTML = "<h1>Contact not found</h1>";
} else {
  document.querySelector("h1").textContent = `Contact ID: ${contact.ID}`;
  document.getElementById("fullName").textContent = `Full Name: ${contact.fullName}`;
  document.getElementById("phone").textContent = `Phone: ${contact.phone}`;
  document.getElementById("email").textContent = `Email: ${contact.email}`;
  document.getElementById("company").textContent = `Company: ${contact.company}`;
  document.getElementById("jobTitle").textContent = `Job Title: ${contact.jobTitle}`;
  document.getElementById("address").textContent = `Address: ${contact.address}`;
  document.getElementById("birthdate").textContent = `Birthdate: ${contact.birthdate}`;
  document.getElementById("note").textContent = `Note: ${contact.note}`;
  document.getElementById("label").textContent = `Label: ${contact.label}`;
  document.getElementById("isFavorited").textContent = `Favorited: ${contact.isFavorited === "yes" ? "Yes" : "No"}`;
  document.getElementById("createdAt").textContent = `Created At: ${contact.createdAt}`;
  document.getElementById("updatedAt").textContent = `Updated At: ${contact.updatedAt || "-"}`;
}

function getContactByID(contacts, ID) {
  return contacts.find((contact) => contact.ID === ID);
}

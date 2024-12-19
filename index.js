let contacts = [
  {
    ID: 1,
    fullName: "Appang",
    phone: "081234567891",
    email: "appang@jamil.com",
    company: "Buka Toko",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthdate: new Date("1998-01-11"),
    note: "note",
    label: "Assistant",
    isFavorited: true,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    ID: 2,
    fullName: "Apping",
    phone: "081234567891",
    email: "apping@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthdate: new Date("1999-02-15"),
    note: "note",
    label: "Partner",
    isFavorited: false,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
];

function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  return JSON.parse(localStorage.getItem("contacts"));
}

saveContacts(contacts);
let localStorageContacts = loadContacts(contacts);

function showAllContacts(contacts) {
  if (contacts.length === 0) {
    const pElement = document.createElement("p");
    pElement.innerText = "Contact is empty.";

    const mainElement = document.getElementById("main");
    mainElement.append(pElement);
  } else {
    const table = `
      <table>
        <caption>
          List Contacts
        </caption>
        <thead>
          <tr>
            <td>Full Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Company</td>
            <td>Job Title</td>
            <td>Birthdate</td>
            <td>Note</td>
            <td>Label</td>
            <td>Favorited</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody id="table-body"></tbody>
      </table>
    `;

    const mainElement = document.getElementById("main");
    mainElement.innerHTML += table;

    const tbodyElement = document.getElementById("table-body");
    contacts.forEach((contact) => {
      if (contact.deletedAt === null) {
        const trElement = document.createElement("tr");

        const tdFullNameElement = document.createElement("td");
        tdFullNameElement.textContent = contact.fullName;

        const tdPhoneElement = document.createElement("td");
        tdPhoneElement.textContent = contact.phone;

        const tdEmailElement = document.createElement("td");
        tdEmailElement.textContent = contact.email;

        const tdCompanyElement = document.createElement("td");
        tdCompanyElement.textContent = contact.company;

        const tdJobTitleElement = document.createElement("td");
        tdJobTitleElement.textContent = contact.jobTitle;

        const tdBirthdateElement = document.createElement("td");
        tdBirthdateElement.textContent = contact.birthdate;

        const tdNoteElement = document.createElement("td");
        tdNoteElement.textContent = contact.note;

        const tdLabelElement = document.createElement("td");
        tdLabelElement.textContent = contact.label;

        const tdFavoritedElement = document.createElement("td");
        tdFavoritedElement.textContent = contact.isFavorited ? "✅️" : "❌️";

        const detailButtonElement = document.createElement("button");
        detailButtonElement.textContent = "Detail";
        detailButtonElement.type = "submit";
        detailButtonElement.addEventListener("click", () => {
          showDetailContactByID(contacts, contact.ID);
        });

        const editButtonElement = document.createElement("button");
        editButtonElement.textContent = "Edit";
        editButtonElement.type = "submit";
        editButtonElement.addEventListener("click", () => {
          updateContactByID(contacts, contact.ID);
        });

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.textContent = "Delete";
        deleteButtonElement.type = "submit";
        deleteButtonElement.addEventListener("click", () => {
          deleteContactById(contacts, contact.ID);
        });

        const tdActionElement = document.createElement("td");
        tdActionElement.append(detailButtonElement, editButtonElement, deleteButtonElement);

        trElement.append(
          tdFullNameElement,
          tdPhoneElement,
          tdEmailElement,
          tdCompanyElement,
          tdJobTitleElement,
          tdBirthdateElement,
          tdNoteElement,
          tdLabelElement,
          tdFavoritedElement,
          tdActionElement
        );

        tbodyElement.appendChild(trElement);
      }
    });
  }
}

function showDetailContactByID(contacts, ID) {
  window.location.href = window.origin + "/detail-contact.html";

  const contact = contacts.find((contact) => contact.ID === ID);

  const contactDetailUlElement = document.getElementById("contact-detail");

  const fullNameLiElement = document.createElement("li");
  fullNameLiElement.textContent = contact.fullName;

  const phoneLiElement = document.createElement("li");
  phoneLiElement.textContent = contact.phone;

  const emailLiElement = document.createElement("li");
  emailLiElement.textContent = contact.email;

  const companyLiElement = document.createElement("li");
  companyLiElement.textContent = contact.company;

  const jobTitleLiElement = document.createElement("li");
  jobTitleLiElement.textContent = contact.jobTitle;

  const addressLiElement = document.createElement("li");
  addressLiElement.textContent = contact.address;

  const birthdayLiElement = document.createElement("li");
  birthdayLiElement.textContent = contact.birthdate;

  const noteLiElement = document.createElement("li");
  noteLiElement.textContent = contact.note;

  const labelLiElement = document.createElement("li");
  labelLiElement.textContent = contact.label;

  const favoritedLiElement = document.createElement("li");
  favoritedLiElement.textContent = contact.isFavorited ? "✅️" : "❌️";

  const createdAtLiElement = document.createElement("li");
  createdAtLiElement.textContent = contact.createdAt;

  const updatedAtLiElement = document.createElement("li");
  updatedAtLiElement.textContent = contact.updatedAt;

  const deletedAtLiElement = document.createElement("li");
  deletedAtLiElement.textContent = contact.deletedAt;

  contactDetailUlElement.append(
    fullNameLiElement,
    phoneLiElement,
    emailLiElement,
    companyLiElement,
    jobTitleLiElement,
    addressLiElement,
    birthdayLiElement,
    noteLiElement,
    labelLiElement,
    favoritedLiElement,
    createdAtLiElement,
    updatedAtLiElement,
    updatedAtLiElement
  );
}

function getContactByID(contacts, ID) {
  return contacts.find((contact) => contact.ID === ID && contact.deletedAt === null);
}

function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter(
    (contact) =>
      contact.fullName.includes(keyword) ||
      contact.phone.includes(keyword) ||
      contact.email.includes(keyword) ||
      contact.company.includes(keyword) ||
      contact.jobTitle.includes(keyword) ||
      contact.address.includes(keyword) ||
      contact.birthdate.includes(keyword) ||
      contact.note.includes(keyword) ||
      contact.label.includes(keyword)
  );

  return foundContacts;
}

function addContact(contacts, newContact) {
  contacts.push({
    ID: contacts[contacts.length - 1].ID + 1,
    fullName: newContact.fullName,
    phone: newContact.phone,
    email: newContact.email,
    company: newContact.company,
    jobTitle: newContact.jobTitle,
    address: newContact.address,
    birthdate: newContact.birthdate,
    note: newContact.note,
    label: newContact.label,
    isFavorited: newContact.isFavorited,
    createdAt: newContact.createdAt,
    updatedAt: null,
    deletedAt: null,
  });

  saveContacts(contacts);

  console.log("Contact is added :)");
}

function updateContactByID(contacts, ID, updateContact) {
  // find by ID
  // replace object by id with map function
  let index;
  for (index = 0; index < contacts.length; index++) {
    if (contacts[index].ID === ID) {
      contacts[index].fullName = updateContact.fullName || contacts[index].fullName;
      contacts[index].phone = updateContact.phone || contacts[index].phone;
      contacts[index].email = updateContact.email || contacts[index].email;
      contacts[index].company = updateContact.company || contacts[index].company;
      contacts[index].jobTitle = updateContact.jobTitle || contacts[index].jobTitle;
      contacts[index].address = updateContact.address || contacts[index].address;
      contacts[index].birthdate = updateContact.birthdate || contacts[index].birthdate;
      contacts[index].note = updateContact.note || contacts[index].note;
      contacts[index].label = updateContact.label || contacts[index].label;
      const isFavorited = updateContact.isFavorited;
      if (isFavorited !== null) {
        contacts[index].isFavorited = isFavorited === true;
      }
      contacts[index].updatedAt = new Date();
      saveContacts(contacts);
      console.log(`Contact with ID ${ID} is updated :)`);
      break;
    }
  }

  if (index === contacts.length) {
    console.log("Contact not found");
  }
}

function deleteContactById(contacts, ID) {
  const isDeleted = confirm("Are you sure delete this data?");
  if (isDeleted) {
    const indexContact = contacts.findIndex((contact) => contact.ID === ID && contact.deletedAt === null);
    contacts[indexContact].deletedAt = new Date();
    saveContacts(contacts);
    console.log(`Contact with ID ${ID} is deleted :)`);
  }
}

// Add Contact
console.log("Add Contact");
const newContact = {
  fullName: "Appeng",
  phone: "081234567891",
  email: "apping@jamil.com",
  company: "Toko Pak Edi",
  jobTitle: "CRUD Engineer",
  address: "Jalan Jalan",
  birthdate: new Date("1999-02-15"),
  note: "note",
  label: "Partner",
  isFavorited: true,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};
addContact(localStorageContacts, newContact);

// Update contact
const updateContact = {
  fullName: "Appong",
  phone: null,
  email: null,
  company: null,
  jobTitle: null,
  address: null,
  birthdate: null,
  note: null,
  label: null,
  isFavorited: true,
};
updateContactByID(localStorageContacts, 3, updateContact);

showAllContacts(localStorageContacts);

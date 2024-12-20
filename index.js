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
    const mainElement = document.getElementById("main");
    mainElement.innerHTML = `<p>Contact is empty.</p>`;
    return;
  }

  const tableHTMLString = `
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

      <tbody id="table-body">
        <!-- Table Rows -->
      </tbody>
    </table>
    `;

  const mainElement = document.getElementById("main");
  mainElement.innerHTML += tableHTMLString;

  const tableBodyElement = document.getElementById("table-body");

  contacts.forEach((contact) => {
    const tableRowHTMLString = `
      <tr>
        <td>${contact.fullName}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
        <td>${contact.company}</td>
        <td>${contact.jobTitle}</td>
        <td>${contact.birthdate}</td>
        <td>${contact.note}</td>
        <td>${contact.label}</td>
        <td>${contact.isFavorited ? "✅️" : "❌️"}</td>
        <td>
          <a href="/contacts/?id=${contact.ID}">View</a>
          <button onclick="editContactByID(contacts, ${
            contact.ID
          })">Edit</button>
          <button onclick="deleteContactById(contacts, ${
            contact.ID
          })">Delete</button>
        </td>
      </tr>
        `;

    tableBodyElement.innerHTML += tableRowHTMLString;
  });
}

function getContactByID(contacts, ID) {
  return contacts.find(
    (contact) => contact.ID === ID && contact.deletedAt === null
  );
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

function editContactByID(contacts, ID, updateContact) {
  // find by ID
  // replace object by id with map function
  let index;
  for (index = 0; index < contacts.length; index++) {
    if (contacts[index].ID === ID) {
      contacts[index].fullName =
        updateContact.fullName || contacts[index].fullName;
      contacts[index].phone = updateContact.phone || contacts[index].phone;
      contacts[index].email = updateContact.email || contacts[index].email;
      contacts[index].company =
        updateContact.company || contacts[index].company;
      contacts[index].jobTitle =
        updateContact.jobTitle || contacts[index].jobTitle;
      contacts[index].address =
        updateContact.address || contacts[index].address;
      contacts[index].birthdate =
        updateContact.birthdate || contacts[index].birthdate;
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
    const indexContact = contacts.findIndex(
      (contact) => contact.ID === ID && contact.deletedAt === null
    );
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
editContactByID(localStorageContacts, 3, updateContact);

showAllContacts(localStorageContacts);

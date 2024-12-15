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
    isFavourite: true,
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
    isFavourite: false,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
];

function showAllContacts(contacts) {
  if (contacts.length === 0) {
    console.log("Contact is empty.");
  } else {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].deletedAt === null) {
        console.log(`Id        : ${contacts[i].ID}`);
        console.log(`Full Name : ${contacts[i].fullName}`);
        console.log(`Phone     : ${contacts[i].phone}`);
        console.log(`Email     : ${contacts[i].email}`);
        console.log(`Company   : ${contacts[i].company}`);
        console.log(`Job Title : ${contacts[i].jobTitle}`);
        console.log(`Birthdate : ${contacts[i].birthdate}`);
        console.log(`Note      : ${contacts[i].note}`);
        console.log(`Label     : ${contacts[i].label}`);
        console.log(`Favourite : ${contacts[i].isFavourite ? "✅️" : "❌️"}`);
        console.log("-------------------------------------------");
      }
    }
  }
}

function getContactByID(contacts, ID) {
  return contacts.find((contact) => contact.ID === ID && contact.deletedAt === null);
}

function showDetailContactByID(contact) {
  console.log(`ID         : ${contact.ID}`);
  console.log(`Full Name  : ${contact.fullName}`);
  console.log(`Phone      : ${contact.phone}`);
  console.log(`Email      : ${contact.email}`);
  console.log(`Company    : ${contact.company}`);
  console.log(`Job Title  : ${contact.jobTitle}`);
  console.log(`Address    : ${contact.address}`);
  console.log(`Birthdate  : ${contact.birthdate}`);
  console.log(`Note       : ${contact.note}`);
  console.log(`Label      : ${contact.label}`);
  console.log(`Favourite  : ${contact.isFavourite ? "✅️" : "❌️"}`);
  console.log(`Created At : ${contact.createdAt}`);
  console.log(`Updated At : ${contact.updatedAt}`);
  console.log(`Deleted At : ${contact.deletedAt}`);
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
    isFavourite: newContact.isFavourite,
    createdAt: newContact.createdAt,
    updatedAt: null,
    deletedAt: null,
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  console.log("Contact is added :)");
}

function updateContactByID(contacts, ID, updateContact) {
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
      const isFavourite = updateContact.isFavourite;
      if (isFavourite !== null) {
        contacts[index].isFavourite = isFavourite === true;
      }
      contacts[index].updatedAt = new Date();
      localStorage.setItem("contacts", JSON.stringify(contacts));
      console.log(`Contact with ID ${ID} is updated :)`);
      break;
    }
  }

  if (index === contacts.length) {
    console.log("Contact not found");
  }
}

function deleteContactById(contacts, ID) {
  const indexContact = contacts.findIndex((contact) => contact.ID === ID && contact.deletedAt === null);

  if (indexContact === -1) {
    console.log(`Contact with ID ${ID} not found`);
  } else {
    contacts[indexContact].deletedAt = new Date();
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(`Contact with ID ${ID} is deleted :)`);
  }
}

// Store array of contact object to local storage
localStorage.setItem("contacts", JSON.stringify(contacts));
let localStorageContacts = JSON.parse(localStorage.getItem("contacts"));

// Show all contacts from local storage
console.log("List of Contacts");
showAllContacts(localStorageContacts);

// Show detail contact by id
console.log("Detail Contact");
const contactByID = getContactByID(localStorageContacts, 1);
showDetailContactByID(contactByID);

// Search contact by keyword
console.log("Search Contact");
const foundContacts = searchContacts(localStorageContacts, "Apping");
showAllContacts(foundContacts);

// Add Contact
console.log("Add Contact");
const newContact = {
  fullName: "Apping",
  phone: "081234567891",
  email: "apping@jamil.com",
  company: "Toko Pak Edi",
  jobTitle: "CRUD Engineer",
  address: "Jalan Jalan",
  birthdate: new Date("1999-02-15"),
  note: "note",
  label: "Partner",
  isFavourite: true,
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};
addContact(localStorageContacts, newContact);
localStorageContacts = JSON.parse(localStorage.getItem("contacts"));
showAllContacts(localStorageContacts);

// Update contact
const updateContact = {
  fullName: "Appeng",
  phone: null,
  email: null,
  company: null,
  jobTitle: null,
  address: null,
  birthdate: null,
  note: null,
  label: null,
  isFavourite: true,
};
updateContactByID(localStorageContacts, 3, updateContact);
showAllContacts(localStorageContacts);

// Delete contact by ID
console.log("Delete Contact");
deleteContactById(localStorageContacts, 1);
showAllContacts(localStorageContacts);

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
        console.log("-------------------------------------------");
      }
    }
  }
}

function getContactByID(contacts, ID) {
  const contactById = contacts.find(
    (contact) => contact.ID === ID && contact.deletedAt === null
  );

  return contactById;
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
  console.log(`Created At : ${contact.createdAt}`);
  console.log(`Updated At : ${contact.updatedAt}`);
  console.log(`Deleted At : ${contact.deletedAt}`);
}

function searchContact(contacts, keyword) {
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

function addContact(contacts) {
  const ID = contacts[contacts.length - 1].ID + 1;
  const fullName = prompt("Full Name  :");
  const phone = prompt("Phone      :");
  const email = prompt("Email      :");
  const company = prompt("Company    :");
  const jobTitle = prompt("Job Title  :");
  const address = prompt("Address    :");
  const birthdate = prompt("Birthdate  :");
  const note = prompt("Note       :");
  const label = prompt("Label      :");

  contacts.push({
    ID: ID,
    fullName: fullName,
    phone: phone,
    email: email,
    company: company,
    jobTitle: jobTitle,
    address: address,
    birthdate: new Date(birthdate).toLocaleDateString(),
    note: note,
    label: label,
    createdAt: new Date().toLocaleDateString(),
    updatedAt: null,
    deletedAt: null,
  });

  console.log("Contact is added :)");
}

function updateContactByID(contacts, ID) {
  let index;
  for (index = 0; index < contacts.length; index++) {
    if (contacts[index].ID === ID) {
      const fullName = prompt(`Full Name (${contacts[index].fullName}):`);
      if (fullName !== null) {
        contacts[index].fullName = fullName;
      }

      const phone = prompt(`Phone (${contacts[index].phone}):`);
      if (phone !== null) {
        contacts[index].phone = phone;
      }

      const email = prompt(`Email (${contacts[index].email}):`);
      if (email !== null) {
        contacts[index].email = email;
      }

      const company = prompt(`Company (${contacts[index].company}):`);
      if (company !== null) {
        contacts[index].company = company;
      }

      const jobTitle = prompt(`Job Title (${contacts[index].jobTitle}):`);
      if (jobTitle !== null) {
        contacts[index].jobTitle = jobTitle;
      }

      const address = prompt(`Address (${contacts[index].address}):`);
      if (address !== null) {
        contacts[index].address = address;
      }

      const birthdate = prompt(`Birthdate (${contacts[index].birthdate}):`);
      if (birthdate !== null) {
        contacts[index].birthdate = birthdate;
      }

      const note = prompt(`Note (${contacts[index].note}): `);
      if (note !== null) {
        contacts[index].note = note;
      }

      const label = prompt(`Label (${contacts[index].label}):`);
      if (label !== null) {
        contacts[index].label = label;
      }

      contacts[index].updatedAt = new Date().toLocaleDateString();
      console.log(`Contact with ID ${ID} is updated :)`);
      break;
    }
  }

  if (index === contacts.length - 1) {
    console.log("Contact not found");
  }
}

function deleteContactById(contacts, ID) {
  const indexContact = contacts.findIndex((contact) => contact.ID === ID);

  if (indexContact === -1) {
    console.log(`Contact with ID ${ID} not found`);
  } else {
    contacts[indexContact].deletedAt = new Date().toLocaleDateString();
    console.log(`Contact with ID ${ID} is deleted :)`);
  }
}

let contacts = [
  {
    ID: 1,
    fullName: "Appang",
    phone: "081234567891",
    email: "appang@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthdate: new Date("1998-01-11").toLocaleDateString(),
    note: "note",
    label: "Assistant",
    createdAt: new Date().toLocaleDateString(),
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
    birthdate: new Date("1999-02-15").toLocaleDateString(),
    note: "note",
    label: "Partner",
    createdAt: new Date().toLocaleDateString(),
    updatedAt: null,
    deletedAt: null,
  },
];

while (true) {
  console.log(` ___   _  _______  __    _  _______  _______  ___   _ 
|   | | ||       ||  |  | ||       ||       ||   | | |
|   |_| ||   _   ||   |_| ||_     _||    ___||   |_| |
|      _||  | |  ||       |  |   |  |   |___ |      _|
|     |_ |  |_|  ||  _    |  |   |  |    ___||     |_ 
|    _  ||       || | |   |  |   |  |   |___ |    _  |
|___| |_||_______||_|  |__|  |___|  |_______||___| |_|
`);
  console.log("List of Menu:");
  console.log("[1] Show All Contacts");
  console.log("[2] Detail Contact");
  console.log("[3] Search Contact");
  console.log("[4] Add Contact");
  console.log("[5] Update Contact");
  console.log("[6] Delete Contact");
  console.log("[7] Exit");
  console.log("===========================================\n");
  let menuOption = prompt("Choose menu (1/2/3/4/5/6/7):");

  if (menuOption === "1") {
    console.log("SHOW ALL CONTACTS\n");
    showAllContacts(contacts);
    console.log("===========================================\n");
  } else if (menuOption === "2") {
    console.log("DETAIL CONTACT BY ID\n");
    const ID = parseInt(prompt("Enter ID Contact:"));
    const contactByID = getContactByID(contacts, ID);
    if (contactByID === undefined) {
      console.log("Contact not found");
    } else {
      showDetailContactByID(contactByID);
    }
    console.log("===========================================\n");
  } else if (menuOption === "3") {
    console.log("SEARCH CONTACT\n");
    const keyword = prompt("Enter keyword:");
    const foundContacts = searchContact(contacts, keyword);
    if (foundContacts.length === 0) {
      console.log("Contact not found");
    } else {
      showAllContacts(foundContacts);
    }
    console.log("===========================================\n");
  } else if (menuOption === "4") {
    console.log("ADD CONTACT\n");
    addContact(contacts);
  } else if (menuOption === "5") {
    console.log("UPDATE CONTACT\n");
    const ID = parseInt(prompt("Enter ID Contact:"));
    updateContactByID(contacts, ID);
    console.log("===========================================\n");
  } else if (menuOption === "6") {
    console.log("DELETE CONTACT");
    const ID = parseInt(prompt("Enter ID Contact:"));
    deleteContactById(contacts, ID);
    console.log("===========================================\n");
  } else if (menuOption === "7") {
    console.log("Bye!");
    break;
  } else {
    console.log(
      `Menu ${menuOption} is not available. Use menu 1/2/3/4/5/6/7.\n`
    );
    console.log("===========================================\n");
  }

  prompt("Enter to continue...");
}

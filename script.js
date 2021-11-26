// Globals
let contactList = [
    {
        name: "Giorno Giovana",
        phone: "172-416-1985",
        address: "594 Main St, Anytown, USA",
        email: "ggiovana@goldenexperience.com",
    },
    {
        name: "Bruno Bucciarati",
        phone: "178-927-1980",
        address: "443 Some St, Sometown, USA",
        email: "bossrati@stickyfingers.com",
    },
    {
        name: "Guido Mista",
        phone: "182-123-1982",
        address: "456 Another St, Anothertown, Canada",
        email: "guista@sixpistols.com",
    },
    {
        name: "Narancia Ghirga",
        phone: "164-520-1983",
        address: "577 Other St, Othertown, Canada",
        email: "naranghirga@lilbomber.com",
    },
]

// Index Page
function cleanUpIndex() {
    let index = document.querySelectorAll(".main > a");
    for (let i = 0; i < index.length; i++) {
        index[i].remove();
    }
}


function createSingleIndex(contact) {
    let card = document.createElement("a");
    card.setAttribute("href", "page3.html");

    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    let name = document.createElement("p");
    name.textContent = contact["name"];

    contactDiv.appendChild(name);
    card.appendChild(contactDiv);

    card.addEventListener('click', (e) => {
        if(e.target == 'contact') {
            e.preventDefault()
            cleanUpIndex();
            renderView(card);
        }
    });

    return card
}


function renderIndex(contactList) {
    let index = document.querySelector(".main");
    for (let i = 0; i < contactList.length; i++) {
        let c = createSingleIndex(contactList[i])
        index.appendChild(c);
    }
}


// View Page
function cleanUpView() {
    let page = document.querySelector(".contactinfo");
    if (page != null) {
        page.remove();
    }
}


function renderView(contact) {
    let main = document.querySelector(".main");
    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contactinfo");

    let contactName = document.createElement("div");
    contactName.classList.add("contactname");
    contactName.textContent = contact["name"];

    let contactIMG = document.createElement("img");
    contactIMG.setAttribute("src", "./img/profile.jpg")
    contactIMG.classList.add("profilepic");

    let contactEmail = document.createElement("div");
    contactEmail.classList.add("contactemail");
    contactEmail.textContent = contact["email"];

    let contactPhone = document.createElement("div");
    contactPhone.classList.add("contactphone");
    contactPhone.textContent = contact["phone"];

    let contactAdd = document.createElement("div");
    contactAdd.classList.add("contactaddress");
    contactAdd.textContent = contact["address"];

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let edit = document.createElement("button");
    edit.classList.add("button", "edit");
    edit.setAttribute("value", "Edit");
    edit.textContent = "Edit";

    let close = document.createElement("button");
    close.classList.add("button", "close");
    close.setAttribute("value", "Close");
    close.textContent = "Close";

    buttons.appendChild(edit);
    buttons.appendChild(close);

    contactName.appendChild(contactIMG);

    contactInfo.appendChild(contactName);
    contactInfo.appendChild(contactEmail);
    contactInfo.appendChild(contactPhone);
    contactInfo.appendChild(contactAdd);
    contactInfo.appendChild(buttons);
    main.appendChild(contactInfo);
}



// Create Page
function cleanUpCreate() {
    let page = document.querySelector(".contactedit");
    if (page != null){
        page.remove();
    }
}


function renderCreate() {
    let main = document.querySelector(".main");

    // Wrapper 
    let contactEdit = document.createElement("div");
    contactEdit.classList.add("contactedit");

    // Contact IMG
    let contactIMG = document.createElement("div");
    contactIMG.classList.add("contactimg");

    let img = document.createElement("img");
    img.classList.add("profilepic");
    img.setAttribute("src", "./img/profile.jpg")
    img.setAttribute("alt", "Profile Picture");

    contactIMG.appendChild(img);

    // Form Container
    let formContain = document.createElement("div");
    formContain.classList.add("form");

    // Form
    let form = document.createElement("form");


    // Name Field
    let nameInputContain = document.createElement("div");
    nameInputContain.classList.add("inputcontainer");

    let nameInput = document.createElement("input");
    nameInput.id = "contacname";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "contactname");
    nameInput.setAttribute("placeholder", "Contact Name");

    // Add Name Button
    let addName = document.createElement("button");
    addName.id = "extranamefield";
    addName.classList.add("extrafield");
    addName.setAttribute("name", "extranamefield");
    addName.textContent = "+";

    nameInputContain.appendChild(nameInput);
    nameInputContain.appendChild(addName);


    // Phone Field
    let telInputContain = document.createElement("div");
    telInputContain.classList.add("inputcontainer");

    let telInput = document.createElement("input");
    telInput.id = "contactphone";
    telInput.setAttribute("type", "tel");
    telInput.setAttribute("name", "contactphone");
    telInput.setAttribute("placeholder", "Contact Phone");

    // Add Phone Button
    let addPhone = document.createElement("button");
    addPhone.id = "extraphonefield";
    addPhone.classList.add("extrafield");
    addPhone.setAttribute("name", "extraphonefield");
    addPhone.textContent = "+";

    telInputContain.appendChild(telInput);
    telInputContain.appendChild(addPhone);


    // Address Field
    let adrsInputContain = document.createElement("div");
    adrsInputContain.classList.add("inputcontainer");

    let adrsInput = document.createElement("input");
    adrsInput.id = "contactaddress";
    adrsInput.setAttribute("type", "text");
    adrsInput.setAttribute("name", "contactaddress");
    adrsInput.setAttribute("placeholder", "Contact Address");

    // Add Address Button
    let addAdrs = document.createElement("button");
    addAdrs.id = "extraaddressfield";
    addAdrs.classList.add("extrafield");
    addAdrs.setAttribute("name", "extraaddressfield");
    addAdrs.textContent = "+";

    adrsInputContain.appendChild(adrsInput);
    adrsInputContain.appendChild(addAdrs);


    // Email Field
    let emailInputContain = document.createElement("div");
    emailInputContain.classList.add("inputcontainer");

    let emailInput = document.createElement("input");
    emailInput.id = "contactemail";
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "contactemail");
    emailInput.setAttribute("placeholder", "Contact Email");

    // Add Email Button
    let addEmail = document.createElement("button");
    addEmail.id = "extraemailfield";
    addEmail.classList.add("extrafield");
    addEmail.setAttribute("name", "extraemailfield");
    addEmail.textContent = "+";

    adrsInputContain.appendChild(adrsInput);
    adrsInputContain.appendChild(addAdrs);

    emailInputContain.appendChild(emailInput);
    emailInputContain.appendChild(addEmail);


    // Submit/Cancel Buttons
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let submit = document.createElement("button");
    submit.id = "savecontact";
    submit.classList.add("button", "save");
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", "savecontact");
    submit.textContent = "Save Contact";

    let cancel = document.createElement("button");
    cancel.id = "cancel";
    cancel.classList.add("button", "cancel");
    cancel.setAttribute("type", "reset");
    cancel.setAttribute("name", "cancel");
    cancel.textContent = "Cancel";

    buttons.appendChild(submit);
    buttons.appendChild(cancel);


    // Append inputs to form
    form.appendChild(nameInputContain);
    form.appendChild(telInputContain);
    form.appendChild(adrsInputContain);
    form.appendChild(emailInputContain);
    form.appendChild(buttons);

    // Append form to container 
    formContain.appendChild(form);

    // Append profile pic and form to contact edit container
    contactEdit.appendChild(contactIMG);
    contactEdit.appendChild(formContain);

    // Append container to main
    main.appendChild(contactEdit);
}


// Event Listeners
function goToContactsList(event) {
    event.preventDefault();
    cleanUpView();
    cleanUpCreate();
    cleanUpIndex();
    renderIndex(contactList);
}

const contacts = document.querySelector("#contactshome");
contacts.removeAttribute("href");
contacts.addEventListener('click', goToContactsList);

function goToCreate(event) {
    event.preventDefault();
    cleanUpCreate();
    cleanUpIndex();
    cleanUpView();
    renderCreate();
}

const newContact = document.querySelector("#newcontact");
newContact.addEventListener('click', goToCreate)

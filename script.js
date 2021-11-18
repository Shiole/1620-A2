// Index Page
let contactList = [
    {
        name: "Roberta Dobbs",
        phone: "778-555-1234",
        address: "101 Main St, Anytown, USA",
        email: "subgenius@slack.example.com",
    },
    {
        name: "Bugs Bunny",
        phone: "123-867-5309",
        address: "Warner Brothers Animation Lot",
        email: "whatsup@doc.example.com",
    },
]


/* Create a function called cleanUpIndex that removes all of the DOM nodes 
that are unique to the Index page. This function takes no parameters. */
function cleanUpIndex() {
    let index = document.querySelectorAll(".main > a");
    for (let i = 0; i < index.length; i++) {
        index[i].remove();
    }
}

/* Create a function called createSingleIndex that creates a DOM node that
 represents a single index card for the Index page. This function will take 
 in a single object, where that object represents a single contact 
 (see examples below). It should output a DOM node. It does not need to attach 
 the DOM node to the rest of the DOM.*/
function createSingleIndex(contact) {
    // <a href="page3.html"><div class="contact"><p>Barry Allen</p></div></a>
    let card = document.createElement("a");
    card.setAttribute("href", "page3.html");

    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    let name = document.createElement("p");
    name.textContent = contact["name"];

    contactDiv.appendChild(name);
    card.appendChild(contactDiv);

    return card
}


/* Create a function called renderIndex that creates all of the DOM nodes 
that are unique to the Index page. This function will take in a single 
parameter, which is an array containing many contacts, each of which represents 
a single contact. An example array of contacts is provided below. But be warned, 
I will supply the array, and I may change the details, like how many contacts 
there are. Obviously the reason you wrote createSingleIndex is because I thought 
it would help you write this function. Unlike createSingleIndex, which just sort 
of creates some stuff in isolation, this function must actually put DOM nodes 
onto the web page. */

function renderIndex(contactList) {
    let index = document.querySelector(".main");
    for (let i = 0; i < contactList.length; i++) {
        let c = createSingleIndex(contactList[i])
        index.appendChild(c);
    }
}



// View Page

/* Create a function called cleanUpView that removes all of the DOM nodes that 
are unique to the View page. This function takes no parameters. */

function cleanUpView() {
    let page = document.querySelector(".contactinfo");
    page.remove();
}


/* Create a function called renderView that creates all of the DOM nodes that are
unique to the View page. This function will take in a single parameter, which is
an object that represents a single contact. Much like renderIndex, this function
is reponsible for actually modifying the web page. */

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

/* Create a function called cleanUpCreate that removes all of the DOM nodes that
are unique to the Create page. This function takes no parameters. */
function cleanUpCreate() {
    let page = document.querySelector(".contactedit");
    page.remove();
}

/* Create a function called renderCreate that creates all of the DOM nodes that
are unique to the Create page. This function will take in a single parameter, which
is an object that represents a single contact. Much like renderIndex, this function
is reponsible for actually modifying the web page. */

function renderCreate(contact) {
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

    form.appendChild(nameInputContain);
    form.appendChild(telInputContain);
    form.appendChild(adrsInputContain);
    form.appendChild(emailInputContain);
    form.appendChild(buttons);

    formContain.appendChild(form);

    contactEdit.appendChild(contactIMG);
    contactEdit.appendChild(formContain);

    main.appendChild(contactEdit);
    console.log(main);
}
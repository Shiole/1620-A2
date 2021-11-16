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



/* Create a function called renderView that creates all of the DOM nodes that are
unique to the View page. This function will take in a single parameter, which is
an object that represents a single contact. Much like renderIndex, this function
is reponsible for actually modifying the web page. */





// Create Page

/* Create a function called cleanUpCreate that removes all of the DOM nodes that
are unique to the Create page. This function takes no parameters. */


/* Create a function called renderCreate that creates all of the DOM nodes that
are unique to the Create page. This function will take in a single parameter, which
is an object that represents a single contact. Much like renderIndex, this function
is reponsible for actually modifying the web page. */
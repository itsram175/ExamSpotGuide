// Arrays
let centerData = [

    ["ION DIGITAL ZONE - L.B.NAGAR", "Aishwarya Building, Survey 12 13 & 14, Gj Colony, Ward No 3, Block No 2,Saroornagar Mdl., L.B.Nagar Circle To Sagar X Road, 3-2-126/7, Srisailam Hwy, Beside Green Bawarchi, L. B. Nagar, Telangana - 500074", "LB NAGAR, SAGAR X ROADS", "7947429721", "https://maps.app.goo.gl/kC1bSDPtbyRLbPAR9"],

    ["ION DIGITAL ZONE - OLD ALWAL", "Anand Rao Plaza, Door No. 1-5-909/1, Father Balaiah Nagar, Old Alwal, Secunderabad, Telangana 500010", "Father Balaya Nagar", "7947428373", "https://maps.app.goo.gl/kMnq9o9PVdXJKBMw7"],

    ["ION DIGITAL ZONE 1 & 2 - MALLAPUR", "3-56/3, Nacharam - Mallapur Rd, Vivekananda Nagar, Mallapur, Secunderabad, Telangana - 500076", "NOMA FUNCTION HALL", "18002096030", "https://maps.app.goo.gl/ebWr94hF2TBs4M2x8"],

    ["ION DIGITAL ZONE 1 & 2 - MOULA ALI", "CVK Technologies Private Limited, Digital Zone IDZ 2 Plot No 12, NFC Rd, Near Coca Cola Factory, Opposite Jubilant Food Works, Hyderabad, Telangana - 500040", "Z.T.S. X ROAD", "7942679606", "https://maps.app.goo.gl/rwHJLEpvQgv6GeVC8"],

    ["LAXMAN IT ACADEMY", "2nd Floor, Uday Square Building, ( Phase 5), Malkagiri Mandal, Medchal, Sy.No, 184 & 185, FCI Godown Rd, Above SBI Bank, Opposite Ganesh Temple, Kaman, Cherlapalli, Hyderabad, Telangana - 500051", "TEMPLE KHAMAN,HCL COLONY", "7947415874", "https://maps.app.goo.gl/5gUf9pW9eLMpcjfs5"],

    ["MSR IT ACADEMY", "Union Bank Of India Lane, Mallanna Temple Road, Road No:5, Opposite Boduppal, Veera Reddy Nagar, Boduppal, Hyderabad, Telangana - 500092", "BODUPPAL SRINIVAS NAGAR,INDIRA NAGAR", "7947143922", "https://maps.app.goo.gl/xcUfG9dV6iFwvKjh9"],

    ["SEZ TECHNOLOGIES & SOLUTIONS", "3rd Floor, Karmanghat, Plot.No.17-1-382/K/2/A, Champapet Rd, Vishnupuri Colony, Apsrtc Officers Colony, Champapet, Telangana 500079", "GREEN PARK COLONY,CHAMPAPET RTC COLONY", "7947105789", "https://maps.app.goo.gl/kGmYkBNdgvjcBFb6A"],

    ["SURYA TECHNOLOGIES", "8-99/7&8, Above Anutex Shopping Mall, Near Uppal Depot, Sai Nagar Colony, Peerzadiguda, Hyderabad, Telangana - 500098", "UPPAL BUS DEPOT,CANARA NAGAR", "9100010022", "https://maps.app.goo.gl/yxLatWaHFcQTbQ1S7"]

]

let centerTitles = []

let centerInfoPages = ["IDZ_LB_Nagar.html", "IDZ_Old_Alwal.html", "IDZ_Mallapur.html", "IDZ_Moula_Ali.html", "Laxman_IT_Academy.html", "MSR_IT_Academy.html", "Sez_Technologies_Solutions.html", "Surya_Technologies.html"]


// Text Modifiers
let centerName = document.querySelector("#centerName");
let centreAddress = document.querySelector("#centreAddress");
let centerMobileNumber = document.querySelector("#centerMobileNumber");
let nearestBusstop = document.querySelector("#nearestBusstop");
let mapsLink = document.querySelector("#mapsLink");

let aboutCenterParagraph = document.querySelector("#aboutCenterParagraph");

// Image Modifiers
let mainCenterPicture = document.querySelector("#mainCenterPicture");
let aboutCenterPicture = document.querySelector("#aboutCenterPicture");

let photoG1 = document.querySelector("#photoG1");
let photoG2 = document.querySelector("#photoG2");
let photoG3 = document.querySelector("#photoG3");

// Populating List Handles
let searchListContainer = document.querySelector("#searchList");

// inputs
let searchInput = document.querySelector("#searchInput");
let search_Button_Link = document.querySelector("#search_Button_Link");

let menu_Toggle = document.querySelector("#menu_Toggle");
let navigation_Bar = document.querySelector("#navigation_Bar");

// Chatbot Control Handles
let chatBotContentBox = document.querySelector("#chatBotContentBox");
let chatBotImageToggle = document.querySelector("#chatBotImageToggle");

let messagesContainer = document.querySelector("#messagesContainer");
let chatInputMessage = document.querySelector("#chatInputMessage");
let chatBotSendBtn = document.querySelector("#chatBotSendBtn");

let messageOptions = document.querySelector("#messageOptions");

let messageResponseAnimation = document.querySelector("#messageResponseAnimation");

let emailIdFooter = document.querySelector("#emailIdFooter");

let sentMessage;

centerData.forEach(element => {
    centerTitles.push(element[0])
});


function searchList(input) {
    const filteredArray = centerTitles.filter(item => item.toUpperCase().startsWith(input.toUpperCase()));

    searchListContainer.innerHTML = "";
    searchListContainer.style.display = "flex";
    let listContainer = document.createElement("ul");
    filteredArray.forEach(element => {
        let listItem = document.createElement("li");
        let title = document.createElement("span");
        let address = document.createElement("span");

        title.textContent = element;
        address.textContent = centerData[centerTitles.indexOf(element)][1];

        listItem.setAttribute("onclick", "selectCenter(this.children[0].innerText)")

        listItem.appendChild(title);
        listItem.appendChild(address);
        listContainer.appendChild(listItem);
        searchListContainer.appendChild(listContainer);

    });


    console.log(filteredArray)
}

function selectCenter(value) {
    searchInput.value = value;
    searchListContainer.style.display = "none";
    search_Button_Link.innerHTML = "Get Info";
}

function getInfo() {
    if (centerTitles.includes(searchInput.value)) {
        let pageLinkIndex = centerTitles.indexOf(searchInput.value);
        search_Button_Link.setAttribute("href", centerInfoPages[pageLinkIndex]);
    } else {
        search_Button_Link.removeAttribute("href");
        messageText.innerHTML = "Kindly Choose options from the List";
        msgCard.style.backgroundColor = "red";
        msgPopUp.style.marginTop = "100px";
        setTimeout(() => {
            msgPopUp.style.marginTop = "-100px";
        }, 2500);
    }
}

function openChatBot() {
    chatBotContentBox.classList.toggle("openChatBox");
    chatBotImageToggle.classList.toggle("closeIcon");
}

function closeChatBot() {
    chatBotContentBox.classList.remove("openChatBox");
    chatBotImageToggle.classList.remove("closeIcon");
}

function subscribedAlert() {

    if (emailIdFooter.value != "" && emailIdFooter.value.includes("@")) {
        messageText.innerHTML = "You have Subscribed to our Website Successfully !";
        msgCard.style.backgroundColor = "green";
        msgPopUp.style.marginTop = "100px";
        emailIdFooter.value = "";
        setTimeout(() => {
            msgPopUp.style.marginTop = "-100px";
        }, 2500);
    } else {
        messageText.innerHTML = "Please Enter your valid Mail Address!";
        msgCard.style.backgroundColor = "red";
        msgPopUp.style.marginTop = "100px";
        setTimeout(() => {
            msgPopUp.style.marginTop = "-100px";
        }, 2500);
    }
}
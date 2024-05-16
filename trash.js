

function preDefQuestionsClicked(message) {
    chatInputMessage.value = message.innerHTML;
    chatBotSendBtn.click();
}

function sendMessageToBot() {
    if (chatInputMessage.value == "") {

    } else {
        sentMessage = chatInputMessage.value;
        chatInputMessage.value = "";
        recieverIsSending(sentMessage);
        responseIndicator();
        setTimeout(() => {
            botIsSendingResponse(sentMessage, 1);
        }, 1000);

    }
}

function recieverIsSending(message) {
    let receiverChatPart = document.createElement("div");
    let receiver = document.createElement("div");
    let messageItem = document.createElement("div");
    let receiverMessage = document.createElement("p");
    let receiverIcon = document.createElement("img");

    receiverChatPart.classList.add("receiverChatPart");
    receiver.classList.add("senderImage");
    receiver.classList.add("receiver");
    messageItem.classList.add("messageItem");

    receiverMessage.textContent = message;

    receiverIcon.setAttribute("src", "images/Icons/user.png");

    messageItem.append(receiverMessage);
    receiver.appendChild(messageItem);
    receiver.appendChild(receiverIcon);
    receiverChatPart.appendChild(receiver);
    messagesContainer.appendChild(receiverChatPart);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    console.log(messagesContainer.scrollHeight)
}

function botIsSendingResponse(message, type) {
    let botChatPart = document.createElement("div");
    let SenderImage = document.createElement("div");
    let messageItem = document.createElement("div");
    let responseMessage = document.createElement("p");
    let botIcon = document.createElement("img");

    if (type == 1) {
        botChatPart.classList.add("receiverChatPart");
        SenderImage.classList.add("senderImage");
        messageItem.classList.add("messageItem");


        botIcon.setAttribute("src", "images/Icons/robot.png");

        messageItem.append(responseMessage);
        SenderImage.appendChild(botIcon);
        SenderImage.appendChild(messageItem);
        botChatPart.appendChild(SenderImage);


        let responseMessageText = responseGenerator(message);
        responseMessage.textContent = responseMessageText;
    } else {
        let messageItem2 = document.createElement("div");
        let responseMessage2 = document.createElement("p");

        messageItem2.classList.add("messageItem");
        responseMessage2.textContent = message;

        messageItem2.appendChild(responseMessage2);
        botChatPart.append(messageItem2);
    }

    messagesContainer.appendChild(botChatPart);
    setTimeout(() => {
        messagesContainer.appendChild(messageOptions);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


function responseGenerator(message) {
    let response;
    let response2;
    if (chatBotQuestions.includes(message.toUpperCase())) {
        response = chatBotAnswers[chatBotQuestions.indexOf(message.toUpperCase())];
        response2 = chatBotAnswers2[chatBotQuestions.indexOf(message.toUpperCase())];

        if (response2 == "-") {

        } else {
            setTimeout(() => {
                botIsSendingResponse(response2, 2);
            }, 500);
        }

    } else {
        response = "I'm sorry, I couldn't find the information you're looking for. Please try asking in a different way or choose questions from options";
    }



    return response;

}

function responseIndicator() {
    let botChatPart = document.createElement("div");
    let senderImage = document.createElement("div");
    let msgAnimation = document.createElement("div");
    let botIcon = document.createElement("img");

    let dot1 = document.createElement("p");
    let dot2 = document.createElement("p");
    let dot3 = document.createElement("p");
    let dot4 = document.createElement("p");

    botIcon.setAttribute("src", "images/Icons/robot.png");

    msgAnimation.classList.add("messageItem");
    msgAnimation.classList.add("msgAnimation");
    senderImage.classList.add("senderImage");
    botChatPart.classList.add("botChatPart");

    dot1.classList.add("dots");
    dot2.classList.add("dots");
    dot3.classList.add("dots");
    dot4.classList.add("dots");

    msgAnimation.appendChild(dot1);
    msgAnimation.appendChild(dot2);
    msgAnimation.appendChild(dot3);
    msgAnimation.appendChild(dot4);

    senderImage.appendChild(botIcon);
    senderImage.appendChild(msgAnimation);
    botChatPart.appendChild(senderImage);

    messagesContainer.appendChild(botChatPart);

    setTimeout(() => {
        botChatPart.remove()
    }, 1000);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

}
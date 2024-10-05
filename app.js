document.getElementById('send').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('message').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const currentTime = getTime();
        addMessage(messageText, 'sent', currentTime);
        messageInput.value = ''; 

        setTimeout(autoReply, 1000);
    }
}

function autoReply() {
    const autoReplies = [
        "salom",
        "qales",
        "nma",
        "yaxshi",
        "xm",
        "ok",
        "bopti"
    ];

    const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
    const currentTime = getTime();
    addMessage(randomReply, 'received', currentTime);
}

function addMessage(text, type, time) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    
    message.classList.add('message', type);
    message.innerHTML = `<p>${text}</p><span class="timestamp">${time} <span class="check-mark">&#10004;&#10004;</span></span>`;
    
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

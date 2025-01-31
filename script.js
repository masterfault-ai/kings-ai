function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        let chatBox = document.getElementById("chatBox");
        
        // User's message
        let userMessage = document.createElement("div");
        userMessage.classList.add("message");
        userMessage.innerHTML = `<p><strong>You:</strong> ${userInput}</p>`;
        chatBox.appendChild(userMessage);
        
        // AI's response (this is a simple placeholder, can be expanded with actual AI functionality)
        let aiMessage = document.createElement("div");
        aiMessage.classList.add("message");
        aiMessage.innerHTML = `<p><strong>AI:</strong> I'm working on a response!</p>`;
        chatBox.appendChild(aiMessage);
        
        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Clear the input field
        document.getElementById("userInput").value = "";
    }
}

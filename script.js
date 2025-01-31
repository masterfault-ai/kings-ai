function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        let chatBox = document.getElementById("chatBox");
        
        // User's message
        let userMessage = document.createElement("div");
        userMessage.classList.add("message");
        userMessage.innerHTML = `<p><strong>You:</strong> ${userInput}</p>`;
        chatBox.appendChild(userMessage);
        
        // Simulate AI response based on user input
        let aiMessage = document.createElement("div");
        aiMessage.classList.add("message");

        // Predefined responses
        let response = getAIResponse(userInput);

        aiMessage.innerHTML = `<p><strong>AI:</strong> ${response}</p>`;
        chatBox.appendChild(aiMessage);
        
        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Clear the input field
        document.getElementById("userInput").value = "";
    }
}

function getAIResponse(input) {
    // Here you can simulate different responses based on input
    if (input.toLowerCase().includes("hello")) {
        return "Hello! How can I help you today?";
    } else if (input.toLowerCase().includes("how are you")) {
        return "I'm doing great, thank you for asking!";
    } else if (input.toLowerCase().includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm not sure how to respond to that.";
    }
}

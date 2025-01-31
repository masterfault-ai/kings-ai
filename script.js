// Get references to the HTML elements
const textInput = document.getElementById("textInput");
const fontSelector = document.getElementById("fontSelector");
const fontSizeRange = document.getElementById("fontSizeRange");
const fontSizeLabel = document.getElementById("fontSizeLabel");
const previewText = document.getElementById("previewText");

// Function to update the preview text style
function updatePreview() {
    const font = fontSelector.value;
    const fontSize = fontSizeRange.value;
    
    previewText.style.fontFamily = font;
    previewText.style.fontSize = fontSize + "px";
    fontSizeLabel.textContent = fontSize + "px";
    
    // Update the preview text content with what the user types
    previewText.textContent = textInput.value ? textInput.value : "Your text will appear here";
}

// Event listeners to update the preview when the user changes input
textInput.addEventListener("input", updatePreview);
fontSelector.addEventListener("change", updatePreview);
fontSizeRange.addEventListener("input", updatePreview);

// Initial update on page load
updatePreview();

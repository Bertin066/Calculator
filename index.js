// Calculator functionality

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const clearBtn = document.getElementById("clear");
    const equalBtn = document.getElementById("equal");

    // Append input to the display
    window.displayNum = function(input) {
        display.textContent += input; 
    };

    // Clear the display
    window.clearDisplay = function() {
        display.textContent = "";
    };

    // Calculate the result safely
    window.calculate = function() {
        try {
            // Replace visual multiply/divide signs for eval
            let expression = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
            display.textContent = eval(expression);
        } catch (error) {
            display.textContent = "Error";
        }
    };

    // Wire up the C and = buttons
    clearBtn.addEventListener("click", clearDisplay);
    equalBtn.addEventListener("click", calculate);
});
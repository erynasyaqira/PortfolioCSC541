function calculate() {
    // Get input values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display BMI
    document.getElementById('score').innerText = bmi.toFixed(2);

    // Determine body type
    var type = '';
    if (bmi < 18.5) {
        type = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        type = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        type = 'Overweight';
    } else {
        type = 'Obese';
    }

    // Display body type
    document.getElementById('type').innerText = type;
}

function clearFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('score').innerText = '';
    document.getElementById('type').innerText = '';
}

 
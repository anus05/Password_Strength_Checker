const password = document.getElementById("password");
const strength = document.getElementById("strength");
const result = document.getElementById("result");

password.addEventListener("input", () => {
    let value = password.value;
    let score = 0;

    // Length
    if (value.length >= 8) {
        score++;
        document.getElementById("len").textContent = "✅ At least 8 characters";
    } else {
        document.getElementById("len").textContent = "❌ At least 8 characters";
    }

    // Uppercase
    if (/[A-Z]/.test(value)) {
        score++;
        document.getElementById("upper").textContent = "✅ Uppercase letter";
    } else {
        document.getElementById("upper").textContent = "❌ Uppercase letter";
    }

    // Lowercase
    if (/[a-z]/.test(value)) {
        score++;
        document.getElementById("lower").textContent = "✅ Lowercase letter";
    } else {
        document.getElementById("lower").textContent = "❌ Lowercase letter";
    }

    // Number
    if (/[0-9]/.test(value)) {
        score++;
        document.getElementById("num").textContent = "✅ Number";
    } else {
        document.getElementById("num").textContent = "❌ Number";
    }

    // Special char
    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
        document.getElementById("special").textContent = "✅ Special character";
    } else {
        document.getElementById("special").textContent = "❌ Special character";
    }

    // FINAL RESULT
    if (score <= 2) {
        strength.style.width = "30%";
        strength.style.background = "red";
        result.textContent = "❌ Weak Password";
        result.style.color = "red";
    } 
    else if (score <= 4) {
        strength.style.width = "65%";
        strength.style.background = "orange";
        result.textContent = "⚠️ Medium Password";
        result.style.color = "orange";
    } 
    else {
        strength.style.width = "100%";
        strength.style.background = "green";
        result.textContent = "✅ Strong Password";
        result.style.color = "green";
    }
});

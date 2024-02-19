//User Story 1
function isEan(artNum) {
    if (artNum.match(/[^0-9]/)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < artNum.length-1; i++) {
        if (i % 2 == 0) {
            sum += parseInt(artNum[i]);
        } else {
            sum += parseInt(artNum[i]) * 3;
        }
    }
    if (sum % 10 == artNum[artNum.length-1]) {
        return true;
    } else {
        return false;
    }
}

console.log(isEan("12345678905"));
console.log(isEan("1234567adi0"));



//User Story 2
console.log("User Story 2");
function strength(password) {
    safety = 0;

    //Testcase 1
    safety += password.length * 5;

    //Testcase 2
    let safetyPoints = [password.length,password.length,password.length,password.length];
    //0 = lowercase, 1 = uppercase, 2 = numbers, 3 = special characters
    for (let i = 0; i < password.length; i++) {
        if (password[i].match(/[^a-zA-Z0-9]/)) {
            safety += safetyPoints[3];
            safetyPoints[3] *= 0.5;
        }
        else if (password[i].match(/[0-9]/)) {
            safety += safetyPoints[2];
            safetyPoints[2] *= 0.5;
        } 
        else if (password[i] == password[i].toUpperCase()) {
            safety += safetyPoints[1];
            safetyPoints[1] *= 0.5;
        } else {
            safety += safetyPoints[0];
            safetyPoints[0] *= 0.5;
        }
    }
    return Math.round(safety);
}
console.log(strength("123456789"));
console.log(strength("1234567adi0"));
console.log(strength("abc"));
console.log(strength("/1!.dfi)HHl3"));


//User Story 3
console.log("User Story 3");
function rot13(text) {
    text = String(text);
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    for (let i=0; i < text.length; i++) {
        if (input.indexOf(text[i]) != -1) {
            const index = input.indexOf(text[i]);
            encoded += output[index];
        } else {
            encoded += text[i];
        }
    }
    return encoded;
}
console.log(rot13(15351));
console.log(rot13("Grfg"));
console.log(rot13(rot13("Test")));


//User Story 4
console.log("User Story 4");
function test(fu, arg, exp) {
    if (fu(arg) == exp) {
        return true;
    } else {
        return false;
    }
}
console.log(test(isEan, "12345678905", true));

//User Story 5
console.log("User Story 5");
function generate(op) {
    return function(a,b) {
        const erg = eval(a + op + b); //eval führt den String aus
        return erg;
    }
}
const mult = generate('*');
console.log(mult(3, 4));
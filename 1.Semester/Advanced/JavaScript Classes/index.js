class Complex {
    real;
    imaginary;

    constructor(real = 0, imaginary = "") {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(real = 0, imaginary = 0) {
        this.real += real;
        this.imaginary += imaginary;
        return this;
    }

    toString() {
        if (this.real === 0 && this.imaginary === "") {
            return "0";
        }
        if (this.imaginary > 0 || this.imaginary === "") {
            return this.real + "+" + this.imaginary + "i";
        }
        return this.real + "" + this.imaginary + "i";
    }
}

const num = new Complex(6,1203);
console.log(num.toString());

const num1 = new Complex(2, 5);
const num2 = new Complex(-3, -20);
num1.add(num2.real, num2.imaginary);
console.log(num1.toString());
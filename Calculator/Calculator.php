<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standard Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="row">
            <button onclick="appendValue('%')">%</button>
            <button onclick="clearEntry()">CE</button>
            <button onclick="clearDisplay()">C</button>
            <button onclick="deleteLast()">⌫</button>
        </div>
        <div class="row">
            <button onclick="reciprocal('1/x')">1/x</button>
            <button onclick="square()">x²</button>
            <button onclick="squareRoot()">√</button>
            <button onclick="appendValue('/')">÷</button>
        </div>
        <div class="row">
            <button onclick="appendValue('7')">7</button>
            <button onclick="appendValue('8')">8</button>
            <button onclick="appendValue('9')">9</button>
            <button onclick="appendValue('*')">×</button>
        </div>
        <div class="row">
            <button onclick="appendValue('4')">4</button>
            <button onclick="appendValue('5')">5</button>
            <button onclick="appendValue('6')">6</button>
            <button onclick="appendValue('-')">−</button>
        </div>
        <div class="row">
            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button onclick="appendValue('+')">+</button>
        </div>
        <div class="row">
            <button onclick="toggleSign()">+/-</button>
            <button onclick="appendValue('0')">0</button>
            <button onclick="appendValue('.')">.</button>
            <button class="equals" onclick="calculate()">=</button>
        </div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>

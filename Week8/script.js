function calculate(operator) {
    const a_value = parseFloat(document.getElementById('a_value').value);
    const b_value = parseFloat(document.getElementById('b_value').value);
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    errorDiv.textContent = '';
    resultDiv.textContent = '';
    if (isNaN(a_value) || isNaN(b_value)) {
        errorDiv.textContent = 'Điền lại số hợp lí';
        return;
    }
    if (operator === '/' && b_value === 0) {
        errorDiv.textContent = 'Không thể chia cho 0';
        return;
    }

    let result;
    switch (operator) {
        case '+': 
            result = a_value + b_value; 
            break;
        case '-': 
            result = a_value - b_value; 
            break;
        case '*': 
            result = a_value * b_value; 
            break;
        case '/': 
            result = a_value / b_value; 
            break;
        default: 
            errorDiv.textContent = 'Phép toán không hợp lệ!';
            return;
    }

    resultDiv.textContent = `Kết quả: ${result}`;
}

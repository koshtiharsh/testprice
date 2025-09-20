document.getElementById("calcBtn").addEventListener("click", () => {
    const price = parseFloat(document.getElementById("price").value);
    const profit = parseFloat(document.getElementById("profit").value);

    if (isNaN(price) || isNaN(profit)) {
        document.getElementById("result").innerText = "⚠️ Enter valid numbers!";
        return;
    }

    // Step 1: Divide price by 5
    let step1 = price / 5;

    // Step 2: Divide 10000 by step1
    let step2 = 10000 / step1;

    // Step 3: Multiply with profit
    let finalResult = step2 * profit;

    document.getElementById("result").innerText = "Result: " + finalResult.toFixed(2);
});

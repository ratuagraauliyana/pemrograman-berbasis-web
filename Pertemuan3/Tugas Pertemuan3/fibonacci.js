const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) fib[i] = (fib[i - 1] + fib[i - 2]);
    return fib;
};

// Menampilkan hasil di halaman web
document.body.innerHTML += `<h3>Deret Fibonacci:</h3><p>${fibonacci(26).join(", ")}</p>`;

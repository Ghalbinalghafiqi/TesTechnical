function checkModulus(input) {
    // Ubah input string menjadi array angka
    let arr = input.split('').map(Number);
    
    // Iterasi setiap elemen array dan cek modulus dengan indeks+1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % (i + 1) !== 0) {
            return "FALSE";
        }
    }
    return "TRUE";
}

// Contoh penggunaan
console.log(checkModulus("14")); // Output: "TRUE"
console.log(checkModulus("145")); // Output: "FALSE"
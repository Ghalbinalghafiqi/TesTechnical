function checkModulus(input) {
    // Ubah input string menjadi array angka
    let arr = input.split('').map(Number);
    
    // Iterasi setiap angka dalam array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % (i + 1) !== 0) {
            return "FALSE";
        }
    }
    
    return "TRUE";
}

// Contoh penggunaan
console.log(checkModulus("236")); // Output: "FALSE"
console.log(checkModulus("14")); // Output: "TRUE"
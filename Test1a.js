function solution(TinggiAwal, LamaHari, Pertumbuhan) {
    let tinggi = TinggiAwal;
    for (let i = 0; i < LamaHari; i++) {
        tinggi += tinggi * Pertumbuhan;
    }
    return tinggi.toFixed(2);
}

// Contoh penggunaan
console.log(solution(200, 5, 0.05)); // Output: 255.26
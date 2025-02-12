function solution(TinggiAwal, LamaHari, Pertumbuhan) {
    let tinggi = TinggiAwal;
    
    for (let i = 1; i <= LamaHari; i++) {
        tinggi += tinggi * Pertumbuhan;
    }
    
    console.log("Tinggi Akhir =", tinggi.toFixed(2));
}

solution(250, 2, 0.02);
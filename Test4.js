function solution(hargaProduk) {
    let totalHarga = 0;
    
    // Menjumlahkan harga produk menggunakan looping
    for (let i = 0; i < hargaProduk.length; i++) {
        totalHarga += hargaProduk[i];
    }
    
    let diskon = 0;
    let bonus = "";
    
    // Menentukan diskon dan bonus berdasarkan total harga
    if (totalHarga > 400000) {
        diskon = 0.10;
        bonus = "Ransel";
    } else if (totalHarga > 200000) {
        diskon = 0.07;
        bonus = "Payung";
    } else if (totalHarga > 70000) {
        diskon = 0.05;
        bonus = "Topi";
    }
    
    let nilaiDiskon = totalHarga * diskon;
    let hargaAkhir = totalHarga - nilaiDiskon;
    
    // Menampilkan output
    console.log("Total Harga =", totalHarga.toLocaleString("id-ID"));
    console.log("Diskon =", nilaiDiskon.toLocaleString("id-ID"));
    console.log("Bonus =", bonus);
    console.log("Harga Akhir =", hargaAkhir.toLocaleString("id-ID"));
}

// Contoh pemanggilan fungsi
solution([2000, 50000, 100000]);
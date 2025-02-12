function solution(noAkun, nominal) {
    let totalDebit = nominal[0];
    let totalKredit = 0;
    let output = [];

    // Proses setiap akun
    for (let i = 0; i < noAkun.length; i++) {
        let debit = i === 0 ? totalDebit : 0;
        let kredit = i > 0 ? nominal[i] : 0;
        totalKredit += kredit;
        output.push(`${noAkun[i]}-${debit}-${kredit}`);
    }

    // Menentukan status balance atau tidak
    let status = totalDebit === totalKredit ? "(Balance)" : "(Not Balance)";
    output.push(`#Total #${totalDebit} #${totalKredit} ${status}`);

    // Menampilkan hasil
    console.log("# Akun # Debit # Kredit");
    output.forEach(row => console.log(row));
}

// Contoh penggunaan
solution([111, 211, 201], [200000, 50000, 150000]);
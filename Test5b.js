function solution(noAkun, nominal) {
    let totalDebit = 0;
    let totalKredit = 0;
    let output = "# Akun # Debit # Kredit\n";
    
    for (let i = 0; i < noAkun.length; i++) {
        let debit = (i === 0) ? nominal[i] : 0;
        let kredit = (i === 1) ? nominal[i] : 0;
        totalDebit += debit;
        totalKredit += kredit;
        output += `${noAkun[i]}-${debit}-${kredit}\n`;
    }
    
    let status = (totalDebit === totalKredit) ? "Balance" : "Not Balance";
    output += `#Total #${totalDebit} #${totalKredit} (${status})`;
    
    console.log(output);
}

// Contoh pemanggilan function
solution([111, 201], [100000, 120000]);
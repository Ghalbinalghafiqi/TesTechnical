function solution(Tinggi) {
    for (let i = 1; i <= Tinggi; i++) {
        let spaces = " ".repeat(Tinggi - i);
        if (i === 1) {
            console.log(spaces + "*");
        } else {
            let stars = "*".repeat((i - 1) * 2);
            console.log(spaces + "/" + stars + "\\");
        }
    }
}

// Contoh penggunaan
solution(5);
function solution(Kata) {
    let kataArray = Kata.split("");
    
    for (let step = 0; step < 3; step++) {
        let seen = {};
        let result = [];
        
        for (let i = 0; i < kataArray.length; i++) {
            if (!seen[kataArray[i]]) {
                seen[kataArray[i]] = true;
                result.push(kataArray[i]);
            }
        }
        kataArray = result.slice(); // Menyimpan hasil terbaru untuk iterasi berikutnya
    }
    
    return kataArray.join("");
}

console.log(solution("Imagination")); // Output: Imagnto
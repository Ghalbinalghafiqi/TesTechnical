function solution(Kata) {
    let arr = Kata.split('');
    let seen = {};
    let iterations = 0;

    while (true) {
        let newArr = [];
        seen = {};
        let removed = false;

        for (let i = 0; i < arr.length; i++) {
            if (!seen[arr[i]]) {
                seen[arr[i]] = true;
                newArr.push(arr[i]);
            } else {
                removed = true;
            }
        }

        arr = newArr;
        iterations++;
        if (!removed) break; // Jika tidak ada duplikat yang dihapus, berhenti
    }

    return arr.join('');
}

console.log(solution("Association")); // Output: Asocitn

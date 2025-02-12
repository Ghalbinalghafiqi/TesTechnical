function stack(stackOperation, stackValue) {
    let storage = [
        1,
        { id: 1, value: "obj" }, 
        "stringHolder",
        46
    ];

    switch (stackOperation) {
        case "push":
            storage.push(stackValue);
            return storage;

        case "pop":
            return storage.length > 0 ? [storage.pop()] : [];

        case "peek":
            return storage.length > 0 ? [storage[storage.length - 1]] : [];

        case "swap":
            if (storage.length >= 2) {
                let top = storage.pop();
                let secondTop = storage.pop();
                storage.push(top);
                storage.push(secondTop);
            }
            return storage;

        default:
            return storage; // Jika operasi tidak valid, return stack tanpa perubahan
    }
}

console.log(stack("push", 99));  
// Output: [1, { id: 1, value: "obj" }, "stringHolder", 46, 99]

console.log(stack("pop"));  
// Output: [46]

console.log(stack("peek"));  
// Output: ["stringHolder"]

console.log(stack("swap"));  
// Output: [1, { id: 1, value: "obj" }, 46, "stringHolder"]

console.log(stack("invalid"));  
// Output: [1, { id: 1, value: "obj" }, "stringHolder", 46]
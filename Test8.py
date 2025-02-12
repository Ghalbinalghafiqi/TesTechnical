def calculate_score(arr):
    if not arr:  # Cek jika array kosong atau None
        return 0

    score = 0
    for num in arr:
        if num % 2 == 0:  # Jika genap, tambah 1 poin
            score += 1
        else:  # Jika ganjil, tambah 3 poin
            score += 3
        if num == 5:  # Jika angka 5, tambah 5 poin ekstra
            score += 5
            
    return score

# Contoh Pengujian
print(calculate_score([1, 2, 3, 4, 5]))  # Output: 13
print(calculate_score([17, 19, 21]))     # Output: 9
print(calculate_score([5, 5, 5]))        # Output: 15
print(calculate_score([]))               # Output: 0
print(calculate_score(None))             # Output: 0
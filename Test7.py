import re

def clean_titles(titles):
    # Gabungkan semua string dalam array menjadi satu string
    combined_string = " ".join(titles)

    # Hapus semua angka dari string
    cleaned_string = re.sub(r'\d+', '', combined_string)

    # Capitalize setiap kata
    formatted_string = cleaned_string.title()

    # Hapus spasi berlebih akibat penghapusan angka
    return " ".join(formatted_string.split())

# Contoh Pengujian
print(clean_titles(["break3ing news5:", "1A 1circle is round!"]))
# Output: "Breaking News: A Circle Is Round!"

print(clean_titles(["", "Fresh fried fish fish fresh fried"]))
# Output: "Fresh Fried Fish Fish Fresh Fried"

print(clean_titles(["2Here2", "is", "our STRING"]))
# Output: "Here Is Our STRING"

print(clean_titles(["123", "eat; sleep; repeat", "321"]))
# Output: "Eat; Sleep; Repeat"
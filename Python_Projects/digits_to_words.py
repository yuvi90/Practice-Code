phone_num = input("Enter phone number : ")
digit_words_mappig = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four"
}

in_words = ""
for num in phone_num:
    in_words += digit_words_mappig.get(num, "!") + " "
print(in_words)
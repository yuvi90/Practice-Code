emoji = {
    ":)": "😁",
    ":(": "🥲",
}

msg = input(">")
words = msg.split(' ') # splits string on space
output = ""
for word in words:
    output += emoji.get(word, word) + " "

print(output)
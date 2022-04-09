with open("./src./assets./words.txt", "r") as f:
    words = f.readlines()

for w in words:
    if words.count(w) >= 2:
        print(w.strip())

with open("./src./assets./words.json", "w") as f:
    f.write("[")
    for w in words[:-1]:
        f.write('"' + w.strip() + '", ')
    f.write('"' + words[-1].strip() + '"')
    f.write("]")

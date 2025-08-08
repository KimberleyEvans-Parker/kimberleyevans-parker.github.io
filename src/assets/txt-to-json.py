
def getWordsFromFile(filename):
    with open(filename, "r") as f:
        return f.readlines()
    

def parseWords(words):
    new_words = []

    for word in words:
        if word[0].islower():
            tmp = word.split()
            for new_word in tmp:
                if new_word not in new_words:
                    new_words.append(new_word)

    return new_words


def writeWordsToFile(filename, words):
    with open(filename, "w") as f:
        f.write("[\n")
        for w in words[:-1]:
            f.write('"' + w.strip() + '",\n')
        f.write('"' + words[-1].strip() + '"')
        f.write("]")



words = getWordsFromFile("./src./assets./words.txt")
new_words = parseWords(words)

print(new_words[:20])

writeWordsToFile("./src./assets./words.json", new_words)

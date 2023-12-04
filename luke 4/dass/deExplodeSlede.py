otp = [23, 2, 0, 5, 13, 16, 22, 7, 9, 4, 19, 21, 18, 10, 20, 11, 12, 14, 6, 1, 3, 8, 17, 15]


inp = []
with open("pinneved.txt", "r") as file:
    inp = file.read()

n = len(inp) // 24
arr = [inp[i:i+n] for i in range(0,len(inp), n)]

def reverseScramble(input):
    svar = ["@@@@@@@@@@@@"] * len(input)
    iterator = otp.copy()
    iterator.reverse()
    for i in range(len(iterator)):
        svar[iterator[i]] = input[i]
    return svar
def reverseShift(input):
    return [''.join([chr(ord(c) - 2) for c in fragment]) for fragment in input]

def implode(input):
    return "".join(input)


def reverse(input):
    return implode(reverseShift(reverseScramble(input)))

with open("svar.txt", "w") as file:
    file.write(reverse(arr))
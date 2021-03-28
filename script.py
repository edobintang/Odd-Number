#define class to get array of odd numbers
class OddNumbers(object):
    oddNumbers = []

    @staticmethod
    def fillOddNumber():
        iteratorNum = 0

        while len(OddNumbers.oddNumbers) < 20:
            if iteratorNum % 2 != 0:
                OddNumbers.oddNumbers.append(iteratorNum)
            iteratorNum += 1

        return OddNumbers.oddNumbers

print(OddNumbers.fillOddNumber())


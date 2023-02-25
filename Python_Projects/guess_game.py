secret_number = 9
guess_count = 1
guess_limit = 3
while guess_count <= guess_limit:
    guess = int(input('Enter Numter : '))
    if guess == secret_number:
        print("You won!")
        break
    if guess_count != guess_limit:
        print("Try Again!")
    guess_count += 1
else:
    print("Sorry, You failed!")
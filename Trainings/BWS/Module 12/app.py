import random

def get_user_choice():
    choice = input("Choose rock (r), paper (p), or scissors (s): ")
    while choice not in ['r', 'p', 's']:
        print("Invalid choice. Please try again.")
        choice = input("Choose rock (r), paper (p), or scissors (s): ")
    return choice

def get_computer_choice():
    choices = ['r', 'p', 's']
    return random.choice(choices)

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == 'r' and computer_choice == 's') or \
         (user_choice == 'p' and computer_choice == 'r') or \
         (user_choice == 's' and computer_choice == 'p'):
        return "You win!"
    else:
        return "You lose!"


print("Let's play Rock, Paper, Scissors!")
while True:
    user_choice = get_user_choice()
    computer_choice = get_computer_choice()
    print(f"You chose {user_choice}")
    print(f"The computer chose {computer_choice}")
    winner = determine_winner(user_choice, computer_choice)
    print(winner)
    if winner == "You win!":
        break
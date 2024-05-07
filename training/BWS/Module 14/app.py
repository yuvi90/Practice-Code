# Withdrawl and Deposit
# Write the transaction to a file
# While True
# input
# classes
# open()
# method
# properties
from datetime import datetime


class Bank:
    def __init__(self, initial_amount=0.00):
        self.balance = initial_amount
        with open("transactions.txt", "w") as file:
            file.write(
                f"Date\t\t\t\t\t\tDeposits\t\t\tWithdrawls\t\t\tBalance = {initial_amount}\n\n")

    def withdraw(self, amount):
        try:
            amount = float(amount)
        except ValueError:
            amount = 0
        if self.balance < amount:
            print("Insufficient Balance")
            return
        self.balance = self.balance - amount
        self.update_transaction(amount, 'w')

    def deposit(self, amount):
        try:
            amount = float(amount)
        except ValueError:
            amount = 0
        self.balance = self.balance + amount
        self.update_transaction(amount, 'd')

    def update_transaction(self, amount, type):
        with open("transactions.txt", "a") as file:
            now = datetime.now()
            date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
            if (type == 'd'):
                file.write(
                    f"{date_time}\t\t{amount}\t\t\t\t\t\t\t\t\t{self.balance}\n")
                print("Transaction Successful!")
            if (type == 'w'):
                file.write(
                    f"{date_time}\t\t\t\t\t\t\t{amount}\t\t\t\t{self.balance}\n")
                print("Transaction Successful!")


account = Bank(50.00)
while True:
    user_input = input(
        "Press (d) to Deposit, (w) to Withdraw or (q) to Quit !\n").lower()
    if user_input == 'd':
        amount = float(input("Please enter amount you want to deposit : "))
        account.deposit(amount)
    elif user_input == 'w':
        amount = float(input("Please enter amount you want to withdraw : "))
        account.withdraw(amount)
    elif user_input == 'q':
        exit()
    else:
        print("Invalid input, Please try again !")

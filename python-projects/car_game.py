command = ""
started = False
while command.lower() != "quit":  # lower method to avoid case sensitive
    command = input('>')
    if command.lower() == "help":
        print("""start - to start the car
stop - to stop the car
quit - to exit""")
    elif command.lower() == "start":
        if started != True:
            print("Car started...Ready to go!")
            started = True
        else:
            print("Car already started!")
    elif command.lower() == "stop":
        if started != False:
            print("Car stopped.")
            started = False
        else:
            print("Car already stopped!")
    elif command.lower() == "quit":
        print("Exiting...")
        break
    else:
        print("Sorry, I don't understand that!")

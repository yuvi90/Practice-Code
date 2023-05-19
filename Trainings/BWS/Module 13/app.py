import requests

print("Welcome to Pokedex !")

while True:
    user_input = input("Press (s) to Start or (q) to Quit\n")
    user_input.lower()
    if user_input == 's':
        while True:
            pokemon_name = input("Enter pokemon for details : ")
            pokemon_name = pokemon_name.lower()
            api = f"https://pokeapi.co/api/v2/pokemon/{pokemon_name}"
            req = requests.get(api)
            if req.status_code == 200:
                data = req.json()
                print(f"Name : {data['name'].capitalize()}")
                print("Abilities : ")
                for ability in data['abilities']:
                    print(f"  - {ability['ability']['name'].capitalize()}")
                print(f"Weight : {data['weight'].capitalize()} lbs")
                print(f"Type : {data['type'][0]['type'].capitalize()}")
            else:
                print("Invalid input, Try  Again!")
    elif user_input == 'q':
        exit()
    else:
        print('Invalid input, Try Again!')

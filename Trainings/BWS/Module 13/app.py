import requests

print("Welcome to Pokedex !")
while True:
    user_input = input(
        "Press (s) to Enter Pokemon or Press (q) to Quit\n").lower()
    if user_input == 's':
        pokemon_name = input("Enter Pokemon Name : ").lower()
        api = f"https://pokeapi.co/api/v2/pokemon/{pokemon_name}"
        req = requests.get(api)
        if req.status_code == 200:
            data = req.json()
            print(f"Name : {data['name'].capitalize()}")
            print("Abilities : ")
            for ability in data['abilities']:
                print(f"  - {ability['ability']['name'].capitalize()}")
            print(f"Weight : {data['weight']} lbs")
            print(f"Type : {data['types'][0]['type']['name'].capitalize()}")
        else:
            print("Invalid input, Try  Again!")
    elif user_input == 'q':
        exit()
    else:
        print('Invalid input, Try Again!')

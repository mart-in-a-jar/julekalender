# Javascript sliter med store tall, så lagde python-versjon

def parse_input(input_str):
    return [[int(hour) for hour in day.split(",")] for day in input_str.split("\n")]

def find_optimal_trade(day):
    lowest, highest = None, None
    biggest_diff = 0

    for i in range(len(day)):
        num_ref = day[i]
        for j in range(i + 1, len(day)):
            num_check = day[j]
            if num_check - num_ref > biggest_diff:
                lowest, highest = num_ref, num_check
                biggest_diff = highest - lowest

    return {"buy": lowest, "sell": highest}

def calculate_max_number_of_stocks_which_can_be_bought(money, price):
    return money // price

def calculate_daily_wins(amount, sell_price):
    return amount * sell_price

def calculate_trade(money, buy_price, sell_price):
    number_bought = calculate_max_number_of_stocks_which_can_be_bought(money, buy_price)
    left_over_money = money - number_bought * buy_price
    winnings = number_bought * sell_price

    return winnings + left_over_money

def calculate_day(day, initial_money):
    optimal_trade = find_optimal_trade(day)
    buy, sell = optimal_trade["buy"], optimal_trade["sell"]

    return calculate_trade(initial_money, buy, sell)

def calculate_all_days(days_array, initial_money):
    money = initial_money
    for day in days_array:
        money = calculate_day(day, money)
    print(f"Nissen sitter igjen med {money}kr")
    return money


with open("input.txt", "r") as file:
    input_str = file.read()

starting_money = 200000
calculate_all_days(parse_input(input_str), starting_money)

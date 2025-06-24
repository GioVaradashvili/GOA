# 1. სიტყვის რიცხვი ტექსტში
def word_count(text):
    """
    ითვლის, რამდენი სიტყვაა ტექსტში.
    :param text: ტექსტი
    :return: სიტყვის რაოდენობა
    """
    words = text.split()  
    return len(words)

def check_number():
    """
    ამოწმებს რიცხვის დადებითობას, უარყოფითობას ან ნულოვანობას.
    """
    num = float(input("შეიყვანეთ რიცხვი: "))
    if num > 0:
        print("რიცხვი დადებითია.")
    elif num < 0:
        print("რიცხვი უარყოფითია.")
    else:
        print("რიცხვი ნულია.")


def categorize_age():

    age = int(input("შეიყვანეთ თქვენი ასაკი: "))
    if age < 13:
        print("ბავშვი.")
    elif 13 <= age < 20:
        print("თინეიჯერი.")
    elif 20 <= age < 60:
        print("ზრდასრული.")
    else:
        print("ხანდაზმული.")

def separate_even_odd(numbers):

    even = []
    odd = []
    for num in numbers:
        if num % 2 == 0:
            even.append(num)
        else:
            odd.append(num)
    return even, odd

def find_average(numbers):

    if len(numbers) == 0:
        return 0
    total = sum(numbers)
    average = total / len(numbers) 
    return average
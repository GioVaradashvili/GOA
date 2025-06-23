# 1. სიტყვის რიცხვი ტექსტში
def count_words(text):
    words = text.split()  # ტექსტი გადადის სიტყვებად
    return len(words)  # უკან აბრუნებს სიტყვების რაოდენობას

# 2. პირობითი ოპერაცია რიცხვის დადებითობის შემოწმებისთვის
def check_number_sign(number):
    if number > 0:
        print("დადებითი რიცხვი")
    elif number < 0:
        print("უარყოფითი რიცხვი")
    else:
        print("ნულოვანი რიცხვი")

# 3. მომხმარებლის ასაკის კატეგორიზაცია
def categorize_age(age):
    if age < 18:
        return "მოზარდი"
    elif 18 <= age <= 64:
        return "ზრდასრული"
    else:
        return "მოხუცი"

# 4. ლუწი და კენტ რიცხვთა სიის პოვნა
def separate_even_odd(numbers):
    even_numbers = []
    odd_numbers = []
    
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
        else:
            odd_numbers.append(num)
    
    return even_numbers, odd_numbers

# 5. საშუალო რიცხვის პოვნა ფუნქციით
def average_of_numbers(numbers):
    if len(numbers) == 0:
        return 0  # თუ სია ცარიელია, ერის საშუალო ვერ გამოითვლება
    total = sum(numbers)
    return total / len(numbers)
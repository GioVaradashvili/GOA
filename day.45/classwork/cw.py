# 2. ფუნქცია: რაოდენობის დათვლა
def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count

# 3. ფუნქცია: ჯამის გამოთვლა
def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total

# 4. ფუნქცია: საშუალო მნიშვნელობის გამოთვლა
def average_of_list(num_list):
    total = sum_of_list(num_list)
    count = len(num_list)
    if count == 0:  # სია არ უნდა იყოს ცარიელი
        return 0
    return total / count

# 5. ფუნქცია: სიის გადაბრუნება
def reverse_list(items):
    reversed_list = []
    for item in items:
        reversed_list.insert(0, item)
    return reversed_list
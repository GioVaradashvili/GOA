
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for sublist in list_of_lists:
    sum_of_sublist = 0
    print("twin numbers:", end=" ")
    for number in sublist:
        sum_of_sublist += number
        if number % 2 == 0:
            print(number, end=" ")
    print(f"\n{sublist} list: {sum_of_sublist}\n")
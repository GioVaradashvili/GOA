def best_student():
    students = {}
    num_students = int(input("შეიყვანეთ სტუდენტების რაოდენობა: "))
    
    for _ in range(num_students):
        name = input("შეიყვანეთ სტუდენტის სახელი: ")
        grades = list(map(int, input(f"შეიყვანეთ {name}-ის ნიშნები (გამოყავით მძიმით): ").split(',')))
        avg_grade = sum(grades) / len(grades)
        students[name] = avg_grade
    
    best = max(students, key=students.get)
    print(f"საუკეთესო სტუდენტი: {best} (საშუალო ნიშანი: {students[best]:.2f})")

def process_scores():
    scores = list(map(int, input("შეიყვანეთ ქულები (გამოყავით მძიმით): ").split(',')))
    maximum = max(scores)
    minimum = min(scores)
    average = sum(scores) / len(scores)
    
    print(f"მაქსიმალური ქულა: {maximum}")
    print(f"მინიმალური ქულა: {minimum}")
    print(f"საშუალო ქულა: {average:.2f}")

def filter_scores():
    scores = list(map(int, input("შეიყვანეთ ქულები (გამოყავით მძიმით): ").split(',')))
    filtered = [score for score in scores if score > 50]
    print("50-ზე მეტი ქულა:")
    print(filtered)

def reverse_numbers():
    numbers = list(map(int, input("შეიყვანეთ რიცხვები (გამოყავით მძიმით): ").split(',')))
    reversed_numbers = numbers[::-1]
    print("შებრუნებული რიცხვები:")
    print(reversed_numbers)

def find_average():
    numbers = list(map(int, input("შეიყვანეთ რიცხვები (გამოყავით მძიმით): ").split(',')))
    if len(numbers) == 0:
        print("სია ცარიელია.")
        return
    average = sum(numbers) / len(numbers)
    print(f"სიის საშუალო მნიშვნელობა: {average:.2f}")

def main():
    while True:
        print("\n--- მენიუ ---")
        print("1. საუკეთესო სტუდენტის პოვნა")
        print("2. ქულების მაქსიმუმი, მინიმუმი და საშუალო მნიშვნელობა")
        print("3. ქულების ფილტრაცია (50-ზე მეტი)")
        print("4. რიცხვების შებრუნება")
        print("5. საშუალო მნიშვნელობის პოვნა")
        print("0. პროგრამის დასრულება")
        
        choice = input("აირჩიეთ ოპცია (0-5): ")
        
        if choice == "1":
            best_student()
        elif choice == "2":
            process_scores()
        elif choice == "3":
            filter_scores()
        elif choice == "4":
            reverse_numbers()
        elif choice == "5":
            find_average()
        elif choice == "0":
            print("პროგრამა დასრულდა. ნახვამდის!")
            break
        else:
            print("არასწორი არჩევანი. სცადეთ თავიდან.")
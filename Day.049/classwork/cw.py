def best_student():
    students = {}
    
    # მომხმარებლისგან სტუდენტების და მათი ნიშნების მიღება
    while True:
        name = input("შეიყვანეთ სტუდენტის სახელი (ან დაამთავრეთ ჩაწერა 'დასრულება'): ")
        if name == 'დასრულება':
            break
        try:
            grade = float(input(f"{name} - შეიყვანეთ სტუდენტის ნიშანი: "))
            students[name] = grade
        except ValueError:
            print("გთხოვთ, შეიყვანოთ ვალიდური რიცხვი.")
    
    if students:
        # საუკეთესო სტუდენტის გამოთვლა
        best_student_name = max(students, key=students.get)
        best_student_grade = students[best_student_name]
        
        # საშუალო ნიშნის გამოთვლა
        average_grade = sum(students.values()) / len(students)
        
        # შედეგების გამოჩენა
        print(f"საუკეთესო სტუდენტი: {best_student_name} - {best_student_grade}")
        print(f"საშუალო ნიშანი: {average_grade:.2f}")
    else:
        print("სტუდენტების მონაცემები არ არის მიღებული.")
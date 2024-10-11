def grades(grade):
    if grade  <= 0 :
        return "F"
    elif grade < 50 :
        return "B"
    elif grade < 70 :
        return "C"
    elif grade < 80 :
        return "B"
    elif grade < 100 :
        return "A"
    elif grade ==  100 :
        return "perfect score"
    elif grade == 100 :
        return "perfect score"
    
name = input('please enter your name: ')
grades = int(input('please enter your sign: '))
grade = grades
print(grades(grades))
print(name,'your score is',grades)

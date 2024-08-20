def string_lenght(strings):
    name_list = []
    for i in strings:
        name_list.append(len(i))
    return name_list

print(string_lenght(["gio", "data", "mateo"]))
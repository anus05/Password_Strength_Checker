def password_checker_strength(password):
    length=len(password)>=8
    upper=any(char.isupper() for char in password)
    lower=any(char.islower() for char in password)
    digit=any(char.isdigit() for char in password)
    special=any(char in "!@#$%^&*()_-+=<>?/|" for char in password)
    score= sum([length,digit,upper,lower,special])  
    if score<=2:
        return "Weak password"
    elif score==3 or score==4:
        return "Medium Password"
    else:
        return "Strong Password"

password = input("Enter your password: ")
result = password_checker_strength(password)
print("Password Strength:", result)
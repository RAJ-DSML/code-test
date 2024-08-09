def is_palindrome(number):
    original_str = str(number)
    reversed_str = original_str[::-1]
    
    return original_str == reversed_str

number = int(input("Enter a number: "))

if is_palindrome(number):
    print(f"{number} is a palindrome number.")
else:
    print(f"{number} is not a palindrome number.")
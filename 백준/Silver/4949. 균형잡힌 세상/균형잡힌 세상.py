def check_brackets(line):
    if line == "." or line.strip() == "":
        return "yes"
        
    bracket_stack = []
    
    for char in line:
        if char in '[(': 
            bracket_stack.append(char)
        elif char == ']':
            if not bracket_stack or bracket_stack[-1] != '[':
                return "no"
            bracket_stack.pop()
        elif char == ')':
            if not bracket_stack or bracket_stack[-1] != '(':
                return "no"
            bracket_stack.pop()
  
    return "yes" if not bracket_stack else "no"

while True:
    line = input()
    if line == ".":  
        break
    print(check_brackets(line))
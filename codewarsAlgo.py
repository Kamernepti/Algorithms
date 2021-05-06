# Jaden Casing Strings
# quote = "How can mirrors be real if our eyes aren't real"
# test.assert_equals(to_jaden_case(quote), "How Can Mirrors Be Real If Our Eyes Aren't Real")

import re

def to_jaden_case(string):
    return re.sub(r"[A-Za-z]+('[A-Za-z]+)?",
        lambda mo:
        mo.group(0)[0].upper()+
        mo.group(0)[1:].lower(), string)
    
    result = (titlecase(string))
    print(result)
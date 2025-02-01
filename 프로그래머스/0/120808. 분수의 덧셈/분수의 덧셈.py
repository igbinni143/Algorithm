from fractions import Fraction

def solution(numer1, denom1, numer2, denom2):
    b = (numer1*denom2) + (numer2*denom1)
    a = denom2*denom1
    afraction = Fraction(b,a) 
    answer=[afraction.numerator, afraction.denominator]
    return answer

solution(9, 2, 1, 3)
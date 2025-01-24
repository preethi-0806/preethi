// palindrome or not:
#include <stdbool.h>
#include <stdio.h>
#include <limits.h>

bool isPalindrome(int x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    int reversed = 0;
    int original = x;

    while (x > 0) {
        if (reversed > (INT_MAX / 10) || (reversed == INT_MAX / 10 && x % 10 > 7)) {
            return false;
        }
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }

    return original == reversed;
}

int solution() {
    int x = 121;
    printf("%s\n", isPalindrome(x) ? "true" : "false");

    x = -121;
    printf("%s\n", isPalindrome(x) ? "true" : "false");

    x = 10;
    printf("%s\n", isPalindrome(x) ? "true" : "false");

    x = 998765432;
    printf("%s\n", isPalindrome(x) ? "true" : "false");

    return 0;
}

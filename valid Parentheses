
    // validating a paranthesis in string
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char *s) {
    char stack[10000];
    int top = -1;

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        
        if (c == '(' || c == '{' || c == '[') {
            stack[++top] = c;
        } else {
            if (top == -1) {
                return false;
            }
            char topChar = stack[top--];
            if ((c == ')' && topChar != '(') ||
                (c == '}' && topChar != '{') ||
                (c == ']' && topChar != '[')) {
                return false;
            }
        }
    }

    return top == -1;
}

int solution() {
    char s1[] = "()";
    printf("%s\n", isValid(s1) ? "true" : "false");

    char s2[] = "()[]{}";
    printf("%s\n", isValid(s2) ? "true" : "false");

    char s3[] = "(]";
    printf("%s\n", isValid(s3) ? "true" : "false");

    char s4[] = "([])";
    printf("%s\n", isValid(s4) ? "true" : "false");

    return 0;
}

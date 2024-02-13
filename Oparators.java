import java.util.Scanner;

public class Oparators {
    public static void main(String[] args) {
        int a = 20;
        int b = 20;
        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
        System.out.println(a < b);
        System.out.println(a > b);
        System.out.println(a <= b);
        System.out.println(a >= b);
        System.out.println(a == b);
        System.out.println(a != b);

        try (Scanner scn = new Scanner(System.in)) {
            int n = scn.nextInt();
            if (n % 2 == 0) {
                System.out.println("Even Number");
            } else {
                System.out.println("Odd Number");
            }
        }
    }
}

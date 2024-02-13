import java.util.Scanner;

public class Conditions {
    public static void main(String[] args) {
        try (Scanner scn = new Scanner(System.in)) {
            System.out.println("Enter month number : ");
            int n = scn.nextInt();
            switch (n) {
                case 1 -> {
                    System.out.println("Month Name January");
                    System.out.println("31 Days");
                }
                case 2 -> {
                    System.out.println("Month Name February");
                    System.out.println("28 Days");
                }
                case 3 -> {
                    System.out.println("Month Name March");
                    System.out.println("31 Days");
                }
                case 4 -> {
                    System.out.println("Month Name April");
                    System.out.println("30 Days");
                }
                case 5 -> {
                    System.out.println("Month Name May");
                    System.out.println("31 Days");
                }
                case 6 -> {
                    System.out.println("Month Name June");
                    System.out.println("30 Days");
                }
                case 7 -> {
                    System.out.println("Month Name July");
                    System.out.println("31 Days");
                }
                case 8 -> {
                    System.out.println("Month Name August");
                    System.out.println("31 Days");
                }
                case 9 -> {
                    System.out.println("Month Name September");
                    System.out.println("30 Days");
                }
                case 10 -> {
                    System.out.println("Month Name October");
                    System.out.println("31 Days");
                }
                case 11 -> {
                    System.out.println("Month Name November");
                    System.out.println("30 Days");
                }
                case 12 -> {
                    System.out.println("Month Name December");
                    System.out.println("31 Days");
                }
                default -> {
                    System.out.println("Invalid month!!!");
                }
            }

            System.out.println("Enter any Character : ");
            char ch = scn.next().charAt(0);
            switch (ch) {
                case 'a', 'e', 'i', 'o', 'u' -> System.out.println("Vowel");
                default -> System.out.println("Not A Vowel");
            }

            int age = 20;
            String citizenShip = "Indian";
            if (age >= 18 || citizenShip == "Indian") {
                System.out.println("Can Vote");
            } else {
                System.out.println("Cannot Vote");
            }

            System.out.println("Enter any Number : ");
            int num = scn.nextInt();
            int temp = num;
            int count = 0;
            while (temp != 0) {
                count++;
                temp /= 10;
            }
            System.out.println("Count of digits in " + num + " is " + count);
        }
    }
}

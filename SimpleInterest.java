import java.util.Scanner;

public class SimpleInterest {
    public static void main(String[] args) {
        try (Scanner scn = new Scanner(System.in)) {
            int p = scn.nextInt();
            int r = scn.nextInt();
            int t = scn.nextInt();
            System.out.println("Simple interest will be " + ((p * r * t) / 100));
        }
    }
}

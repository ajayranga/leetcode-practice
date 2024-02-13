import java.util.Scanner;

public class dataTypes {
    public static void main(String[] args) {
        int x = 999;
        char x1 = '9';
        boolean x2 = true;
        boolean x3 = false;

        byte b = (byte) 220;
        short s = 344;
        int i = 34444;
        long l = 38888_865656675_7757L;

        float f = 333.1F;
        double d = 4444.4444D;
        System.out
                .println("x = " + x + " x1 = " + x1 + " x2 = " + x2 + " x3 = " + x3 + " b = " + b + " s = " + s
                        + " i = " + i
                        + " l = " + l + " f = " + f + " d = " + d);

        String str = "Hello World";
        System.out.println("str = " + str);
        System.out.println(str.charAt(4));
        String str2 = """
                frfreġ2221'''''''''''''''''''''''''''''''''''
                '''''''''''''''''''''''''''''''
                ''''''''''''''''''''''''
                [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]'
                """;
        System.out.println("str2 = " + str2);

        try (Scanner sc = new Scanner(System.in)) {
            // String sct = sc.nextLine();
            // boolean bl = sc.nextBoolean();
            char ch = sc.next().charAt(0);
            System.out.println("ch = " + ch);
        }

    }
}

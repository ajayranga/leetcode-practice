public class MinDist {
    public static void main(String[] args) {
        String A = "x...o.x...o";
        int dis = -1;
        // for (int i = 0; i < A.length(); i++) {
        // if (A.charAt(i) == 'x') {
        // for (int j = i + 1; j < A.length(); j++) {
        // if (A.charAt(j) == 'o') {
        // if (dis != -1) {
        // dis = Math.min(dis, j - i);
        // } else {
        // dis = j - i;
        // }
        // }
        // }
        // } else if (A.charAt(i) == 'o') {
        // for (int j = i + 1; j < A.length(); j++) {
        // if (A.charAt(j) == 'x') {
        // if (dis != -1) {
        // dis = Math.min(dis, j - i);
        // } else {
        // dis = j - i;
        // }
        // }
        // }
        // }
        // }
        int o = -1, x = -1;
        for (int i = 0; i < A.length(); i++) {
            if (A.charAt(i) == 'o') {
                o = i;
            }
            if (A.charAt(i) == 'x') {
                x = i;
            }
            if (o != -1 && x != -1) {
                if (dis != -1) {
                    dis = Math.min(dis, Math.abs(x - o));
                } else {
                    dis = Math.abs(x - o);
                }
            }
        }
        System.out.println(dis);
        String[] X = { "a", "aa", "aab", "b", "bb", "bba", "bbb" };
    }
}

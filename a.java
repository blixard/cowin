public class a{
    public static void main(String [] args){
        // float rand = (float) Math.random();
        // System.out.println(Math.round(-7.5));
        // System.out.println(Math.abs(-7.5));
        // System.out.println(Math.ceil(-7.5));
        // System.out.println(Math.floor(-7.5));
        System.out.println(confusion(2));
    }

    public static int confusion(int n){
        if(n>10){
            return n-1;
        }

        return confusion(confusion(n+5));
    }
}
import java.util.*;
import java.io.*;
import java.lang.Math;

public class Roman {
    public static void main(String args[]){
        Roman obj = new Roman();
        Scanner sc = new Scanner(System.in);
        System.out.print("enter a roman number in capital letters:");
        String inputRoman = sc.nextLine();
        System.out.println("the integer value of given roman number is: "+obj.romanToInt(inputRoman));

    }

    int NumValue(char rom){
        if(rom == 'I')
        return 1;
        if(rom == 'V')
        return 5;
        if(rom == 'X')
        return 10;
        if(rom == 'L')
        return 50;
        return -1;
    }
    int romanToInt(String str) {
        int sum = 0;
        for(int i = 0; i<str.length(); i++)
        {
            int v1 = NumValue(str.charAt(i));
            if(i+1 < str.length()){
                int v2 = NumValue(str.charAt(i+1));
                if(v1 >= v2){
                    sum = sum + v1;
                }
                else{
                    sum = sum - v1;
                }
            }
            else {
                sum = sum + v1;
            }
        }
        return sum;
    }
    
}

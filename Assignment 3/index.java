import java.util.Scanner; 

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    String str,letter,newStr;
    System.out.println("Enter username"); 
    str = myObj.nextLine().toLowerCase(); 
	
    System.out.println("Enter letter");
	letter = myObj.nextLine().toLowerCase();   
	
	int index = str.indexOf(letter)+1;
	if(index == 0){
		System.out.println("The letter does not exist in the sentence");
	}else{
		newStr = str.substring(index);
		System.out.println(newStr);
	}
  }
}
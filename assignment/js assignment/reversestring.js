var string = "today is very sunny day";

var reverseallstrings = reverseWord(string,"");
console.log(reverseallstrings);

 var output = reverseWord(reverseallstrings," ");
 console.log(output);

function reverseWord(string,separator){
  return string.split(separator).reverse().join(separator);
}
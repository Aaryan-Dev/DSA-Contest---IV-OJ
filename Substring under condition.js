// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.

// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.


function subStrUnderCond(s){
    let bag = "";
    let count = 0;
    for(j=0; j<s.length; j++){
   for(i=j; i<s.length; i++){
       bag = bag + s[i];
       if(bag[0]==bag[bag.length-1]){
          count++;  
            }
   }
       bag = "";
}
console.log(count);
}




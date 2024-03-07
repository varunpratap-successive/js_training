//Question4->Write a program to convert given string to upperCase OR lowerCase

let str="heloE";
let lowercasestr="";
let uppercasestr="";

function lowercase(str){
for(let i=0;i<str.length;i++)
 {if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
    { 
        let char=String.fromCharCode(str.charCodeAt(i)+32);
        lowercasestr+=char;
    
    }
   else
   lowercasestr+=str[i];
 }
 console.log("lowercase: ",lowercasestr);
}
 


function uppercase(str){
    for(let i=0;i<str.length;i++)
     {if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
        { 
            let char=String.fromCharCode(str.charCodeAt(i)-32);
            uppercasestr+=char;
        
       }
       else
       uppercasestr+=str[i];
     }
     console.log("uppercase: ",uppercasestr);
    }
     
lowercase(str);
uppercase(str);

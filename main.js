var btn1=document.getElementById("inc");
var btn2=document.getElementById("dec");

var Encrypt = (event) => {
    var input1=document.getElementById("str").value;
    var input2=Number(document.getElementById("key").value);
    var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var res="";
    var index="";
    for(let i=0;i<input1.length;i++)
    {
        let flag=1;
        index="";
       for(let j=0;j<26;j++)
       {
           if(input1[i]==arr[j])
           {
               let k=input2;
                    index=arr[(j+k)%26];
                    flag=0;
                    break;
               
           }
           if(j==25)
            j=0;
            if(flag==0)
                break;
       }
       res+=index;
       console.log(res);
    }
    document.getElementById("res").innerText=res;
    

}

var Decrypt = (event) => {
    var input1=document.getElementById("str").value;
    var input2=Number(document.getElementById("key").value);
    var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var res="";
    var index="";
    for(let i=0;i<input1.length;i++)
    {
        let flag=1;
        index="";
       for(let j=0;j<26;j++)
       {
           if(input1[i]==arr[j])
           {
               let k=input2;
               let x;
               if(j<k)
               {
                   x=25+j-k+1;
               }
               else
                x=j-k;
                    index=arr[x];
                    flag=0;
                    break;
               
           }
           if(j==25)
            j=0;
            if(flag==0)
                break;
       }
       res+=index;
       console.log(res);
    }
    document.getElementById("res").innerText=res;
    

}

btn1.addEventListener("click",Encrypt);
btn2.addEventListener("click",Decrypt);
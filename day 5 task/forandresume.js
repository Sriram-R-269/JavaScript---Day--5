//for

var name1=["satty","yash","sanjay","balaji"];
var num=[1,2,3,4];
var frnds=[];
for( var i=0;i<name1.length;i++)
{
    frnds[name1[i]]=num[i]
}
console.log(frnds);

// for in

var industry={
    name : "dairy",
    owner : "mike",
    location : "chennai",
    outlets : 10
}
for (let com in industry)
{
    console.log(com + ": "+industry[com]);
}

// for each
 
 var com1=["dairy","HP","nike"];
 var com2=["milk","laptop","shoe"];
 var product={}
 com1.forEach((com1,i)=>{
    product[com1]=com2[i]

 }); console.log(product);


 // for of 

 var name1={"satty":0,"yash":1,"sanjay":2,"balaji":3};
 var frnd = Object.keys(name1);
 for(var a of frnd)
 {
    console.log(`${a} : ${[a]}`);
    
 }


//resume

var info={
    name3              : "sriram R",
    DOB                : 09/06/2000,
    Gender             : "male",
    mobilenumber      : 634567643,
    mailid            : "ksdfghjgmail.com",
    nativity           : "thoothukkudi",

};
var education ={
    degree         : "B.E",
    domain         :"ECE",
    institute      : "SVCE",
    CGPA           : 7.8,
    yearofpassing: 2022
}
var resume =[info , education];
console.log(resume);

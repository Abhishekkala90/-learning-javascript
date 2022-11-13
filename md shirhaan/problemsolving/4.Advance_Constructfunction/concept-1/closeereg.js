for(let i=0;i<4;i++)
  {
    setTimeout(function(){
        console.log(i);

    },i*1000);
  }

  console.log('\n\n');
  //Answer: when var :4 4 4 4
  //        when let :0 1 2 3  

  //In 1st for loop the output should be 4 for every execution, why because javascript won't wait for the setTimeout to be executed so the loop will execute and move the settimeout function into execution and loop stopped at the end 'i' value is 4 and in the var keyword every 'i' in the log is pointing to the same memory location so the value is logging as 4.
  
  //In 2nd for loop the let keyword will allow to make a copy of value and pass into the  settimeout function  so every execution in for loop has a copy of 'i' so it is logging the expected output 0,1,2,3
//Closure is a function having access to the parent scope , even after the parent function is closed.

//Closure is a function having access to the parent scope=>which means a function(Parent function) is returning a function(child function).

//Even after the parent function has closed=>the variable which are present in the parent function are accessible from the child function after called the parent function.
function counter()
{
    let count=0;
    return function (value)
    {
        count+=value;//since count is accessible to the ananimous function and here the count value is changed so the the count got new value every time count is called.
        console.log(count);
    }
}
const counterCall =counter();
counterCall(1);
counterCall(2);
counterCall(3);
  //this is also an impure function.


  //
  for(var i=0;i<4;i++)
  {
    setTimeout(function(){
        console.log(i);

    },i*100);
  }

  console.log('\n\n');
  //Answer:4 4 4 4
  for(let i=0;i<4;i++)
  {
    setTimeout(function(){
        console.log(i);

    },i*1000);
  }
//0123
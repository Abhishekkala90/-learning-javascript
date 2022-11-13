/*Given an object of employee name and there salary, find the second most paid employee of the
company
Input :
arr=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'n
ame':'Riya','salary':650000},{'name':'Rithik','salary':45000},{'name':'Ritesh','salary':230000}]
Output:
Rakesh
*/
//by selection sort
let arr=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'name':'Riya','salary':650000},{'name':'Rithik','salary':45000},{'name':'Ritesh','salary':230000}];
function secondMostPaid(a,n)
{
    let temp;
    for(let i=0;i<a.length;i++)
    {
        temp=a[i];
        for(let j=i+1;j<a.length;j++)
        {
            if(a[j].salary>temp.salary)
            {
            temp=a[j]
            a[j]=a[i];
            a[i]=temp;
            }
        }
    }
    return a[n-1].name;
}

console.log('SelectionSort:',secondMostPaid(arr,2));
//by bubble sort
let arr2=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'name':'Riya','salary':650000},{'name':'Rithik','salary':45000},{'name':'Ritesh','salary':230000}];
function secondMostPaid2(a,n)
{
    let temp;
    for(let i=0;i<a.length;i++)
    {
        temp;
        for(let j=0;j<a.length-1;j++)
        {
            if(a[j].salary<a[j+1].salary)
            {
            temp=a[j]
            a[j]=a[j+1];
            a[j+1]=temp;
            }
        }
    }
    return a[n-1];
}

console.log('BubbleSort:',secondMostPaid2(arr2,2));
//shirhaan's appraoch:
function bubblesort(arr, k){
    for (let i = 0; i < arr.length-1; i++) {
        let flag = false;
        for (let j = 0; j < (arr.length-i-1); j++) { 
            if(arr[j].salary>arr[j+1].salary){ 
                flag = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        } 
        if(flag == false) {
            break;
        }
    } 
    console.log(arr[arr.length-k]) ;
}
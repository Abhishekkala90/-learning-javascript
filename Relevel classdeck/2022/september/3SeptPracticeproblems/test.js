
 let A1 = [1, 2, 3, 3,3,3,3, 4, 5, 6];
 let A2 = [3, 3,4,4,4,4,4, 5];
 function intersection(a1,a2)
 {
    map1={};
    map2={};
    for(let nums1 of a1)
    {
        map1[nums1]=(map1[nums1]||0)+1;
    }
        for(let nums2 of a2 )
        {
        map2[nums2]=(map2[nums2]||0)+1;
        }

     return map1,map2;
 }
 console.log(intersection(A1,A2));
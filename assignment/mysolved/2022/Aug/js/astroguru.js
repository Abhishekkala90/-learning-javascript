// function astroguru(no_of_children,spouses_name,location,job)
// {
//     console.log('You will be a '+job+' in '+location+' and married to '+spouses_name+' with '+no_of_children+' kids');
// }
// astroguru(3,'Sapna Bisht','Nainital','Banker');
function comparenum(a, b) {
    if (a > b) {
        return console.log(a);
    }

    if (a < b) {
        return console.log(b);
    }
    else {
        return console.log('Numbers are either equal or not comparable');
    }
}
comparenum(6, 6);
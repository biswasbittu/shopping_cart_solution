// Code For Cover Plus Button
document.getElementById('btn-cover-plus').addEventListener('click', function(){
    const coverNumberField=document.getElementById('cover-number-field');
    const coverNumberString=coverNumberField.value;
    const coverNumber=parseInt(coverNumberString);
     const newCoverNumber=coverNumber+1;

coverNumberField.value=newCoverNumber;



})


// Code For Cover Minus Button..........
document.getElementById('btn-cover-minus').addEventListener('click',function(){
    const coverNumberField=document.getElementById('cover-number-field');
    const coverNumberString=coverNumberField.value;
    const coverNumber=parseInt(coverNumberString);
     const newCoverNumber=coverNumber-1;

coverNumberField.value=newCoverNumber;
})

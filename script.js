const form=document.getElementById('form');
const email=document.getElementById('email');
const select1=document.getElementById('select1');

let flag;
let flag1;

form.addEventListener('submit',(e) => {
   
    checkInputs();
    
    if(flag1==true&& flag==true){
        return true;
       }
       else{
        alert('Fill all the fields!')
        e.preventDefault();
       }
    
   
   
       

});




function checkInputs(){
    // GETTING VALUES FROM THE INPUTS


    
   const emailValue= email.value.trim();
    const selectValue=select1.value.trim();


    if(emailValue==''){
        //show error
        // add error class
        setErrorFor(email,'email cannot be blank');
        
        flag=false;

    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'email is not valid');
        flag=false;


    }
    else{

        // show success
        //add success class

        setSuccessFor(email,'Correct!');
        flag=true;
    }

    
    if(selectValue==''){
       
        setErrorFor(select1,'This Field Is Required!');
        flag1=false;


    }
    else{

        setSuccessFor(select1,'Correct!');
        flag1=true;
      
    }

  

}


function setErrorFor(input,message){

    const formControl=input.parentElement; //fom-controll class
    const small=formControl.querySelector('small');  

    // adding error message to small

 small.innerText=message;

    //setting error class

formControl.className='form-control error';


}




function setSuccessFor(input,message){
    const formControl= input.parentElement;
    const small=formControl.querySelector('small');  

    small.innerText=message;
    formControl.className='form-control success';
}



function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);


}

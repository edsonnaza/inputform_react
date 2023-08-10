import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';
import Card from './UI/Card';

const initialUserInput ={
   'userName':'',
   'age':'',
   
 }

 const initialErrorMessage={
   message:'',
   title:''
 }
const AddUser = (props) =>{
   const [userInput, setUserInput]=useState(initialUserInput);
   const [errorMessage, setErrorMessage]=useState(null);

   const submitHandler = (event) =>{
      event.preventDefault();
      const userName=event.target.userName.value;
      const age =event.target.age.value;
   

      if(userName.trim().length===0) {setErrorMessage({title:'Invalid Input', message:'Please enter a valid name (non-empty values.)'}); return;};
      if(age.trim().length===0) {setErrorMessage({title:'Invalid Input', message:'Please enter a valid age (non-empty values).'}); return ; };
      if(+age < -1) {setErrorMessage({title:'Invalid Input',message:'Please the age must be more than cero, (age>0).'} ); return; }; 
      
      props.onAddUser(userName,age);
      console.log(userName,age);
      console.log('Saved!!');
   }

   const inputChangeHandler = (input, value) =>{
      //console.log(input);
      console.log(input,value);
  
      setUserInput((prevInput)=>{
        return {
          ...prevInput,
          [input]: value,
        };
      });
    };
    const resetHandler = () =>{
      setUserInput(initialUserInput);
      console.log('Reset');

    }

    const errorHandler = () =>{
         setErrorMessage(null);
    }

    
    return (<div>
              {errorMessage && <ErrorModal onConfirm={errorHandler} title={errorMessage.title} message={errorMessage.message}/>}    
               <Card className={classes.input}>
                 <form onSubmit={submitHandler} >
                     <label htmlFor='userName' >User Name:</label>
                     <input 
                         onChange={(event)=> 
                           inputChangeHandler('userName',event.target.value)
                         } 
                        id='userName' 
                        value={userInput.userName}
                        type='text' 
                        />

                     <label >Age (Years):</label>
                     <input 
                      onChange={(event)=> 
                        inputChangeHandler('age',event.target.value)
                      } 
                     id='age' 
                     value={userInput.age}
                     type='text' 
                    />
                 <div className={classes.actions}>
                   <Button  type="submit" >Add User</Button> 
                   <button className={classes.buttonReset} onClick={resetHandler} type="reset" >
                     Reset
                  </button >   
                  </div>    
                 </form>   
             </Card>
         </div>);
}

export default AddUser;
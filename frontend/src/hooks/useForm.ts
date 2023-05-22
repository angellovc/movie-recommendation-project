import {useState} from 'react';

const useForm = (initialState:any) => {

  const [formState, setFormState] = useState(initialState);

  const reset = (newState = initialState) => {
    setFormState(newState);
  }

  const handlerInput = ({ target }:any) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }
  

  return ([
    formState,
    handlerInput,
    reset
  ]);
}

export default useForm
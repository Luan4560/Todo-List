import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';
import { Container } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
}

const Input: React.FC<InputProps> = ({name,className,...rest }) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error,  registerField } = useField(name);
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      className={className}
      isErrored={!!error} 
      isFilled={isFilled} 
      isFocused={isFocused}
      >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}      
        {...rest}
      />
    </Container>    
  )
}

export default Input;
import { useState } from 'react';


  export function  useFormState(initialValue: string) {
        const [value, setValue] = useState(initialValue);
    
        function onValueChange(e: any) {
            setValue(e.target.value);
        }
    
        const inputProps = {
            value: value,
            onChange: onValueChange
        }
        return inputProps
    }




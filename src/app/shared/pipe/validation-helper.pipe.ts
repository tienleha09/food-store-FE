import { Pipe } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";


@Pipe({
   name: "validationFormat" 
})
export class ValidationHelper{

    transform(source: any, label: string): string[]{
        
        if(source instanceof FormControl){
            return this.formatMessages((source as FormControl).errors, label);
        }
        return this.formatMessages(source as ValidationErrors,label);
    }
    formatMessages(errors: ValidationErrors |null, label: string): string[]{
        let messages: string[] = [];
        
        for(let errorName in errors){
            switch(errorName){
                case "required":
                    messages.push(`This ${label} field is required`);
                    break;
                case "minlength":
                    messages.push(`A valid ${label} must be at least ${errors['minlength'].requiredLength} characters`);
                    break;
                case "maxlength":
                    messages.push(`A valid ${label} must be not greater than ${errors['maxlength'].requiredLength} characters`);
                    break;
                case "pattern":
                    messages.push(`The ${label} contains illegal characters`);
                    break;
                case "min":
                    messages.push(`A valid ${label} must be greater than ${errors['min'].min}`)
            }
        }
        return messages;
    }


}
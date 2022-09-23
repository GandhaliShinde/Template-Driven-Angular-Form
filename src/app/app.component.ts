import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'working-form';
  
nameError:string = '';
emError:string = '';
pwError:string = '';
mobError:string = '';
addrError:string = '';
regexpEmail:RegExp = new RegExp("a-zA-Z0-9");

  sendData(data:NgForm): void{
      console.log("test");
      console.log("data:" + data.value);
      console.log("user:" + data.controls['email'].value)


      if( data.controls['fname'].value.length == 0 ||  data.controls['lname'].value )
          this.nameError = 'Name required'

      if( data.controls['address'].value.length == 0)
          this.addrError = 'Address required';

      if( data.controls['mobile'].value.length == 0)
          this.mobError = 'Phone required';

      if( data.controls['email'].value.length == 0)
          this.emError = 'Email required';

      if( data.controls['password'].value.length == 0)
          this.pwError = 'Password required';

      if( data.controls['rpassword'].value.length == 0)
          this.pwError = 'Confirmation required';


      if( data.controls['fname'].value.length > 15 ||  data.controls['lname'].value)
          this.nameError = 'Name cannot be greater that 15 characters';

      if(! data.controls['email'].value.includes('@'))
      this.emError = 'Email should be in proper format';

      if( data.controls['password'].value !=  data.controls['rpassword'].value)
      this.pwError = 'Password mismatch'

      if( data.controls['mobile'].value.length < 10 || data.controls['mobile'].value.length > 10 || data.controls['mobile'].value.includes('a-z')) 
          this.mobError = 'Phone number not in correct format';
 
         if(!this.regexpEmail.test(data.controls['password'].value)){
          this.pwError = 'Password should contain only numbers and characters';
         } 
    }
  


}

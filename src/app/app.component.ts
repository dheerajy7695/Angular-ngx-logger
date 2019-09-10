import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [NGXLogger]
})
export class AppComponent  {
  constructor(private logger: NGXLogger) {
        this.logger.debug('Your log message goes here');
        this.logger.debug('Multiple', 'Argument', 'support');
        this.logger.error('Error message');
        //this.logger.log("log");
    };
}

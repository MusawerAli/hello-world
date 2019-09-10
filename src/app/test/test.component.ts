import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `

          <div>Test URl</div>
          <p>{{2+3}}</p>
          <p>Welcome {{name}}</p>
          <p>{{greet('Hamza')}}</p>
          <p>{{alert}}</p>
          <p>{{name.toUpperCase()}}</p>
          <p>{{name.length}}</p>
          <input value="Norway"> 
          <input [id]="myid" value="BNBN">
          <input [disabled] = "isDisabled" id="{{myid}}" value="BNBN">
          <p class="text-success">class binding</p>
          <p [class]="successClass">class binding</p>
          <p [class.text-special]="hasError">class binding</p>
          <p [ngClass]="messageClasses">Class Bind</p>
          <h2 style="color:teal">Style Binding</h2>
          <h2 [style.color]="highlightColor">Style Binding</h2>
          <h2 [style.color]="hasError ? 'red' :highlightColor ">Style Binding</h2>
          <h2 [style.color]="hasError ? 'red' :highlightColor ">Style Binding</h2>
          <h2 [style.color] = "'orange'">Style Binding</h2>
          <h2 [ngStyle] = "styleClasses">Style Binding</h2>
          <hr>
          <h2>Event Binding</h2>
          <button (click)="onclick()">Event Bind</button>
          <button (click)="eventClick($event)">Event Bind </button>
          <p [ngClass]="messageClasses">{{eventMessage}}</p>
          
          <hr>

          <input  #myinput type="text">
          <button (click)="myInput(myinput.value)">Click</button>
          <hr>

          <h2>Two way data bindingh</h2>
          <input type="text" [(ngModel)]="name">
          {{name}}

          <hr>
          <h2>Structural Directive</h2>
          <h2 *ngIf = "true">NGIF true</h2>
          <h2 *ngIf = "false">NGIF true</h2>
          <h2 *ngIf="displayName">NameThis is declear as true<h2>

            <p>How to render if else this</p>

            <h2 *ngIf="condition;else elseblock">IF else block</h2>
            <ng-template #elseblock>
            <h2 [ngClass]="messageClasses">
            Else Block
            </h2>
            </ng-template>

          <div *ngIf="displayName; then thenBlock;else elseBlock">
          
          </div>

            <ng-template #thenBlock>
              <h3>
                  this is true condition
              </h3>
            </ng-template>

            <ng-template #elseBlock>
            <h3>
                this is false condition
            </h3>
            </ng-template>

            <hr>
            <h3>ngSwitch</h3>
            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">YOu choose red color</div>
                <div [style.color]="color" *ngSwitchCase="'blue'" >YOu choose blue color</div>
                <div *ngSwitchCase="'yellow'">YOu choose yellow color</div>
                <div *ngSwitchDefault>Plesase Put value in color</div>
            </div>
            <hr>
            <h3>ngFor</h3>

            <div *ngFor="let car of cars;index as i">
            <b>{{i}}{{car}}</b>
            </div>

            <div *ngFor="let car of cars;first as f">
            <b>{{f}}{{car}}</b>
            </div>

            <hr>
            <h2>@Input @output Decorator</h2>

            <h4>{{parentData}}</h4>
            <h3>{{"Hello" + pname}}</h3>
            <button (click)="fireEvent()">Output Decorator</button>
          <hr>
            <h2>Pipes</h2>
            <h4>{{pipes | lowercase}}</h4>
            <h4>{{pipes | uppercase}}</h4>
            <h4>{{pipes | titlecase}}</h4>
            <h4>{{pipes | lowercase}}</h4>
            <h4>{{pipes | slice:3}}</h4>
            <h4>{{cars | json}}</h4>
            <h4>{{5.653 | number:'1.2-2'}}</h4>
            <h4>{{0.25 | percent}}</h4>
            <h4>{{0.45 | currency}}</h4>
            <h4>{{0.45 | currency:'GBP'}}</h4>
            <h4>{{date | date}}</h4>
            <h4>{{date | date:'short'}}</h4>
            <h4>{{date | date:'shortDate'}}</h4>
            <h4>{{date | date:'shortTime'}}</h4>
          
            <h4>{{date | date:'medium'}}</h4>
            <h4>{{date | date:'mediumDate'}}</h4>
            <h4>{{date | date:'mediumTime'}}</h4>
         
            `,
          styles: [`
  div {
    color:red;
  }

  .text-success {
    color:green;
  }
  .text-danger {
    color:red;
  }

  .text-special {
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "ALI";
  public myid = "testId";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public hasSpecial = true;
  public highlightColor = "teal";
  public eventMessage = "";
  public displayName = true;
  public condition = false;
  public color = "blue";
  public pipes = "hi i m david";
  public date = new Date();
  @Output() public childEvent = new EventEmitter();

  @Input() public parentData;
  @Input('parentData') public pname;
  public cars = ["BMW","MERC","FORD","Bently"];
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.hasSpecial
  }

  public styleClasses = {
    color: "red",
    fontStyle: "italic",
    fontFamily: "Arial"
  }



  constructor() { }

  ngOnInit() {
  }

  onclick(){
    console.log('Event bind');
  }
  greet(name){
    return  "Hello " + this.name + " And " + name ;
  }

  eventClick(event){

    this.eventMessage = "YOu" + event.type + "Event Bind button" ;
    console.log(event);
  }

 myInput(value){
  console.log(value);
 }
  public alert = alert('Hello');

  fireEvent(){
    this.childEvent.emit('Hey Cold');
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { 
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCardModule
} from '@angular/material';
import { NavigationService } from "../../../services/navigation/navigation.service";
import { CustomizerComponent } from './customizer.component';

describe('CustomizerComponent', () => {
  let component: CustomizerComponent;
  let fixture: ComponentFixture<CustomizerComponent>;
  let navigationServiceStub;

  beforeEach(async(() => {
    class navigationServiceStub { }

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule
      ],
      declarations: [ CustomizerComponent ],
      providers: [{provide: NavigationService, useClass: navigationServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

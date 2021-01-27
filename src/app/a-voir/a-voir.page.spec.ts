import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AVoirPage } from './a-voir.page';

describe('AVoirPage', () => {
  let component: AVoirPage;
  let fixture: ComponentFixture<AVoirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVoirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AVoirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

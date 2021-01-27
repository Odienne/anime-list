import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VuesPage } from './vues.page';

describe('VuesPage', () => {
  let component: VuesPage;
  let fixture: ComponentFixture<VuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

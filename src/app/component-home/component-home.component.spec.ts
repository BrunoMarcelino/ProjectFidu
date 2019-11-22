import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHomeComponent } from './component-home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from 'src/shared/services/client.service';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ComponentHomeComponent', () => {
  let component: ComponentHomeComponent;
  let fixture: ComponentFixture<ComponentHomeComponent>;
  let deb: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHomeComponent ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        ClientService
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
  });

  it('=== should create', () => {
    expect(component).toBeTruthy();
  });

  it('=== shoul have one mdb-icon', () => {
    fixture.detectChanges();
    const nombretable = deb.queryAll(By.css('mdb-icon')).length;
    expect(nombretable).toBe(1);
  });
})

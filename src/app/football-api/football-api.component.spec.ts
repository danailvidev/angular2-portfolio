/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FootballApiComponent } from './football-api.component';

describe('FootballApiComponent', () => {
  let component: FootballApiComponent;
  let fixture: ComponentFixture<FootballApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

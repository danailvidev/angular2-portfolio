/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedditApiComponent } from './reddit-api.component';

describe('RedditApiComponent', () => {
  let component: RedditApiComponent;
  let fixture: ComponentFixture<RedditApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

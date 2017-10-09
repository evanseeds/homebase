import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

	beforeEach(async(() => {
  	TestBed.compileComponents();
  }));

	it('works well', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.debugElement.nativeElement as HTMLElement;
    expect(el.querySelector('h1').textContent).toBe('Welcome to your Homebase');
  }));
});

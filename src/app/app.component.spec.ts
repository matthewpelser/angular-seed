import { expect } from "chai";
import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";

describe("App", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]});
  });

  it ("should work", () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).to.equal(true);
  });
});

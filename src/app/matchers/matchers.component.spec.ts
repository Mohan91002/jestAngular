import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
       let component: MatchersComponent;
       let fixture: ComponentFixture<MatchersComponent>;

       beforeEach(() => {
              TestBed.configureTestingModule({
                     declarations: [MatchersComponent]
              });
              fixture = TestBed.createComponent(MatchersComponent);
              component = fixture.componentInstance;
              fixture.detectChanges();
       });

       it('should create', () => {
              expect(component).toBeTruthy();
       });

       // exact
       it('two plus two is four', () => {
              expect(2 + 2).toBe(4);
       });

       // object testing
       it('object values', () => {
              const data = { name: "Techopsworld" };
              expect(data).toEqual({ name: "Techopsworld" });
       });

       // truthiness
       it('null', () => {
              const n = null;
              expect(n).toBeNull();
              expect(n).toBeDefined();
              expect(n).not.toBeUndefined();
              expect(n).not.toBeTruthy();
              expect(n).toBeFalsy();
       })
       it('zero', () => {
              const z = 0;
              expect(z).not.toBeNull();
              expect(z).toBeDefined();
              expect(z).not.toBeUndefined();
              expect(z).not.toBeTruthy();
              expect(z).toBeFalsy();
       })

       // numbers
       it('two plus two', () => {
              const value = 2 + 2;
              expect(value).toBeGreaterThan(3);
              expect(value).toBeGreaterThanOrEqual(3.5);
              expect(value).toBeLessThan(5);
              expect(value).toBeLessThanOrEqual(4.5);

              //toBe and toEqual are equating 
              expect(value).toBe(4);
              expect(value).toEqual(4);
       })
       it('adding floating point numbers', () => {
              const value = 0.1 + 0.2;

              // expect(value).toBe(0.3);              
              expect(value).toBeCloseTo(0.3);
       })

       //strings
       it('there is no D in techops', () => {
              expect("techops").not.toMatch(/D/);
       })
       it('but there is a "world" in techopsworld', () => {
              expect("techopsworld").toMatch(/world/);
       })

       // Arrays & Iterables
       it('the shopping list has milk on it', () => {
              const shoppingList = [
                     'diapers',
                     'kleenex',
                     'trash bags',
                     'paper towels',
                     'milk'
              ];
              expect(shoppingList).toContain('milk');
              expect(new Set(shoppingList)).toContain('milk');
       })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataComponent', () => {
       let component: DataComponent;
       let fixture: ComponentFixture<DataComponent>;
       let fakeServiceMock: any;

       beforeEach(() => {
              fakeServiceMock = {
                     getDataV1: jest.fn()
              }
              TestBed.configureTestingModule({
                     declarations: [DataComponent],
                     providers: [
                            {
                                   provide: FakeService, useVale: fakeServiceMock
                            }
                     ]
              });
              fixture = TestBed.createComponent(DataComponent);
              component = fixture.componentInstance;
       });

       it('should create', () => {
              expect(component).toBeTruthy();
       });

       it('should getServiceData set serviceData', () => {
              const expRes = {
                     name: "mohan kumar"
              };
              jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
              fixture.detectChanges();
              expect(component.serviceData.name).toBe(expRes.name);

       })

       it('should getServiceData set errorMessage', () => {
              const errorResponse = new HttpErrorResponse({
                     error: 'test 404 error',
                     status: 404,
                     statusText: 'Not Found'
              })
              jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(throwError(()=>errorResponse));
              // fixture.detectChanges();
              component.getServiceData();
              expect(component.errorMessage).toBe('Not Found')              
       })

       it('should greeting set Good Day', () => {
              const expRes = {
                     name: "mohan kumar",
                     time: 12
              };
              jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
              fixture.detectChanges();
              expect(component.greeting).toBe('Good Day')              

       })

       it('should greeting set Good Morning', () => {
              const expRes = {
                     name: "mohan kumar",
                     time: 9
              };
              jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
              fixture.detectChanges();
              expect(component.greeting).toBe('Good Morning')              

       })

       it('should greeting set Good Evening', () => {
              const expRes = {
                     name: "mohan kumar",
                     time: 24
              };
              jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes));
              fixture.detectChanges();
              expect(component.greeting).toBe('Good Evening')              

       })

});

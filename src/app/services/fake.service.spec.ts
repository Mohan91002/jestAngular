// // import { TestBed } from '@angular/core/testing';
// import { of, throwError } from 'rxjs';
// import { FakeService } from './fake.service';
// import { HttpErrorResponse } from '@angular/common/http';

// describe('FakeService', () => {
//        let service: FakeService;
//        let httpClientSpy: any;

//        // beforeEach(() => {
//        //        TestBed.configureTestingModule({});
//        //        service = TestBed.inject(FakeService);
//        // });

//        // Constructor approach based on observable
//        beforeEach(() => {
//               httpClientSpy = {
//                      get: jest.fn(),
//                      post: jest.fn()
//               }
//               service = new FakeService(httpClientSpy)
//        });

//        it('should be created', () => {
//               expect(service).toBeTruthy();
//        });

//        it('should be getDataV1', () => {
//               const res = "Techopsworld";
//               const url = "https://jsonplaceholder.typicode.com/todos/1";
//               jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
//               service.getDataV1();
//               expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
//               expect(httpClientSpy.get).toHaveBeenCalledWith(url);
//        })

//        it('should be getDataV2', (done) => {
//               const res = "Techopsworld";
//               const url = "https://jsonplaceholder.typicode.com/todos/1";
//               jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
//               service.getDataV2().subscribe(
//                      {
//                             next: data =>{
//                                    expect(data).toEqual(res);
//                                    done();
//                             },
//                             error: error=> console.log(error)
//                      }
//               );
//               expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
//               expect(httpClientSpy.get).toHaveBeenCalledWith(url);
//        })

//        it('should getDataV2 throw error', (done) => {
//               const errorResponse = new HttpErrorResponse({
//                      error: 'test 404 error',
//                      status: 404,
//                      statusText: 'Not Found'
//               })
//               const res = "Techopsworld";
//               const url = "https://jsonplaceholder.typicode.com/todos/1";
//               jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(()=>errorResponse));
//               service.getDataV2().subscribe(
//                      {
//                             next: data => console.log(data),
//                             error: error=> {
//                                    expect(error.message).toContain('test 404 error');
//                                    done();
//                             }
//                      }
//               );
//               expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
//               expect(httpClientSpy.get).toHaveBeenCalledWith(url);
//        })

//        // post call

//        it('should test postDataV1', ()=>{
//               const command= 'testing';
//               const res = "Techopsworld";
//               const url = "https://jsonplaceholder.typicode.com/todos/1";
//               jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
//               service.postDataV1(command);
//               expect(httpClientSpy.post).toBeCalledTimes(1)
//        });
// });

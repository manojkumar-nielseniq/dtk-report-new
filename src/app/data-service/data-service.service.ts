import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {} 
<<<<<<< HEAD
  chartDataResponse(dataIncome: string, dataBuying: string){
    return this.http.get("http://localhost:8081/niq/getdata?buyingType="+dataBuying+"&incomeType="+dataIncome)//+"&manufacturers="+dataMfr)
=======
  chartDataResponse(dataIncome: string, dataBuying: string, dataMfr:string){
    return this.http.get("http://localhost:8081/niq/getdata?buyingType="+dataBuying+"&incomeType="+dataIncome+"&manufacturers="+dataMfr)
>>>>>>> 4d8dd56fd230044da934b20a80fc9ec8462bd5e3
  };
}
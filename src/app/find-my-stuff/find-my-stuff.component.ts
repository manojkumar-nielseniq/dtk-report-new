import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class DataService {
    private _data: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    public setData(data: any){
        this._data.next(data);
    }

    public getData(): Observable<any> {
        return this._data.asObservable();
    }
}
@Component({
  selector: 'app-find-my-stuff',
  templateUrl: './find-my-stuff.component.html',
  styleUrls: ['./find-my-stuff.component.css']
})
export class FindMyStuffComponent implements OnInit {

  title:string = "";

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data=>{
        // Do whatever you want with your data
        this.title = data;
    })
}

  ngOnInit(): void {
  }

}

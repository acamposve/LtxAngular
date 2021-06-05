
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { CityState } from '@app/_models';

const baseUrl = `${environment.apiConfigUrl}/api/Home`;

@Injectable({ providedIn: 'root' })

export class CityService {

    private citySubject: BehaviorSubject<CityState>;
    public city: Observable<CityState>;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.citySubject = new BehaviorSubject<CityState>(null);
        this.city = this.citySubject.asObservable();
    }


    getAll() {
        return this.http.get<CityState[]>(baseUrl);
    }
}
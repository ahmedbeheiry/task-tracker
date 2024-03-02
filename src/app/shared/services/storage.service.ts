import { Injectable } from '@angular/core';
import { StorageEnum } from '../enums/storage.enum';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	constructor() {}

	set(
		key: string,
		value: string,
		type: StorageEnum = StorageEnum.local
	): void {
		let data: any;
		if (typeof value == 'string') {
			data = value;
		} else {
			data = JSON.stringify(value);
		}

		if (type == StorageEnum.session) {
			sessionStorage.setItem(key, data);
		} else {
			localStorage.setItem(key, data);
		}
	}

	get(key: any, type: StorageEnum = StorageEnum.local) {
		let res: any;
		if (type == StorageEnum.session) {
			res = sessionStorage.getItem(key);
		} else {
			res = localStorage.getItem(key);
		}
		if (res) {
			return JSON.parse(res);
		} else {
			return;
		}
	}

	remove(key: string, type: StorageEnum = StorageEnum.local) {
		if (type == StorageEnum.session) {
			sessionStorage.removeItem(key);
		} else {
			localStorage.removeItem(key);
		}
	}

	clear(type: StorageEnum = StorageEnum.local) {
		if (type == StorageEnum.session) {
			sessionStorage.clear();
		} else {
			localStorage.clear();
		}
	}
}

/**
 * 
 * Date: 14/09/2018	
 */
export class Chartrespons
{
	
	private _data: string;
	
	constructor() { 
	}
	
	set data(value: string) {
		this._data = value;
	}
	get data() : string {
		return this._data;
	}
	
}

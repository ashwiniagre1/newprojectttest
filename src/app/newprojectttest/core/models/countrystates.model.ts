/**
 * 
 * Date: 14/09/2018	
 */
export class Countrystates
{
	
	private _country: string;
	private _state: string;
	
	constructor() { 
	}
	
	set country(value: string) {
		this._country = value;
	}
	get country() : string {
		return this._country;
	}
	set state(value: string) {
		this._state = value;
	}
	get state() : string {
		return this._state;
	}
	
}

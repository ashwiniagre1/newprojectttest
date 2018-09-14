/**
 * 
 * Date: 14/09/2018	
 */
export class State
{
	
	private _stateId: string;
	private _stateName: string;
	private _countrId: string;
	private _countryName: string;
	
	constructor() { 
	}
	
	set stateId(value: string) {
		this._stateId = value;
	}
	get stateId() : string {
		return this._stateId;
	}
	set stateName(value: string) {
		this._stateName = value;
	}
	get stateName() : string {
		return this._stateName;
	}
	set countrId(value: string) {
		this._countrId = value;
	}
	get countrId() : string {
		return this._countrId;
	}
	set countryName(value: string) {
		this._countryName = value;
	}
	get countryName() : string {
		return this._countryName;
	}
	
}

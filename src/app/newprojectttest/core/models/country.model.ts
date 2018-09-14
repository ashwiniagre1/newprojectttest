/**
 * 
 * Date: 14/09/2018	
 */
export class Country
{
	
	private _id: string;
	private _countryName: string;
	private _countryCode1: string;
	private _currencyName: string;
	
	constructor() { 
	}
	
	set id(value: string) {
		this._id = value;
	}
	get id() : string {
		return this._id;
	}
	set countryName(value: string) {
		this._countryName = value;
	}
	get countryName() : string {
		return this._countryName;
	}
	set countryCode1(value: string) {
		this._countryCode1 = value;
	}
	get countryCode1() : string {
		return this._countryCode1;
	}
	set currencyName(value: string) {
		this._currencyName = value;
	}
	get currencyName() : string {
		return this._currencyName;
	}
	
}

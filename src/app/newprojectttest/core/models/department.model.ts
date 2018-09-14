/**
 * 
 * Date: 14/09/2018	
 */
export class Department
{
	
	private _id: string;
	private _name: string;
	
	constructor() { 
	}
	
	set id(value: string) {
		this._id = value;
	}
	get id() : string {
		return this._id;
	}
	set name(value: string) {
		this._name = value;
	}
	get name() : string {
		return this._name;
	}
	
}

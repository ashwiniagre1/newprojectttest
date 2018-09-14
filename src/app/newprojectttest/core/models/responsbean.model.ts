/**
 * 
 * Date: 14/09/2018	
 */
import { State } from './state.model';
export class Responsbean
{
	
	private _success: boolean;
	private _message: string;
	response: State[]; 
	
	constructor() { 
		this.response = []; 
	}
	
	set success(value: boolean) {
		this._success = value;
	}
	get success() : boolean {
		return this._success;
	}
	set message(value: string) {
		this._message = value;
	}
	get message() : string {
		return this._message;
	}
	
}

import {UserService} from './UserService';
import {User} from '../domains/User';
import {SignJWT} from 'jose/jwt/sign';
import {generateSecret} from 'jose/util/generate_secret'



	
	//secret = this.generateCustomSecret();

	/*private userService: UserService;

	private jwt: SignJWT;*/

	/*constructor(userService: UserService) {
		this.userService = userService;
		console.log('hola')
	}*/

	export async function registration(user: User) {
		return new User();
	}

	export async function  connexion(mail: string, password: string) {
		return null;
	}

	export function retrieve() {
		const user: User = new User();
		user.id = 2;
		user.name = 'doe';
		user.firstName = 'john';
		user.mail = 'mail@test';
		user.password = 'mysuperPassword';
		return user;

	}

	export async function edit(user: User){
		return null;
	}

	export async function _delete(user: User) {
		return null;
	}

    export async function generateCustomSecret(){
    	var secretT;
    	try {
			secretT = generateSecret('RS256');
			console.log(secretT);
		} catch (exception) {
			secretT = null;
			console.log(exception);
		}
		return secretT;
	}

/*import {CreateConnexion} from 'typeorm';*/
import {UserRepository} from '../repositories/UserRepository'
import {User} from '../domains/User'

export class UserService {

	private userRepository: UserRepository;

	/*constructor(userRepository : UserRepository) {
		this.userRepository = userRepository;
	}*/

	save(User :User) {
		return null;
	}

	get(User :User) {
		return null;
	}

	delete(User :User) {
		return null;
	}

}
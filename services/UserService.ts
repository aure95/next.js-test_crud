/*import {CreateConnexion} from 'typeorm';*/
import {UserRepository} from '../repositories/UserRepository'
import {PrismaClient} from '../node_modules/.prisma/client'
import {User} from '../domains/User'

export class UserService {

	//private userRepository: UserRepository;

	private prismaClient: PrismaClient;

	constructor() {
		this.prismaClient = new PrismaClient();
	}

	/*constructor(userRepository : UserRepository) {
		this.userRepository = userRepository;
	}*/

	async save() {
		/*const user2: User = new User();
	    user2.id = 2;
	    user2.name = 'doe';
	    user2.firstName = 'john';
	    user2.mail = 'mail@test';
	    user2.password = 'mysuperPassword';*/
		return await this.prismaClient.user.create(
		{data: {
		  name  :'test',   
		  first_name:'hola', 
		  mail: 'mon@mail',       
		  password: '1454545'   
			}
		});
	}

	get(User :User) {
		return null;
	}

	delete(User :User) {
		return null;
	}
}



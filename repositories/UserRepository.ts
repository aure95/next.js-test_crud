import {EntityRepository, Repository} from 'typeorm';
import {User} from '../domains/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	
}
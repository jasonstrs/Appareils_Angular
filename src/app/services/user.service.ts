import { User } from '../models/User.models';
import { Subject } from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.fr',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'la dégustation de café'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUser(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUser();
    }
}
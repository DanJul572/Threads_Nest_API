import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {User} from './schemas/user.schemas';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    create(createUserDto: CreateUserDto) {
        const userToSave = new this.userModel(createUserDto);
        return userToSave.save();
    }

    findAll() {
        return this.userModel.find().exec();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}

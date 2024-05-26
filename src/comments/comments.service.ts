import {Injectable} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {Comment} from './schemas/comment.schemas';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

    create(createCommentDto: CreateCommentDto) {
        const comment = this.commentModel.create({
            text: createCommentDto.text,
            user: createCommentDto.userId,
            parent: createCommentDto.parentId || null,
        });
        return comment.then(doc => {
            return doc.populate(['user', 'parent']);
        });
    }

    findAll() {
        return this.commentModel.find().populate(['user', 'parent']).exec();
    }

    getTopLevelComments() {
        return this.commentModel
            .find({
                parent: null,
            })
            .populate(['user', 'parent'])
            .exec();
    }

    getCommentsByParentId(parentId: string) {
        return this.commentModel
            .find({
                parent: parentId,
            })
            .populate(['user', 'parent'])
            .exec();
    }

    findOne(id: number) {
        return `This action returns a #${id} comment`;
    }

    update(id: number) {
        return `This action updates a #${id} comment`;
    }

    remove(id: number) {
        return `This action removes a #${id} comment`;
    }
}

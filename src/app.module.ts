import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CommentsModule} from './comments/comments.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
        CommentsModule,
        UsersModule,
        MongooseModule.forRoot(
            'mongodb+srv://juliandidandi4:a0CW0qw2Dgn2JCcC@threads.pbfqdz8.mongodb.net/threads?retryWrites=true&w=majority&appName=threads',
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

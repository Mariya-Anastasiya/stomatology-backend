import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Feedback} from './feedback.entity';
import {FeedbackController} from './feedback.controller';
import {FeedbackService} from './feedback.service';
import {Exceptions} from "../utils/exceptions.utils";

@Module({
    imports: [TypeOrmModule.forFeature([Feedback])],
    controllers: [FeedbackController],
    providers: [FeedbackService, Exceptions],
})
export class FeedbackModule {
}

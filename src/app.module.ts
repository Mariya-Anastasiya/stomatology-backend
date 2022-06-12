import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {FeedbackModule} from './feedbacks/feedback.module';
import {Feedback} from './feedbacks/feedback.entity';
import {ProductModule} from './products/product.module';
import {Product} from './products/product.entity';
import {Property} from './properties/property.entity';
import {SpecialistModule} from './specialists/specialist.module';
import {Specialist} from './specialists/specialist.entity';
import {PropertyModule} from './properties/property.module';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './users/user.module';
import {ConfigModule} from '@nestjs/config';
import {User} from './users/user.entity';
import {FileModule} from './files/file.module';
import {CategoryModule} from './categories/category.module';
import {Category} from './categories/category.entity';
import {NoteModule} from "./notes/note.module";
import {Note} from "./notes/note.entity";

@Module({
    imports: [
        FeedbackModule,
        ProductModule,
        CategoryModule,
        SpecialistModule,
        PropertyModule,
        AuthModule,
        UserModule,
        FileModule,
        NoteModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [
                Feedback,
                Product,
                Property,
                Specialist,
                User,
                Product,
                Category,
                Note
            ],
            synchronize: true,
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false

                }

            }
        }),
    ],
})
export class AppModule {
}

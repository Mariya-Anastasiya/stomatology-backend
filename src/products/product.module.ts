import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Product} from './product.entity';
import {ProductController} from './product.controller';
import {ProductService} from './product.service';
import {Exceptions} from '../utils/exceptions.utils';
import {CategoryModule} from '../categories/category.module';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
    controllers: [ProductController],
    providers: [ProductService, Exceptions],
    exports: [ProductService]
})
export class ProductModule {
}

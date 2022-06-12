import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Specialist} from './specialist.entity';
import {SpecialistService} from './specialist.service';
import {SpecialistController} from './specialist.controller';
import {Exceptions} from '../utils/exceptions.utils';

@Module({
    imports: [TypeOrmModule.forFeature([Specialist])],
    providers: [SpecialistService, Exceptions],
    controllers: [SpecialistController],
    exports: [SpecialistService],
})
export class SpecialistModule {
}

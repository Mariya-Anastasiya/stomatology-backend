import {Module} from '@nestjs/common';

import {FileController} from './file.controller';
import {MulterModule} from '@nestjs/platform-express';
import {FileService} from "./file.service";


@Module({
    imports: [MulterModule.register({
        dest: './files',
    })],
    providers: [FileService],
    controllers: [FileController]
})
export class FileModule {
}

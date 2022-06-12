import {Controller, Get, Param, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage, memoryStorage} from 'multer';
import {editFileName, imageFileFilter} from '../utils/file-upload.utils';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {JwtAuthGuard} from '../auth/guard/jwt.guard';
import {UploadClient} from "@uploadcare/upload-client";

@ApiTags('files')
@Controller('api/v1/files')
export class FileController {
    private readonly client: UploadClient;
    constructor() {
        this.client = new UploadClient({publicKey: '761258c92e559047fdc5'})
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: memoryStorage(),
            fileFilter: imageFileFilter,
        }),
    )
    async uploadedFile(@UploadedFile() file: Express.Multer.File) {
        const fileData = await this.client
            .uploadFile(file.buffer, {
                fileName: editFileName(file.originalname)
            })
        return {
            originalName: file.originalname,
            fileName: fileData.uuid,
        };
    }
}

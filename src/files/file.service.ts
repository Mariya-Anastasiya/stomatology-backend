import * as sharp from 'sharp'

export class FileService {
    async convertToWebp(buffer: Buffer) {
        return sharp(buffer).webp().toBuffer();
    }
}

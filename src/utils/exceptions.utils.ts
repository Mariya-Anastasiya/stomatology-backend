import {HttpException, HttpStatus} from '@nestjs/common';


export class Exceptions {
    notUndefinedItem<T>(item: T, message: string): T {
        if (item === undefined) {
            throw new HttpException('not found ' + message, HttpStatus.NOT_FOUND);
        }
        return item;
    }
}

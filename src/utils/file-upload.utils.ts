import {extname} from 'path';

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};

export const editFileName = (name) => {
    const fileExtName = extname(name);
    const prefix = new Date().getTime();
    return `image${prefix}${fileExtName}`;
};

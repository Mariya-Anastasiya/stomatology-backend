import {IsDate, IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";
import {Type} from "class-transformer";
import {ApiProperty, PartialType} from "@nestjs/swagger";


export class CreateNoteDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsPhoneNumber('RU')
    numberPhone: string;

    @ApiProperty()
    @IsNumber()
    productId: number;

    @ApiProperty()
    @IsNumber()
    propertyId: number;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    date: Date;
}

export class UpdateNoteDto extends PartialType(CreateNoteDto){}


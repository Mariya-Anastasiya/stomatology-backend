import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Note {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;

    @ApiProperty()
    @Column()
    fullName: string;

    @ApiProperty()
    @Column()
    numberPhone: string;

    @ApiProperty()
    @Column()
    @IsNumber()
    productId: number;

    @ApiProperty()
    @Column()
    @IsNumber()
    propertyId: number;

    @ApiProperty()
    @Column()
    date: Date;

}

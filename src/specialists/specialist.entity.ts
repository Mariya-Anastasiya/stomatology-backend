import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class Specialist {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    imageName: string;

    @ApiProperty()
    @Column('varchar', {array: true})
    specialization: string[];

    @ApiProperty()
    @Column('text')
    description: string;

}

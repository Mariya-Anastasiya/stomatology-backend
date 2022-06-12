import {Module} from "@nestjs/common";
import {Note} from "./note.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NoteController} from "./note.controller";
import {NoteService} from "./note.service";
import {Exceptions} from "../utils/exceptions.utils";

@Module({
    imports: [TypeOrmModule.forFeature([Note]), Exceptions],
    controllers: [NoteController],
    providers: [NoteService, Exceptions],
})
export class NoteModule {
}

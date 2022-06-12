import {CreateNoteDto, UpdateNoteDto} from "./note.dto";
import {DeleteResult, Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {Note} from "./note.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Exceptions} from "../utils/exceptions.utils";

@Injectable()
export class NoteService {
    constructor(@InjectRepository(Note) private readonly noteRepository: Repository<Note>,
                private readonly controllerExceptions: Exceptions) {
    }

    async getNotes() : Promise<Note[]> {
        return this.noteRepository.find();
    }

    async getNoteById(id: number) {
        const note: Note = await this.noteRepository.findOne(id);
        return this.controllerExceptions.notUndefinedItem(note, 'note with id' + id);
    }

    async createNote(dto: CreateNoteDto) :Promise<Note> {
        return this.noteRepository.save(dto);
    }

    async updateNote(id: number, dto: UpdateNoteDto) : Promise<DeleteResult> {
        return await this.noteRepository.update(id, dto);
    }

    async deleteNoteById(id: number) : Promise<DeleteResult> {
        return this.noteRepository.delete(id);
    }
}

import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards} from '@nestjs/common';
import {NoteService} from "./note.service";
import {CreateNoteDto, UpdateNoteDto} from "./note.dto";
import {ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiParam, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/guard/jwt.guard";
import {Note} from "./note.entity";
import {DeleteResult} from "typeorm";


@Controller('api/v1/notes')
@ApiTags('notes')
export class NoteController {
    constructor(private readonly noteService: NoteService) {
    }

    @ApiCreatedResponse({type: Note, isArray: true, description: 'записи'})
    @Get()
    getNotes() {
        return this.noteService.getNotes();
    }

    @ApiParam({name: 'id', description: 'id записи'})
    @ApiCreatedResponse({type: Note, description: 'запись'})
    @Get(":id")
    getNoteById(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.getNoteById(id);
    }

    @ApiBody({type: CreateNoteDto, description: 'запись'})
    @Post()
    createNote(@Body() dto: CreateNoteDto) {
        return this.noteService.createNote(dto);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiParam({name: 'id', description: 'id записи'})
    @ApiBody({type: UpdateNoteDto, description: 'запись'})
    @ApiCreatedResponse({type: Note, description: 'запись'})
    @Patch(":id")
    updateNote(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateNoteDto) {
        return this.noteService.updateNote(id, dto);
    }

    @ApiParam({name: 'id', description: 'id записи'})
    @ApiCreatedResponse({type: DeleteResult, description: 'результат удаления'})
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    deleteNoteById(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.deleteNoteById(id);
    }
}

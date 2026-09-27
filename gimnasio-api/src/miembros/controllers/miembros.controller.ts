import { Controller, HttpCode, Post, Res, Body, Get, Delete, ParseIntPipe, Patch, BadRequestException, Param, NotFoundException } from '@nestjs/common';
import{MiembroService} from '../service/miembro.service';
import type {Response} from 'express';
import type {crearMiembroDto} from '../dto/crear-miembro.dto';
@Controller('miembros')
export class MiembrosController {
    constructor(private readonly miembroService: MiembroService) {}

    @Post()
    @HttpCode(201)
    async crearMiembro(
        @Body() dto: crearMiembroDto,
        @Res({passthrough: true}) res: Response
    ){
        if(!dto?.nombre || !dto?.correo || !dto?.membresia || dto?.activo === undefined){
            throw new BadRequestException('Cuerpo mal formado');
        }
        try{

            const miembro = await this.miembroService.crearMiembro(dto);
            res.location(`/miembros/${miembro.id}`);
            return miembro;
        }catch(error){
            throw error;
        }
    }

    @Get()
    @HttpCode(200)
    async listarMiembros(){
        return await this.miembroService.listarMiembros();
    }

    @Get(":id")
    @HttpCode(200)
    async buscarMiembroPorId(@Param('id', ParseIntPipe) id: number){
        if(!Number.isInteger(id)){
            throw new BadRequestException('Cuerpo mal formado');
        }
        //cuando no se encuentra el miembro lanza 404
        if(await this.miembroService.buscarMiembroPorId(id) === null){
            throw new NotFoundException('ID inválido');   
        }
        return await this.miembroService.buscarMiembroPorId(id);
    }

    @Patch(":id")
    @HttpCode(200)
    async actualizarMiembro(@Param('id', ParseIntPipe) id: number, @Body() dto: Partial<crearMiembroDto>){
        if(!Number.isInteger(id)){
            throw new BadRequestException('Cuerpo mal formado');
        }
        //cuando no se encuentra el miembro lanza 404
        if(await this.miembroService.buscarMiembroPorId(id) === null){
            throw new NotFoundException('ID inválido');
        }

        return await this.miembroService.actualizarMiembro(id, dto);
    }

    @Delete(":id")
    @HttpCode(200)
    async eliminarMiembro(@Param('id', ParseIntPipe) id: number){
        if(await this.miembroService.buscarMiembroPorId(id) === null){
            throw new NotFoundException('ID inválido');
        }
        return await this.miembroService.eliminarMiembro(id);
    }

}

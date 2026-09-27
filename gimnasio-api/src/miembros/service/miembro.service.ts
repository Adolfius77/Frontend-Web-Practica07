import { Inject, Injectable } from '@nestjs/common';
import type { MiembroRepository } from '../dominio/miembro.repository';
import {MIEMBROS_REPOSITORY} from '../miembros.tokens';
import type { Miembro } from '../../inscripciones/dominio/entidades';

@Injectable()
export class MiembroService {
    constructor(
        @Inject(MIEMBROS_REPOSITORY)
        private readonly repo: MiembroRepository,
    ) {}

    async listarMiembros(): Promise<Miembro[]> {
        return await this.repo.listar();
    }

    async buscarMiembroPorId(id: number): Promise<Miembro | null> {
        return await this.repo.buscarPorId(id);
    }

    async crearMiembro(miembro: Omit<Miembro, 'id'>): Promise<Miembro> {
        return await this.repo.crear(miembro);
    }

    async actualizarMiembro(id: number, miembro: Partial<Miembro>): Promise<Miembro | null> {
        return await this.repo.actualizar(id, miembro);
    }
    
    async eliminarMiembro(id: number): Promise<boolean> {
        return await this.repo.eliminar(id);
    }
}
import { Injectable } from '@nestjs/common';
import { MiembroRepository } from '../dominio/miembro.repository';
import { Miembro } from '../../inscripciones/dominio/entidades';

@Injectable()
export class miembroMemoriaRepository implements MiembroRepository {
    private miembros: Miembro[] = [];
    private siguienteId = 1;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
    }

    async buscarPorId(id: number): Promise<Miembro | null> {
        return this.miembros.find((m) => m.id === id) ?? null;
    }

    async crear(miembro: Miembro): Promise<Miembro> {
        miembro.id = this.siguienteId++;
        this.miembros.push(miembro);
        return miembro;
    }
    async actualizar(id: number, miembro: Partial<Miembro>): Promise<Miembro | null> {
        const index = this.miembros.findIndex((m) => m.id === id);
        if (index === -1) return null;
        this.miembros[index] = { ...this.miembros[index], ...miembro };
        return this.miembros[index];
    }
    async eliminar(id: number): Promise<boolean> {
        const index = this.miembros.findIndex((m) => m.id === id);
        if (index === -1) return false;
        this.miembros.splice(index, 1);
        return true;
    }
    
}


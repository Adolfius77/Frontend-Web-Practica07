import { Miembro } from '../../inscripciones/dominio/entidades';
export interface MiembroRepository {
    listar(): Promise<Miembro[]>;
    buscarPorId(id: number): Promise<Miembro | null>;
    crear(miembro: Omit<Miembro, 'id'>): Promise<Miembro>;
    actualizar(id: number, miembro: Partial<Miembro>): Promise<Miembro | null>;
    eliminar(id: number): Promise<boolean>;
    
}
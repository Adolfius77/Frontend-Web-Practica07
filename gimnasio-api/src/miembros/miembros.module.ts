import { Module } from '@nestjs/common';
import { MiembrosController } from './controllers/miembros.controller';
import { MIEMBROS_REPOSITORY } from './miembros.tokens';
import { MiembroService } from './service/miembro.service';
import { miembroMemoriaRepository } from './infra/miembro-memoria.repositoty';
@Module({
    controllers: [MiembrosController],
    providers: [MiembroService,miembroMemoriaRepository, 
        { provide: MIEMBROS_REPOSITORY, 
          useClass: miembroMemoriaRepository }],
})
export class MiembrosModule {}

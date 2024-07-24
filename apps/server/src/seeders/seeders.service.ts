import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorException } from 'src/common/utils';
import { DefaultPreference } from 'src/preferences/enums/default-preference';

@Injectable()
export class SeedersService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create() {
    await this.preferences();
    return { message: "Seeder ejecutado" }
  }


  private async preferences() {
    await this.prisma.preference.deleteMany();
    await this.prisma.preference
      .createMany({
        data: [
          { name: DefaultPreference.SMOKE, description: "Se permite a los pasajeros fumar" },
          { name: DefaultPreference.FEMALE, description: "Solo se permiten pasajeros mujeres" },
          { name: DefaultPreference.PET, description: "Se permiten a los pasajeros llevar mascotas" },
        ]
      })
      .catch((e) => handleErrorException(e));
  }


}

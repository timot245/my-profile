import { Injectable } from '@nestjs/common';

@Injectable()
export class HospitalsService {
  create(createHospitalDto: any) {
    return 'This action adds a new hospital';
  }

  findAll() {
    return `This action returns all hospitals`;
  }

  findOne(id: string) {
    return `This action returns a #${id} hospital`;
  }

  update(id: string, updateHospitalDto: any) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: string) {
    return `This action removes a #${id} hospital`;
  }
}

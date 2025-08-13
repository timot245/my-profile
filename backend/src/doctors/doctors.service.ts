import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorsService {
  create(createDoctorDto: any) {
    return 'This action adds a new doctor';
  }

  findAll() {
    return `This action returns all doctors`;
  }

  findOne(id: string) {
    return `This action returns a #${id} doctor`;
  }

  update(id: string, updateDoctorDto: any) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: string) {
    return `This action removes a #${id} doctor`;
  }
}

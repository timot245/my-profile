import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientsService {
  findOne(id: string) {
    return `This action returns a patient profile for user #${id}`;
  }

  findAppointments(id: string) {
    return `This action returns all appointments for user #${id}`;
  }
}

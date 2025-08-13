import { Controller, Get, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    // This would typically be the user_id of the patient
    return this.patientsService.findOne(id);
  }

  @Get(':id/appointments')
  findAppointments(@Param('id') id: string) {
    return this.patientsService.findAppointments(id);
  }
}

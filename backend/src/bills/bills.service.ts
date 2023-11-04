import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {} 

  findAll(user_id: number) {
    return this.prisma.bill.findMany({
      where: {
        user_id
      }
    });
  }

  findOne(user_id: number, id: number) {
    return this.prisma.bill.findUnique({
      where: { 
        user_id,
        id
      }
    });
  }

}

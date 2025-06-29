// prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // optional: makes it available globally
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}

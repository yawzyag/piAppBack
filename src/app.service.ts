import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const date = new Date().toLocaleString('es-CO');
    return String(date) || 'hello';
  }
}

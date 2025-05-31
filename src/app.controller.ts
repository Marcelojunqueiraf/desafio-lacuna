import { Controller, Get } from '@nestjs/common';
 // commit inútil
@Controller()
export class AppController {
    @Get('health')
    healthCheck() {
        return { status: 'ok' };
    }
}

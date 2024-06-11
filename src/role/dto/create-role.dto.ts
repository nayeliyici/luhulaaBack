import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({ description: 'The name of the role' })
    name: string;

    @ApiProperty({ description: 'The description of the role', required: false })
    description?: string;
}

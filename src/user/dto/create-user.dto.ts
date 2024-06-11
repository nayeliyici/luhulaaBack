import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ description: 'The email of the user' })
    email: string;

    @ApiProperty({ description: 'The password of the user' })
    password: string;

    @ApiProperty({ description: 'The name of the user' })
    name: string;

    @ApiProperty({ description: 'The phone number of the user', required: false })
    phone?: string;

    @ApiProperty({ description: 'The colony of the user\'s address', required: false })
    address_colony?: string;

    @ApiProperty({ description: 'The street of the user\'s address', required: false })
    address_street?: string;

    @ApiProperty({ description: 'The number of the user\'s address', required: false })
    address_number?: string;

    @ApiProperty({ description: 'The reference of the user\'s address', required: false })
    address_reference?: string;

    @ApiProperty({ description: 'The role ID of the user', example: 1 })
    roleId: number;
}

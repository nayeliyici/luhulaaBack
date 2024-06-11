import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({ description: 'The user ID placing the order' })
    userId: number;

    @ApiProperty({ description: 'The total amount of the order' })
    total: number;

    @ApiProperty({ description: 'The status of the order', example: 'pending' })
    status: string;

    @ApiProperty({ description: 'The list of textiles in the order', type: [Number] })
    textileIds: number[];
}

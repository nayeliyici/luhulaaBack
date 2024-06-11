import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
    @ApiProperty({ description: 'The user ID adding the textile to the cart' })
    userId: number;

    @ApiProperty({ description: 'The textile ID added to the cart' })
    textileId: number;

    @ApiProperty({ description: 'The quantity of the textile added to the cart' })
    quantity: number;
}

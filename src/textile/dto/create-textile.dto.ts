import { ApiProperty } from '@nestjs/swagger';

export class CreateTextileDto {
    @ApiProperty({ description: 'The name of the textile' })
    name: string;

    @ApiProperty({ description: 'The price of the textile' })
    price: number;

    @ApiProperty({ description: 'The image URL of the textile' })
    image: string;

    @ApiProperty({ description: 'The category of the textile' })
    category: string;

    @ApiProperty({ description: 'The stock quantity of the textile' })
    stock: number;

    @ApiProperty({ description: 'The ID of the creator artisan' })
    creatorId: number;

    @ApiProperty({ description: 'The location where the textile was made' })
    madeIn: string;

    @ApiProperty({ description: 'The technique used to make the textile' })
    technique: string;

    @ApiProperty({ description: 'The materials used in the textile' })
    materials: string;
}

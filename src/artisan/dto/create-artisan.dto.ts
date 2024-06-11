import { ApiProperty } from '@nestjs/swagger';

export class CreateArtisanDto {
    @ApiProperty({ description: 'The user ID of the artisan' })
    userId: number;

    @ApiProperty({ description: 'The photo of the artisan' })
    photo: string;

    @ApiProperty({ description: 'The biography of the artisan' })
    biography: string;

    @ApiProperty({ description: 'The phrase of the artisan' })
    phrase: string;
}

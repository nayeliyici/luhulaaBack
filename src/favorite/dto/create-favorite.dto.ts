import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoriteDto {
    @ApiProperty({ description: 'The user ID who favorites the textile' })
    userId: number;

    @ApiProperty({ description: 'The textile ID that is favorited' })
    textileId: number;
}

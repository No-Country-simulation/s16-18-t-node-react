import { IsBoolean, IsUUID } from 'class-validator'


export class CreatePreferenceTravelDto {
    @IsUUID("4")
    readonly preferenceID: string;

    @IsBoolean()
    readonly state: boolean;


}

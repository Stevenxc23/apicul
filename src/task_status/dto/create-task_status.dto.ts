import { IsNotEmpty } from "class-validator";

export class CreateTaskStatusDto {
    @IsNotEmpty()
    Description: String;
}

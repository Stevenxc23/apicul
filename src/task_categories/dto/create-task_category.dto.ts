import { IsNotEmpty } from "class-validator";

export class CreateTaskCategoryDto {
    @IsNotEmpty()
    Description: String;
    @IsNotEmpty()
    color: String;
}

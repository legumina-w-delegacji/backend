import { IsBoolean, IsNumber, IsString, Max, Min } from "class-validator";

export class EventSummary {
    @IsBoolean()
    blocked: boolean;

    @IsNumber()
    @Min(1)
    @Max(5)
    severity: number;

    @IsString()
    name: string;
}

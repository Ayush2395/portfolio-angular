import { IResult } from "../models/interfaces/IResult";

export class Result implements IResult {
    public succeed: Readonly<boolean> = false;
    public errors: readonly string[] = [];

    private constructor(succeed: boolean, errors: string[]) {
        this.succeed = succeed;
        this.errors = errors;
    }

    public static OnSuccess = () => new Result(true, []);
    public static OnFailure = (error: string[]) => new Result(false, error);
}
export interface Controller {
    run(req: Request, res: Response): Promise<void>;
}
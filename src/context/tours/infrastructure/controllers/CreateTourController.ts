import {Controller} from '../../../shared/infrastructure/controllers/Controller';
import {CommandBus} from '../../../../context/shared/domain/CommandBus';
import CreateTourCommand from '../../application/CreateTour/CreateTourCommand';

export class CreateTourController implements Controller {
    constructor(
        private createTour: CommandBus
    ) {}

    async run(req: any, res: any): Promise<void> {
        try {

            const command = new CreateTourCommand(
                req.body?.userId, 
                req.body?.tourTitle,
                req.body?.description,
                req.body?.capacity,
                req.body?.tourDate
            )

            this.createTour.dispatch(command)

        } catch(error) {
            return error
        }
    }
}
export class Pagination {
    limit?: number = 50;
    offset?: number = 0;
    order?: string = 'DESC';

    constructor(init: Partial<Pagination>) {
        Object.assign(this, init);
    }
}
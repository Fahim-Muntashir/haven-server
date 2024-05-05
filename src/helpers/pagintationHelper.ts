type Ioptions = {
        page?: number,
        limit?: number,
        sortOrder?: string,
        sortBy?:string,
}

type IoptionsResult = {
    page: number,
    limit: number,
    skip: number,
    sortBy: string,
    sortOrder: string,
}

const calculatePagination = (options:Ioptions ):IoptionsResult => {
    const page: number = Number(options.page) || 1;
    const limit: number = Number(options.limit) || 10;
    const skip: number = Number(page-1) * limit;


    const sortBy: string = options.sortBy || 'createdAt';
    const sortOrder: string = options.sortOrder || "desc";
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
    }
}
export const paginationHelper = {
    calculatePagination
};
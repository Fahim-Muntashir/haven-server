import { Prisma } from "@prisma/client";
import { adminSearchAbleFields } from "./admin.constant";
import { paginationHelper } from "../../../helpers/pagintationHelper";
import prisma from "../../../shared/prisma";



const GetAllAdmin = async (params:any,options:any) => {
    const { page,limit,skip  } = paginationHelper.calculatePagination(options);

    const {searchTerm,...filterData} = params;

    const andConditions: Prisma.AdminWhereInput[] = [];
    
// [
//     {
//         name: {
//             contains: params.searchTerm,
//             mode:"insensitive",
//         }

//     },
//     {
//         email: {
//             contains: params.searchTerm,
//             mode: "insensitive",

//         }
//     }]

    if (params.searchTerm) {
        andConditions.push({
            OR: adminSearchAbleFields.map(field=> ({
                [field]: {
                    contains: params.searchTerm,
                     mode: "insensitive",    
            }
            }))
        })
    }


    if (Object.keys(filterData).length > 0) { 
        andConditions.push({
            AND: Object.keys(filterData).map(key =>( {
                [key]: {
                   equals:filterData[key]
               } 
            }))
        })
    }

    const whereConditions:Prisma.AdminWhereInput ={AND:andConditions}
  
    const result = await prisma.admin.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrderby ? {
            [options.sortBy]: options.sortOrder,
        } : {
            created_at:'desc',
        }
    });
    return result
};

export const AdminServices = {
    GetAllAdmin
}
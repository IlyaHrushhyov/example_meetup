export default interface lotModel {
    id: number | string,
    name: string,
    description: string,
    subCategoryId: number | string,
    price: number,
    createdOn: Date,
    updatedOn: Date,
    isFree: boolean,
    isNew: boolean
}
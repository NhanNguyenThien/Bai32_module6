export interface IFashion{
    FashionID:string,
    Style:string,
    Fashion_Subject:string,
    Fashion_Detail:string,
    Fashion_Image:string,

}
export class Book{
    constructor(
        public FashionID:string="",
        public Style:string="",
        public Fashion_Subject:string="",
        public Fashion_Detail:string="",
        public Fashion_Image:string="")
    {}
}
export class Fashion {
    fashion_image: string | undefined;
    _id: string | undefined;
    style : string | undefined;
    fashion_subject: string | undefined;
    fashion_detail: string|undefined;
    contructor(
        _id:any=null,
        _style:string,
        _fashion_subject:string="",
        _fashion_detail:string="",
        _fashion_image:string=""
    ){
        this.fashion_image = _fashion_image;
        this.fashion_detail = _fashion_detail;
        this.fashion_subject = _fashion_subject;
        this.style = _style;
        this._id = _id;
    }
}

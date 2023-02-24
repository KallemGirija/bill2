export class Bill
{
     billId:number;
     restaurantName:String;
     itemCount:number;
	 grossBillAmount:number;
	 gstAmount:number;
     itemName:String;

     
     

    constructor(
        
        billId:number,
        restaurantName:String,
        itemCount:number,
        grossBillAmount:number,
        gstAmount:number,
        itemName:String,
        
       

        
    ){
       
        this.billId=billId;
        this.restaurantName=restaurantName;
        this.itemCount=itemCount;
        this.grossBillAmount=grossBillAmount;
        this.gstAmount=gstAmount;
        this.itemName=itemName;
       

    }

}

export class BillDTO 
{
    billId:number;
    restaurantName:String;
    itemCount:number;
	 totalAmount:number;
	 gstAmount:number;
    itemName:String; 
     constructor(
        billId:number,
        restaurantName:String,
        itemCount:number,
        totalAmount:number,
        gstAmount:number,
        itemName:String,
       
       
   ){
       
    this.billId=billId;
    this.restaurantName=restaurantName;
    this.itemCount=itemCount;
    this.totalAmount=totalAmount;
    this.gstAmount=gstAmount;
    this.itemName=itemName;
    
   }
}

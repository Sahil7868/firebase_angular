import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
num1:number;
num2:number;

add1:number;

p_id:string;
pname:string;
pimg:string;
pprice:number;
soh:number;

data:Product[]=[];

productscollections:AngularFirestoreCollection<Product>;
products:Observable<Product[]>;
product_doc:AngularFirestoreDocument<Product>;

  constructor(private _afs: AngularFirestore) {

    this.productscollections=this._afs.collection("Products");
    this.products=this.productscollections.snapshotChanges().map(

      x=>{

        return x.map(

          a=>{

              const data=a.payload.data() as Product;
              data.p_id=a.payload.doc.id;
              return data;             
          }
        );
      }

    );
   }

  ngOnInit() {

    this.products.subscribe(
      (x:Product[])=>{
        this.data=x;
      }
    );

 
  }
  delete(item:Product)
  {
    this.data.splice(this.data.indexOf(item),1);
  }
  addd() 
  {
    this.data.push(new Product(this.p_id,this.pname,this.pprice,this.pimg,this.soh))
  }
 // justclick()
  //{
    //this.add1=this.num1+this.num2;
 // }

}

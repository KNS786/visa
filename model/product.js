const products=[];

module.exports=class Product{
      constructor(title,imgUrl,price,description){
          this.title=title;
          this.imgUrl=imgUrl;
          this.description=description;
          this.price=price;
      }
      save(){
          products.push(this);
      }
      static FetchAll(){
          return products;
      }

}
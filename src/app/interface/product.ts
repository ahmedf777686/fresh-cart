export interface Root {
    sold: number
    images: string[]
   
    ratingsQuantity: number
    _id: string
    title: string
    
    quantity: number
    price: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    
    id: string
  }
  

  
  export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }
  
  export interface Brand {
    _id: string
    name: string
    slug: string
    image: string
  }
  export interface cat {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
  }
  
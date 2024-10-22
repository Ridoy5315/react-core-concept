export default function Book ({book}) {
     const {name, price}= book;
     return (
          <div>
               <p>Book Name {name}</p>
               <p>Book Price {price}</p>
          </div>
     )
}
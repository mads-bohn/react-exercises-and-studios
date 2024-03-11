export default function BookList() {
   let pageTitle = "Books I've Read";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Uzumaki.jpg/220px-Uzumaki.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61gQoqXgOqL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/91LlW46QU-L._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Uzumaki" />
         <img src={book2} alt="Feng Shui Modern" />
         <img src={book3} alt="The Artist's Way" />
      </div>      
   );
}
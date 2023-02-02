
    
    <script>
        class t1 
        {
           constructor(book)
           {
            this.book = book;
           }
           fig()
           {
            return (`The first book name is :- ${this.book}` + "<br>");
           }

        }
        class t2 extends t1 
        {
            constructor(book, author)
            {
                super(book);
                this.author = author;
            }
            fig()
            {
                return(`${super.fig()} Author Name :- ${this.author}`);
            }
        }

        let book1 = new t2('The 7 habits of highly successful peope', 'Stephen R. Covey');

        document.write(book1.fig());
    </script>

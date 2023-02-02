
     <script>

        class first 
        {
            constructor(name)
            {
                this.name = name;
            }

            fig()
            {
                return (`The first name is :- ${this.name} <br>`);
            }
        }

        class second extends first 
        {
            

            fig()
            {
                return (`The middle name is  :- ${this.name}<br>`);
            }
        }

        class third extends second 
        {
           
            fig()
            {
                return (`the last name is :- ${this.name}` );
            }
        }

        let fname = new first('Anita');
        let mname = new second('Vijaykumar');
        let lname = new third( 'Patel');

        document.write(fname.fig());
        document.write(mname.fig());
        document.write(lname.fig());

     </script>

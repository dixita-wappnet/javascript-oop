
    <script>

        function user(fname, lname)
        {
            let firstName = fname;
            let LastName = lname;

            let getDetails_noaccess = function()
            {
              return(` the full Name of user is :- ${firstName} ${LastName}`);
            }

            this.getDetails_access = function()
            {
                return(` the Full Name of user is :- ${firstName} ${LastName}`);
            }
         }
    
        let user1 = new user('Keyur', 'Patel');

        document.write(user1.firstName + "<br>");
        document.write(user1.getDetails_noaccess + "<br>");
        document.write(user1.getDetails_access());



    </script>
   
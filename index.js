var Auth = function () {

    var login = function()
    {
        let UserName = "kms0302";
        let UserEmail = "Hello World";
    }

    var register = function()
    {
        let UserName = "newUser";
        let UserEmail = "newEmail";
    }

    return ({
        login:function()
        {
            
        },
        register:function()
        {
            $("#registerForm").validate(() => {
                let ReigsterName = $("#RegisterInput").val();
                let RegisterPassword = $("#RegisterPassword").val();

                $.Ajax("/auth/login", {
                    name:RegisterName,
                    password:RegisterPassword
                }, (res) => {
                    let response = JSON.parse(res);
                    if(response == "")
                    {
                        alert("validation process");
                    }
                })
            })
        }
    })  
}();


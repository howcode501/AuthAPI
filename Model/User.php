<?php 

$state = $_POST["state"];

if($state == "login")
{
    $UserName = $_POST["name"];
    $UserPassword = $_POST["password"];

    if($UserName == "" && $UserPassword == "")
    {
        return json_encode(["state" => "validate"]);
    }
    // $DB = "connect the Database";

    $DB->insert("INSERT INTO users FROM name = $UserName, password = $UserPassword");
    
}
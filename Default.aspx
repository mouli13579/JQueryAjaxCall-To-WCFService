﻿<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="js/lib/jquery.js" type="text/javascript"></script>
    <script src="js/Ajaxservicecall.js" type="text/javascript"></script>   
</head>


<body>
    <form id="form1" runat="server">
    <div>
    <input type="button" id="btnAjaxCall" onclick="WCFJSON()" value="AjaxCall" />
    </div>
    </form>
</body>
</html>

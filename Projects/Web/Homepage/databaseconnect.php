<?php
$con=mysqli_connect("mysql.cc.puv.fi","tka","VcwcPEjzeBKV","opiskelijatunnus_2016_bird");
$con->set_charset('utf8');

// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
//fetch content of the bird-table. Be sure to use exactly right table name.
$result = mysqli_query($con,"SELECT * FROM bird");

//browse the result of the query to show it on the web-page. Be sure to use exactly right column names.
while($row = mysqli_fetch_array($result))

{
echo $row['id'] . " " . $row['name'];
echo "<br>";
}
mysqli_close($con);
?>

<?php
//Get the status and decode the JSON
$status = json_decode(file_get_contents('https://api.mcsrvstat.us/2/tl.52shell.ltd'));

//Show the version
echo "当前游戏版本：";
echo	$status->version



$status->online as $服务器状态
if ($服务器状态="false") {
	echo	"未查询到服务器状态，请重试！";
}else {
			//Show a list of players

foreach ($status->players->list as $player) {
	echo "当前在线人员列表：";
	echo $player.'<br />';
	}
	}



?>

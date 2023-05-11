<?php 
		function test_input($data)
			{
				$data=trim($data);
				$data=stripcslashes($data);
				$data=htmlspecialchars($data);
				return $data;
			}

			if(isset($_POST['submit']))
			{
				$username=$password="";
				if($_SERVER["REQUEST_METHOD"] == "POST")
				{
					$board = test_input($_POST['board']);
					$jee = test_input($_POST['jee']);
					$bits = test_input($_POST['bits']);
					$srm = test_input($_POST['srm']);
					$vit = test_input($_POST['vit']);

					echo "<div class='background'>";
					echo "<h2>Predicted College</h2>";
					if($board<60)
						echo "Colleges won't accept your application";
					else
					{
						$avg = (($board*60) + ((($jee*100)/360)*40))/100;
						if($avg>87)
							echo "You are eligible to apply for Indian Institute of Technology<br>";
						else if($avg>60)
							echo "You are eligible to apply for National Institute of Technology<br>";
						if($bits>280)
							echo "You are eligible to apply for Birla Institure of Technology and Science<br>";
						if($srm>140)
							echo "You are eligible to apply for Sri Ramaswamy Memorial<br>";
						if($vit>80)
							echo "You are eligible to apply for Vellore Institute of Technology<br>";
					}
					echo "</div>";
				}
			}
	?>
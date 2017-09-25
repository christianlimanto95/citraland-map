<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Home extends General_controller {
	public function __construct() {
		parent::__construct();
		$this->load->model("Home_model");
	}
	
	public function index()
	{
		parent::load_additional_js("<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAIqHcLuMsN578BJYKT3AY-xslWgCjf9cY&callback=initMap' defer></script>", true);
		$data = array(
			"title" => "Home"
		);
		parent::view("home", $data);
	}

	public function get_data() {
		$points = [];
		$point = new stdClass();
		$point->id = 1;
		$point->label = "Hall Citraland";
		$point->lat = -7.282300;
		$point->lng = 112.626996;
		$point->heading = 275;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 2;
		$point->label = "Liem John";
		$point->lat = -7.3060649;
		$point->lng = 112.6561391;
		$point->heading = 0;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 3;
		$point->label = "Fei Ling";
		$point->lat = -7.276476;
		$point->lng = 112.647377;
		$point->heading = 0;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 4;
		$point->label = "Tansioe Kiem";
		$point->lat = -7.276242;
		$point->lng = 112.643214;
		$point->heading = 187;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 5;
		$point->label = "Soemadi";
		$point->lat = -7.279128;
		$point->lng = 112.6504788;
		$point->heading = 187;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 6;
		$point->label = "Immanuel Timur";
		$point->lat = -7.2970094;
		$point->lng = 112.6291831;
		$point->heading = 70;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 7;
		$point->label = "Tony Kodrajaja";
		$point->lat = -7.2975966;
		$point->lng = 112.6285072;
		$point->heading = 200;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 8;
		$point->label = "Herman";
		$point->lat = -7.2919903;
		$point->lng = 112.6519686;
		$point->heading = 0;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 9;
		$point->label = "Alfian";
		$point->lat = -7.2789538;
		$point->lng = 112.6424127;
		$point->heading = 350;
		array_push($points, $point);

		$point = new stdClass();
		$point->id = 10;
		$point->label = "Lanny Wonggo";
		$point->lat = -7.2741205;
		$point->lng = 112.645516;
		$point->heading = 170;
		array_push($points, $point);

		echo json_encode($points);
	}
}
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
}
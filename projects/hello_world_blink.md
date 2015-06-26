---
layout: post
title: Simple Blinking LEDs
---
<img width="500" src="/assets/projects/blinking.jpg">

A simple circuit that blinks the two series LEDs every second.

The code used:

	#define LEDPIN 13

	void setup() {
	  pinMode(LEDPIN, OUTPUT);
	}

	void loop() {
	  digitalWrite(LEDPIN, HIGH); // ON
	  delay(1000); // Sleep for 1000 ms
	  digitalWrite(led, LOW); // OFF
	  delay(1000); // Sleep for 1000 ms
	}

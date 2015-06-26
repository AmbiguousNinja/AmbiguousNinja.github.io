---
layout: post
title: Physical Truth Table
---
<img width = "700px" src="/assets/projects/logic1.jpg">

In this project, there are two buttons that represent inputs to an AND or OR
logic gate.

The third button (furthest right) controls which type of logic gate the circuit
behaves like. It is initially set to "AND" but has its value toggled to "OR" and
vice versa with each click.

<div class="col s6">
	<img src="/assets/projects/logic2.jpg">
</div>
<div class="col s6">
	<img src="/assets/projects/logic3.jpg">
</div>

The above images show the circuit working as an OR gate.

**Note:** The green LED was swapped with a more camera-friendly yellow.

<div class="col s4">
	<img src="/assets/projects/logic4.jpg">
</div>
<div class="col s4">
	<img src="/assets/projects/logic5.jpg">
</div>
<div class="col s4">
	<img src="/assets/projects/logic6.jpg">
</div>

These images show the circuit behaving as an AND gate.

The code used to implement this circuit:

	#define LEDPIN 13

	#define BUTTON_A 7
	#define BUTTON_B 8
	#define BUTTON_C 9

	int value_a = 0;
	int value_b = 0;
	int value_c = 0;

	int logic_gate = 0; // Determines whether to AND or OR

	void setup() {
	  // Assign pins to input/output
	  pinMode(LEDPIN, OUTPUT);

	  pinMode(BUTTON_A, INPUT);
	  pinMode(BUTTON_B, INPUT);
	  pinMode(BUTTON_C, INPUT);
	}

	void loop() {
	  value_a = digitalRead(BUTTON_A);
	  value_b = digitalRead(BUTTON_B);
	  value_c = digitalRead(BUTTON_C);

	  // Switches the type of logic gate when the toggle button is pressed
	  if (value_c == LOW && logic_gate == 0){
	    logic_gate = 1;   // Uses OR logic
	  }
	  else if (value_c == LOW && logic_gate == 1){
	    logic_gate = 0;   // Uses AND logic
	  }

	  switch (logic_gate)
	  {
	    case 0:
	      and_gate();
	      break;

	    default:
	      or_gate();
	  }
	}

	void and_gate()
	{
	  switch (value_a && value_b)
	  {
	    case 1:
	      digitalWrite(LEDPIN, LOW);
	      break;

	    default:
	      digitalWrite(LEDPIN, HIGH);
	  }
	}

	void or_gate()
	{
	  switch (value_a || value_b)
	  {
	    case 1:
	      digitalWrite(LEDPIN, LOW);
	      break;

	    default:
	      digitalWrite(LEDPIN, HIGH);
	  }
	}

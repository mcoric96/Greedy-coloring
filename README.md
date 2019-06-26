# Greedy-coloring

<p align="center">
  <img width="300" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_N3QRDpxqlQOwoN57KteK3K_dTlhdHqSr8LrP1r1sGmI3d5G-yQ">
</p>

Simple comparison of logic and functional programming paradigm using graph coloring problem for programming paradigms course.<br>
**Sequential greedy coloring algorithm:** https://en.wikipedia.org/wiki/Greedy_coloring <br><br>

**Algorithm**<br>
1.Color first vertex with first color. <br>
2.Do following for remaining V-1 vertices.<br>
     ---Consider the currently picked vertex and color it with the<br>
     ---lowest numbered color that has not been used on any previously<br>
     ---colored vertices adjacent to it. If all previously used colors<br>
     ---appear on vertices adjacent to v, assign a new color to it.<br><br>
 
 Logical programming - Prolog <br>
 Functional programming - JavaScript<br><br>
 
In this case,this is not pure functional programming, but mix of functional and OOP because of implementation of a graph, but coloring algorithm uses main properties of functional paradigm.<br>
For this problem and similar problems that require searching techniques logic programming seems to be better solution regarding code complexity because of the various search implementations in Prolog.<br>

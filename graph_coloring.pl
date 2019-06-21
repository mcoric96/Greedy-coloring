% data - colors
color(blue).
color(red).
color(yellow).
color(green).
color(orange).
color(black).
color(white).
color(grey).
color(purple).

% definition of edge, the edge between 2 nodes is well defined only if they are colored
% with different colors
edge(First,Second) :- color(First),
    color(Second),
    First \= Second.
    
% algorithm is looking for the right combination
% we give a list of adjucent nodes, it color them in appropriate way
% if there is a node that has degree 0 it just means it can be colored with
% any given color

% here you make a graph example with vertices and edges
% this definition of graph coloring means Prolog will try to find a way to
% color these vertices in the way that all given edges are well defined
% simple example
colorGraph(A,B,C,D,E) :-
    edge(A,B),edge(B,C),edge(B,D),edge(B,E),
    edge(C,D).

% - make query: ?-colorGraph(A,B,C,D,E).
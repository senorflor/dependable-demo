# dependable-demo

An experiment with

- lots of parameterization
- minimal scope/lexical closure in modules

in a relatively functional JS project that does a lot of stateful stuff.

## goals

To feel free to do some unusual and possibly ugly stuff for a while to seek out:

- Easier testing for very stateful codebases
- Algorithmic reusability without having to O(2^N) find cutpoints around banana, monkey, tree,
  glade, jungle, county, state, country, continent (even in large functional compositions, not
  just OO codebases)
- Freedom from the sneaking suspicion that many of our "functional" codebases are just resurfaced
  procedures of procedures.
- Freedom from the heavy cognitive penalty of explicitly typed/constrained effects in Haskell and
  other similar languages: most of the code we write is doing things to/with/between stateful
  systems.

## non-goals

- immediate elegance, runtime security, or performance. Do the experiment first then rewrite with
  these in mind.

## branches

- `original`: quickly hacked together CLI codebase that has randomness, input, and output (oh my!)
- `experiment-1`: a first apprach: scope (and even define/code!) everything under
    - `imports`: an object containing all non-core imported functionality and stateful functions
    - `privates`: an object containing all private data and functions (wanted insertability and
      testability)
  Then parameterize over + compose them both in exported functions. Pretty extreme first take :)

# Solidity Koans #

Learn Solidity incrementally via small exercises called "koans", which are bite-sized problems that require knowledge of a specific facet.

## Getting started ##

### Prerequisites

* `docker` installed

### Running Koans

Each koan is self-contained.  You can jump around as much as you like, skipping sections or individual koans.  To do a koan, `cd` into the directory and read the README.  Most koans follow the following pattern, if they do not, then instructions will be in the README.

In the koan directory, execute `./run.sh`.  There may or may not be logs, but this should succeed with a `SUCCESS` message or fail with some informative error about where to look or what was expected.

## Contributing ##

see `gen_koan.sh` script to create the boilerplate for a koan.

eg
`./gen_koan.sh 1_basics 1_5_array_slicing`

* Update the generated `run.sh` and replace the "REPLACE_ME" text with name of the koan, eg `1_5_array_slicing`
* Update the generated `README.md` with instructions for the user.
* Create a PR into this repo

## License ## 

MIT License

## Inspiration ##

see https://www.rubykoans.com/ for the original "koans" style learning.


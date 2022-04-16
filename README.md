# The Fleo Assignment

The structure is pretty simple and straight forward,
we have 2 components, the 'List' and the 'Filters'. The 'List'
takes care of displaying the repos and contains the pagination
function, while the 'Filters' have the form and inputs.

All states are in the App.js file, when the query string changes,
I make the states change, which then causes the useEffect with the
get request to run.

I do realise that I'm using a lot of things I don't need and could clean
up a lot. For example, I could get away with using states completely for
stuff like name, language and sort by as the page refreshes anyway causing
the useEffect to run anyway. And to be honest I don't know why I am typing
all this instead of simply deleting those lines but I guess at least there
is something in my readme file for once.

# Use a generator approach

# This approach will only work in programming languages that support generator functions, for example, Python, JavaScript and C#. At the time of writing this article, C++ doesn't support it, but it is expected to support them soon.
# In a nutshell, generator functions are a special type of function that can "return" multiple values. When you call a generator function, you get back a special object called a generator. This generator can then be used to get each value from the function, one at a time.
# To "return" multiple values from these generator functions, a special keyword, yield, is used. yield behaves similarly to a return statement, except that it does not terminate the function. Instead, it pauses the function, and "returns" the yielded value. 
# Then, when we need another value, the function resumes from where it left off. It continues until it gets to another yield, just like before. When the function gets to the end (no more code left to run), it stops.
# For example in Python, if we have a generator gen, we can tell it to resume the function and get the next value by calling next(gen).

class NestedListIterator:
    def __init__(self, nested_list):
        self.generator = self.flatten(nested_list)
        self.next_value = None
    
    def flatten(self, nested_list):
        for item in nested_list:
            if item.isInteger():
                yield item.getInteger()
            else:
                # We always use "yield from" on recursive generator calls.
                yield from self.flatten(item.getList())
        # Will automatically raise a StopIteration.
    
    def hasNext(self):
        # Iterate to the next value if self.next_value is None.
        # next() can have a default value of None, so no need to try-except.
        if self.next_value is None:
            self.next_value = next(self.generator, None)

        # try:
        #     self.next_value = next(self.generator)
        #     return True
        # except StopIteration:
        #     return False
        return self.next_value is not None

    def next(self):
        # hasNext() will anyway set next_value to None at the end of iterator,
        # So just keep calling it.
        self.hasNext()
        next_integer, self.next_value = self.next_value, None
        return next_integer
# Should make a node class and use that for each data point instead of the array

class Stack
    attr_accessor(:data)
    def initialize()
      @data = []
    end

    def push(value)
        self.data.push(value)
    end

    def pop()
        return self.data.pop()
    end

    def peek()
        return self.data[-1]
    end

    def is_empty()
        self.peek() == nil ? return true : return false
    end
end
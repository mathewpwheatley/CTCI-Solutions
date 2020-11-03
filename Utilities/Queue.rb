# Should make a node class and use that for each data point instead of the array

class Queue
    attr_accessor(:data)
    def initialize()
      @data = []
    end

    def add(value)
        self.data.push(value)
    end

    def remove()
        return self.data.shift()
    end

    def peek()
        return self.data[0]
    end

    def is_empty()
        self.peek() == nil ? return true : return false
    end
end
class Stack
    attr_accessor(:data, :top)
    def initialize()
      @data = []
      @top = nil
    end

    def push(value)
        self.data.push(value)
        self.top = value
    end

    def pop()
        value = self.data.pop()
        self.top = self.data[-1]
        return value
    end

    def peek()
        return self.top
    end

    def is_empty()
        self.top == nil ? return true : return false
    end
end
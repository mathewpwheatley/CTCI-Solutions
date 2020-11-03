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
end
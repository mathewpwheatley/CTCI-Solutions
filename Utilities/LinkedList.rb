class Node
    attr_accessor :next
    attr_accessor :data
    def initialize(data)
      @data = data
      @next = nil
    end
end

def build(dataArray)
    head = Node.new(dataArray[0])
    prevNode = head
    for i in 1...dataArray.length
        # Create Node
        currNode = Node.new(dataArray[i])
        # Set previous node next property
        prevNode.next = currNode
        # Step previous node
        prevNode = currNode
    end
    return head
end
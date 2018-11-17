require('pry')

## Perfect Squares Array
def get_squares(array)
  squares = []
  array.each do |x|
    num = Math.sqrt(x).to_s.split('.')[0].to_i
    if num * num == x && squares.index(x) == nil
      squares.push(x)
    end
  end
  p squares.sort
end


def get_squares2(array)
  p array.select {|x| x % (Math.sqrt x) == 0}.sort.uniq
end

get_squares([4,1,16,1,10,35,22])
get_squares2([4,1,16,1,10,35,22])
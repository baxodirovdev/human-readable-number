module.exports = function toReadable (number) {
      if(number === 0){
        return 'zero'
    }
    number = number.toString().split("").reverse()
    var dg = ['','one','two','three','four', 'five','six','seven','eight','nine'];
    let tenth = ['', 'ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];    
    
    let one = dg[number[0]] || ''
    
    let ten
    let numIndex = tenth.indexOf(tenth[number[1]])
    console.log(number[1])
    
    
    if(number[1] && numIndex === 1 ){
     ten = ''
     one = tn[number[0]]
    }else if(numIndex > 1) {
     ten = tenth[number[1]] + " "
    }else{
    ten = ''
    }
     
    let hundred = dg[number[2]] || ''


  return ((hundred && hundred + ' hundred ')  + ten  + one).trim()
}

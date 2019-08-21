export default class bmi {
  bmiCalculator(weight, height,re) {
    let a = height/100;
    let sum = weight / a ** 2;
    let text;
    if(re == "asia"){
      if(sum <= 18.5)
      {
        text = "Under weight";
      }
      else if(  sum >= 18.5 && sum <=24.9){
        text = "Normal weight";
      }
      else if( sum >= 24.9 && sum <=29.9  ){
        text = "Overweight";
      }
      else if( sum >=29.9){
        text = "Obesity";
      }
    }
    else if (re == "western"){
      if(sum <= 19.5)
      {
        text = "Under weight";
      }
      else if( sum >= 19.5 && sum <=34.9){
        text = "Normal weight";
      }
      else if( sum >= 34.9 && sum <=39.9){
        text = "Overweight";
      }
      else if( sum >=39.9){
        text = "Obesity";
      }
    }
    return text;
  }
}

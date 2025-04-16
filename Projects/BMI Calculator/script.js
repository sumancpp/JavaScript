const form = document.querySelector('form');

form.addEventListener(('submit'), function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    // else{
    //     const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //     results.innerHTML = `<span>${BMI}</span>` ;
    // }

    else if(BMI < 18.6){
     results.innerHTML = `<span>${BMI}</span> Ohhh nooo, you are under weight`
    }
    else if(BMI > 18.6 && BMI < 24.9){
     results.innerHTML = `<span>${BMI}</span> Congrats, you are in Normal Range`
    }
    else{
     results.innerHTML = `<span>${BMI}</span> Hurry up, you are Overweight`
    }

    
})
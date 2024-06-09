// created by PRINCE RAJ 
let dateInput= document.querySelector(".input-box  input");
let btn= document.querySelector(".input-box button");
let ageTxt=document.querySelector(".age-txt");
dateInput.max=new Date().toISOString().split("T")[0];

function getAge() {
    let birthdate =new Date(dateInput.value);
    

    let d1=birthdate.getDate();
    let m1=birthdate.getMonth()+1;
    let y1=birthdate.getFullYear();


    let today =new Date();

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let dRes,mRes,yRes;

    yRes=y2-y1;

    if (m2 >=m1) {
        mRes=m2-m1;
    }else{
        yRes--;
        mRes=12+m2-m1;
    }

    if(d2 >=d1){
        dRes =d2-d1;
    }else{
        mRes--;
        dRes= getDaysInMonth(y1,m1)+d1-d2;
    }

    if(mRes<0){
        mRes = 11;
        yRes--;
    }

    ageTxt.textContent =`Your age is ${yRes} years, ${mRes} months and ${dRes} days`;
}

function getDaysInMonth(year,month){
    return new Date(year,month ,0).getDate();
}

btn.addEventListener("click",getAge);

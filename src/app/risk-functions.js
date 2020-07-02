/*  function name: convSI
 *  Author: J. Russo
 *  Date: July 1, 2020
 * 
 *  Input:  LabName     name of lab
 *          LabValue    value of lab result
 *          Type        type of unit (0 for conventional, 1 for SI)
 * 
 *  Output: SIValue     value of lab result converted from convention to SI or SI to conventional
 * 
 *  Description:        This function accepts the name of a lab and the value. It then looks up the conversion
 *                      factor from a JSON file and returns either the value in SI units or the value in 
 *                      conventional units.
 */

function convSI (LabName,LabValue,Type)
{
    var factor = new Map();
    var specimen = new Map();
    var convUnit = new Map();
    var SI_Unit = new Map();
    var retVal;
    data = new Object();
        $.ajax({ 
       // url: 'https://bos-mav.github.io/json/si%20conversions%20comp.json', 
        url: "si-conversions.json",
        dataType: 'json', 
        data: data, 
        async: false, 
        success: function(data){ 
        if (data.length > 0) {
            //var arrItems = [];              // The array to store JSON data.
            $.each(data, function (index, value) {
                //arrItems.push(value);       // Push the value inside the array.
                factor.set(value.Analyte,value.Factor);
                specimen.set(value.Analyte,value.Specimen);
                convUnit.set(value.Analyte,value.ConvUnit);
                SI_Unit.set(value.Analyte,value.SI_Unit);
            });
                // alert(arrItems[0]['Analyte']);
               // var msg = factor.get('Adenosine deaminase')+' '+SI_Unit.get('Adenosine deaminase');
               // alert(msg);
                                  
            }
            }
            });
      
    if (Type === 0)
       {
          retVal = factor.get(LabName) * LabValue;
    }
    else
    {
        retVal = factor.get(LabName)/LabValue;
    }
    return retVal;
}

//heart failure calculator risk calc code
    var          HFpEFCoeff = [],
                 HFrEFCoeff = [];
    function numberFormat(val, decimalPlaces) {

    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
}
function calc_risk_HF() 
{
                //declare a totscore variable
                
                var totScore;
                //declare variables to hold the rest
                var age,age_2, age_2ln, sex,race,diabetes, diabetesWeight,   hypertension, hypertension_t; 
                //added BMI_1ln
                var SBP,SBP_1, SBP_2,BMI,BMI_2,BMI_1,BMI_1ln,Scr,eGFR,eGFR2,COPD,Afib,pCad,pMI,height,weight; 
                var mcage2 = [],
                 mcage2ln = [],
                 mcbmi1 = [],
                 mcbmi2 = [],
                 mcsbp1 = [],
                 mcsbp2= [],
                 mcegfr1 = [],
                 mcegfr2 = [],
                 xBeta = [],
                 eXbeta = [],
                 smokerWeight = [],
                 risk = [];

                //initialize arrays to hold the mean centering coefficients for HFpEF and HFrEF
                HFpEFCoeff =    [[0.0002733,0.0003444,0.0003619,0.0004377],
                                [0.001114,0.001364,0.001423,0.001686],
                                [0.03517,0.0355,0.03558,0.0342],
                                [0.001274,0.001306,0.001324,0.001214],
                                [0.007448,0.007378,0.007772,0.007733],
                                [0.0000564,0.0000554,0.0000616,0.0000609],
                                [76.21,86.17,80.08,93.05],
                                [6098,7835,6733,9054]];
                //now get HFrEF
                HFrEFCoeff =    [[0.0002733,0.0003444,0.0003619,0.0004377],
                                [0.001114,0.001364,0.001423,0.001686],
                                [0.03517,0.0355,0.03558,0.0342],
                                [0.1172,0.1179,0.1179,0.1148],
                                [0.007448,0.007378,0.007772,0.007733],
                                [0.0000564,0.0000554,0.0000616,0.0000609],
                                [76.21,86.17,80.08,93.05],
                                [6098,7835,6733,9054]];
                age = parseInt($("#txtAge").val());
                age_2 = Math.pow(age,-2);
                age_2ln = age_2*Math.log(age);
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 0;
                else
                    sex = 1;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 0;
                else if (race_t === 'AfrAm')
                    race = 1;
                else
                    race = 0;
                //let's mean-center age for each model
                mcage2[0] = mean_center(HFpEFCoeff[0],age_2,sex,race);
                mcage2[1] = mean_center(HFrEFCoeff[0],age_2,sex,race);
                //mean center the age-2*ln(age)
                mcage2ln[0] = mean_center(HFpEFCoeff[1],age_2ln,sex,race);
                mcage2ln[1] = mean_center(HFrEFCoeff[1],age_2ln,sex,race);
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                    diabetes = 1;
                else
                    diabetes = 0;      
                if ($("input[name = 'Smoker']:checked").val() === "Current")
                {
                    smokerWeight[0] = get_smokeWeight(2,sex,race,0);
                    smokerWeight[1] = get_smokeWeight(2,sex,race,1);
                }
                else if ($("input[name = 'Smoker']:checked").val() === "Former")
                {
                    smokerWeight[0] = get_smokeWeight(1,sex,race,0);
                    smokerWeight[1] = get_smokeWeight(1,sex,race,1); 
                }
                else
                {
                    smokerWeight[0] = 0;
                    smokerWeight[1] = 0;
                }
                SBP = parseInt($("#BP_Sys").val());
                SBP_1 = 1/SBP;
                SBP_2 = Math.pow(SBP,-2);
                if ($("input[name = 'Hypertension']:checked").val() === "Yes")
                    hypertension = 1;
                else
                    hypertension = 0;
                //check here if the radio button has been checked
                if ($("#entBMI").text()==="Enter BMI") 
                {
                    height = parseFloat($("#txtHeight").val());
                    weight = parseFloat($("#txtWeight").val());
                    BMI = calc_bmi(height,weight);
                }
                else
                {
                       BMI = parseFloat($("#txtBMI").val());
                }
                BMI_1 = Math.pow(BMI,-1);
                BMI_2 = Math.pow(BMI,-2);
                // Define BMI^{-1} * ln(BMI), used in HFrEF risk equation only
                BMI_1ln = BMI_1*Math.log(BMI);
                if ($("input[name = 'PrevMI']:checked").val() === "Yes")
                    pMI = 1;
                else
                    pMI = 0;
                if ($("input[name = 'PrevCAD']:checked").val() === "Yes")
                    pCAD = 1; 
                else
                    pCAD = 0;
                if ($("input[name = 'PrevAFIB']:checked").val() === "Yes")
                    aFib = 1;
                else
                    aFib = 0;
                if ($("input[name = 'COPD']:checked").val() === "Yes")
                    COPD = 1;
                else
                    COPD = 0;   
                //let's calculate eGFR
                //first, get the serum creatinine
                scr=parseFloat($("#Ser_Creat").val());
                if ((sex === 1) && (scr <= 0.7)) //female and serum creatinine <= 0.7
                {
                    eGFR = 144 *Math.pow((scr/0.7),-0.329) * Math.pow(0.993,age);
                    if (race === 1) //African American
                        eGFR = eGFR*1.159;
                }
                else if ((sex === 1) && (scr > 0.7)) //female and serum creatinine > 0.7
                {
                    eGFR = 144 *Math.pow((scr/0.7),-1.209) * Math.pow(0.993,age);
                    if (race === 1) //African American
                        eGFR = eGFR*1.159;
                }
                else if ((sex === 0) && (scr <= 0.9)) //male and serum creatinine <= 0.9
                {
                    eGFR = 144 *Math.pow((scr/0.9),-0.411) * Math.pow(0.993,age);
                    if (race === 1) //African American
                        eGFR = eGFR*1.159;
                }
                else if ((sex === 0) && (scr > 0.9)) //male and serum creatinine > 0.9
                {
                    eGFR = 144 *Math.pow((scr/0.9),-1.209)* Math.pow(0.993,age);
                    if (race === 1) //African American
                        eGFR = eGFR*1.159;
                }
                eGFR2 = Math.pow(eGFR,2);
                //now let's mean-center the remaining continuous variables
                //all arrays have the first element for HFpEF and second for HFrEF
                //first bmi-1
           
                mcbmi1[0] = mean_center(HFpEFCoeff[2],BMI_1,sex,race);
                mcbmi1[1] = mean_center(HFrEFCoeff[2],BMI_1,sex,race);
                //next bmi-2
                mcbmi2[0] = mean_center(HFpEFCoeff[3],BMI_2,sex,race);
                mcbmi2[1] = mean_center(HFrEFCoeff[3],BMI_1ln,sex,race); //replaced BMI_2 with BMI_1ln
                //now SBP-1
                mcsbp1[0] = mean_center(HFpEFCoeff[4],SBP_1,sex,race);
                mcsbp1[1] = mean_center(HFrEFCoeff[4],SBP_1,sex,race);
                //next SBP-2
                mcsbp2[0] = mean_center(HFpEFCoeff[5],SBP_2,sex,race);
                mcsbp2[1] = mean_center(HFrEFCoeff[5],SBP_2,sex,race);
                //eGFR
                mcegfr1[0] = mean_center(HFpEFCoeff[6],eGFR,sex,race);
                mcegfr1[1] = mean_center(HFrEFCoeff[6],eGFR,sex,race);
                //egfr2
                mcegfr2[0] = mean_center(HFpEFCoeff[7],eGFR2,sex,race);
                mcegfr2[1] = mean_center(HFrEFCoeff[7],eGFR2,sex,race);
                if ((sex === 0) && (race ===0)) //white male
                {
                    //first HFpEF
                    xBeta[0] = mcage2[0]*-23673 + mcage2ln[0] * 5920.4 + diabetes*0.53733 + mcbmi1[0]*-270.14+mcbmi2[0]*3066+mcsbp1[0]*-1049.4+mcsbp2[0]*60782;
                    xBeta[0] += hypertension * 0.43238 + pMI * 0.79943 + aFib * 0.64536 + smokerWeight[0] + COPD * 0.73618 + mcegfr1[0] * -0.059238;
                    xBeta[0] += mcegfr2[0] * 0.0003754;
                    //now HFrEF
                    xBeta[1] = mcage2[1]*-36839 + mcage2ln[1] * 10034 + diabetes*0.54141 + mcbmi1[1]*319.93+mcbmi2[1]*-143.43+mcsbp1[1]*-903.06+mcsbp2[1]*55221;
                    xBeta[1] += hypertension * 0.27418 + pMI * 0.86422 + pCAD * 0.58366 + aFib * 0.4946 + smokerWeight[1] + COPD * 0.37526 + mcegfr1[1] * -0.053074;
                    xBeta[1] += mcegfr2[1] * 0.0003372;
                }
                else if ((sex === 0) && (race ===1)) //African American male
                {
                    //first HFpEF
                    xBeta[0] = mcage2[0]*10787 + mcage2ln[0] * -3908.1 + diabetes*0.63235 + mcbmi1[0]*-234.58+mcbmi2[0]*2750.4+mcsbp1[0]*-1217+mcsbp2[0]*70479;
                    xBeta[0] += hypertension * 0.48128 + pMI * 0.98355 + aFib * 0.73928 + smokerWeight[0] + COPD * 0.61387 + mcegfr1[0] * -0.053562;
                    xBeta[0] += mcegfr2[0] * 0.0002814;
                    //now HFrEF
                    xBeta[1] = mcage2[1]*-12596 + mcage2ln[1] * 3139.3 + diabetes*0.46185 + mcbmi1[1]*258.9+mcbmi2[1]*-113.95+mcsbp1[1]*-967.59+mcsbp2[1]*54779;
                    xBeta[1] += hypertension * 0.31285 + pMI * 0.89877 + pCAD * 0.53809+ aFib * 0.65053 + smokerWeight[1] + COPD * 0.26295 + mcegfr1[1] * -0.042165;
                    xBeta[1] += mcegfr2[1] * 0.0002299;
                }
                else if ((sex === 1) && (race === 0)) //White Female
                {
                    //first HFpEF
                    xBeta[0] = mcage2[0]*13951 + mcage2ln[0] * -5302.1 + diabetes*0.52417 + mcbmi1[0]*-248+mcbmi2[0]*2843.3+mcsbp1[0]*-959.22+mcsbp2[0]*58317;
                    xBeta[0] += hypertension * 0.74244 + pMI * 0.91079 + aFib * 0.58403 + smokerWeight[0] + COPD * 0.56266 + mcegfr1[0] * -0.059363;
                    xBeta[0] += mcegfr2[0] * 0.0003701;
                    //now HFrEF
                    xBeta[1] = mcage2[1]*-26532 + mcage2ln[1] * 6659.8 + diabetes*0.58104 + mcbmi1[1]*168.13+mcbmi2[1]*-75.397+mcsbp1[1]*-621.61+mcsbp2[1]*28797;
                    xBeta[1] += hypertension * 0.41315 + pMI * 1.0276 + pCAD * 0.50868 + aFib * 0.91438 + smokerWeight[1] + COPD * 0.43042 + mcegfr1[1] *-0.056461;
                    xBeta[1] += mcegfr2[1] * 0.0003536;
                }
                else if ((sex === 1) && (race === 1)) //African American Female
                {
                    //first HFpEF
                    xBeta[0] = mcage2[0]*64403 + mcage2ln[0] * -19488 + diabetes*1.0977 + mcbmi1[0]*-159.4+mcbmi2[0]*1857.7+mcsbp1[0]*-1545.1+mcsbp2[0]*93175;
                    xBeta[0] += hypertension * 0.57702 + pMI * 0.48945 + aFib * 0.74776 + smokerWeight[0] + COPD * 0.6554 + mcegfr1[0] * -0.041395;
                    xBeta[0] += mcegfr2[0] * 0.0001988;
                    //now HFrEF
                    xBeta[1] = mcage2[1]*-25884 + mcage2ln[1] * 7016.3 + diabetes*0.63186 + mcbmi1[1]*20.933+mcbmi2[1]*-15.256+mcsbp1[1]*-1763.4+mcsbp2[1]*103730;
                    xBeta[1] += hypertension * 0.29358 + pMI * 0.81117 + pcad *0.65882 + aFib * 1.7529 + smokerWeight[1] + COPD * 0.40719 + mcegfr1[1] * -0.043111;
                    xBeta[1] += mcegfr2[1] * 0.0002094;
                }
                eXbeta[0] = Math.exp(xBeta[0]);
                eXbeta[1] = Math.exp(xBeta[1]);
                if ((sex === 0) && (race ===0)) //white male
                {
                    risk[0] = 1- Math.pow(0.9876515,eXbeta[0]);
                    risk[1] = 1 - Math.pow(0.9815184,eXbeta[1]);
                }
                else  if ((sex === 0) && (race ===1)) //African American male
                {
                    risk[0] = 1- Math.pow(0.9874179,eXbeta[0]);
                    risk[1] = 1 - Math.pow(0.9772750,eXbeta[1]);
                }
                else if ((sex === 1) && (race ===0)) //white females
                {
                    risk[0] = 1- Math.pow(0.9923794,eXbeta[0]);
                    risk[1] = 1 - Math.pow(0.9936674,eXbeta[1]);
                }
                else if ((sex === 1) && (race ===1)) //African American females
                {
                    risk[0] = 1- Math.pow(0.9936079,eXbeta[0]);
                    risk[1] = 1 - Math.pow(0.9941458,eXbeta[1]);
                }
                risk[0] = numberFormat(risk[0]*100,2);
                risk[1] = numberFormat(risk[1]*100,2)
                return risk;
 }   

function mean_center(coeff,cent_var,sex,race)
/* Function Name:   mean_center
 * Purpose:         This function uses a coefficient to center the mean
 * Input:           coeff: an array of coefficients used for centering
 *                  cent_var: the actual variable that will be centered
 *                  sex: the gender
 *                  race: the race
 * Returns:         the centered mean
 */
{
    var ret_val;
    if (sex === 0) //male
    {
        if (race === 0) //white
        {
            ret_val = cent_var-coeff[0];
        }
        else //African American
        {
            ret_val = cent_var-coeff[1];
        }
    }
    else // female
    {
        if (race === 0) //white
        {
            ret_val = cent_var-coeff[2];
        }
        else //African American
        {
            ret_val = cent_var-coeff[3];
        }
    } 
    return ret_val;
}

function get_smokeWeight(type,sex,race,model)
/*
 * Name:        get_smokeWeight
 * Description: calculates the value for smoking based on the sex, race and model
 * Input:       type:   2 - current
 *                      1 - former
 *              sex:    gender
 *              race:   race 0 -white 1 - African American
 *              model:  0 - HFpEF
 *                      1 - HFrEF
 * Output:      smoking weight
 */
{
    var ret_val;
    if ((sex ===0 ) && (race === 0)) //white male
    {
        if (model === 0) //HFpEF
        {
            if (type === 2) //current
                ret_val = 0.46217;
            else
                ret_val = 0.2377;
        }
        else //HFrEF
        {
            if (type === 2) //current
                ret_val = 0.54047;
            else
                ret_val = 0.24067;
        }
    }
    else if ((sex ===0 ) && (race === 1)) //African American male
    {
         if (model === 0) //HFpEF
        {
            if (type === 2) //current
                ret_val = 0.31372;
            else
                ret_val = 0.24107;
        }
        else //HFrEF
        {
            if (type === 2) //current
                ret_val = 0.53331;
            else
                ret_val = 0.30329;
        }
    }
    else if ((sex === 1 ) && (race === 0)) //White Female
    {
        if (model === 0) //HFpEF
        {
            if (type === 2) //current
                ret_val = 0.72708;
            else
                ret_val = 0.2081;
        }
        else //HFrEF
        {
            if (type === 2) //current
                ret_val = 0.81355;
            else
                ret_val = 0.2261;
        }
    }
    else if ((sex === 1 ) && (race === 1)) //African American Women
    {
        if (model === 0) //HFpEF
        {
            if (type === 2) //current
                ret_val = 0.46656;
            else
                ret_val = 0.13677;
        }
        else //HFrEF
        {
            if (type === 2) //current
                ret_val = 0.82059;
            else
                ret_val = 0.53959;
        }
    }
    return ret_val;
}
function calc_bmi(ht,wt)
{
    var ret_val = (wt/ht/ht)*703;
    return ret_val;
}



//ASCVD Risk Calc Code
function numberFormat(val, decimalPlaces) {

    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
}
function calc_risk_ASCVD() {
                //declare a totscore variable
               var totScore;
                //declare variables to hold the rest
                var age, age5,age5Weight, sex, sexWeight,race, race_t, raceWeight,diabetes, diabetesWeight, smoker, smokerWeight, 
                        hypertension, hypertension_t, statin, statin_t, systolic, diastolic,totchl, hdl, ldl;
                //(05/2020) this now needs to be split out based on statin or not statin use
                age = parseInt($("#txtAge").val());
                age5 = age/5;
                age5Weight = age5*0.20551;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 1;
                else
                    sex = 0;
                sexWeight = sex * 0.46515;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 1;
                else if (race_t === 'African American')
                    race = 0;
                else
                    race = 0;
                raceWeight = race * -0.17661;
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                    diabetes = 1;
                else
                    diabetes = 0;
                diabetesWeight = diabetes * 0.48240;
                if ($("input[name = 'Smoker']:checked").val() === "Ever")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 0.41682;
                if (parseInt($("#TotChol").val()) > 150 && parseInt($("#TotChol").val()) < 201)
                {
                    totchl = 0.01114;
                }
                else if (parseInt($("#TotChol").val()) > 200 && parseInt($("#TotChol").val()) < 251)
                {
                    totchl = 0.15278;
                }
                else if (parseInt($("#TotChol").val()) > 250)
                {
                    totchl = 0.45186;
                }
                else
                {
                    totchl = 0;
                }
                hdlc=parseInt($("#HDL").val());
                hdlc10 = hdlc/10;
                hdlcWeight = hdlc10 * -0.07256;
                bpSys = parseInt($("#BP_Sys").val());
                bpSys10 = bpSys/10;
                bpSysWeight = bpSys10*0.08852;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    hypertensionWeight = 0;
                else
                    hypertensionWeight = 0.31875
                if ($("input[name = 'Statin']:checked").val() === "No")
                    statinWeight = 0;
                else
                    statinWeight = -0.07573;
                xbeta = age5Weight + sexWeight + raceWeight + diabetesWeight + smokerWeight + totchl+hdlcWeight+bpSysWeight+hypertensionWeight+statinWeight;
                eXbeta = Math.exp(xbeta-2.64999);
                risk = 1 - Math.pow(0.99047,eXbeta);
                return numberFormat(risk*100,2);
                }   

//ASCVD for Diabetes Risk Calculations
/*riskCalc.js
 * Author: John P. Russo
 * Description: This performs calculations for ACVD for diabetes fields
 * Date: August-September 2019
 * 
 * Functions:   numberFormat    - used to format a number a certain number of decimal places
 *              calc_risk       - calculate ASCVD without diabetes variables
 *              calc_ASCVD      - calculates the ASCVD risk and returns a value
 *              calc_AIS         - calculates AIS risk and returns a value
 *              calc_MI         - calculates MI risk and returns a value
 *              calc_Death      - calculates death risk and returns a value
 *              
 */
function numberFormat(val, decimalPlaces) {
/*
 * function: numberFormat 
 * Description: returns a number to the passed number of decimal places
 */
    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
}

function calc_risk() {
                //declare a totscore variable

                var totScore;
                //declare variables to hold the rest
                var age, age5,age5Weight, sex, sexWeight,race, race_t, raceWeight,diabetes, diabetesWeight, smoker, smokerWeight, hypertension, hypertension_t, statin, statin_t, systolic, diastolic,
                        totchl, hdl, ldl;
                age = parseInt($("#txtAge").val());
                age5 = age/5;
                age5Weight = age5*.18860;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 0;
                else
                    sex = 1;
                sexWeight = sex * -0.44487;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 0;
                else if (race_t === 'African American')
                    race = 1;
                else
                    race = 0;
                raceWeight = race * 0.19447;
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                    diabetes = 1;
                else
                    diabetes = 0;
                diabetesWeight = diabetes * 0.46548;
                if ($("input[name = 'Smoker']:checked").val() === "Yes")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 0.23196;
                if (parseInt($("#TotChol").val()) > 150 && parseInt($("#TotChol").val()) < 201)
                {
                    totchl = 0.00575;
                }
                else if (parseInt($("#TotChol").val()) > 200 && parseInt($("#TotChol").val()) < 251)
                {
                    totchl = 0.14601;
                }
                else if (parseInt($("#TotChol").val()) > 250)
                {
                    totchl = 0.45042;
                }
                else
                {
                    totchl = 0;
                }
                hdlc=parseInt($("#HDL").val());
                hdlc10 = hdlc/10;
                hdlcWeight = hdlc10 * -0.07217;
                bpSys = parseInt($("#BP_Sys").val());
                bpSys10 = bpSys/10;
                bpSysWeight = bpSys10*0.08816;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    hypertensionWeight = -0.31039;
                else
                    hypertensionWeight = 0;
                if ($("input[name = 'Statin']:checked").val() === "Yes")
                    statinWeight = -0.08891;
                else
                    statinWeight = 0;

                xbeta = age5Weight + sexWeight + raceWeight + diabetesWeight + smokerWeight + totchl+hdlcWeight+bpSysWeight+hypertensionWeight+statinWeight;
                eXbeta = Math.exp(xbeta-3.055209856);
                risk = 1 - Math.pow(0.970787977,eXbeta);
                return numberFormat(risk*100,2);
                }   

function calc_ASCVD() 
/*
 * function:    calc_ASCVD()
 * Description: calculates the risk of ASCVD using diabetes fields
 */
{
                //declare a totscore variable
                var totScore;
                //declare variables to hold the rest
                var age, ageWeight, ageLogSQWeight,sex, sexWeight,race,  raceWeight, smoker, smokerWeight, hypertension, hypertension_t, statin, statin_t,
                        systolic, totchl,totchlWeight, chlAgeWeight, hdlc, hdlcWeight,ageHdlWeight,bpMed, bpSysbpMedWeight,bpSysbpAgeWeight,ageSmokeWeight,
                        a1c, a1cWeight,egfr,egfrWeight,insulin, insulinWeight,sulfonyl, sulfonylWeight,otherDiab, otherDiabWeight,microAlb, 
                        microAlbWeight;
                age = parseInt($("#txtAge").val());
                ageWeight = Math.log(age)*18.9496
                ageLogSQWeight = Math.log(age)*Math.log(age)*-1.82065;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 0;
                else
                    sex = 1;
                sexWeight = sex * -0.21382
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 0;
                else if (race_t === 'African American')
                    race = 1;
                else
                    race = 0;
                raceWeight = race * 0.003490576;
                if ($("input[name = 'Smoker']:checked").val() === "Yes")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 3.90106;
                totchl = parseInt($("#TotChol").val());
                totchlWeight = Math.log(totchl)*1.38594;
                chlAgeWeight = Math.log(totchl)*Math.log(age)*-0.17667;
                hdlc=parseInt($("#HDL").val());
                hdlcWeight = Math.log(hdlc) * 0.42114;
                ageHdlWeight = Math.log(hdlc)*Math.log(age)*-0.17799;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    bpMed = 0;
                else
                    bpMed = 1;
                bpSys = parseInt($("#BP_Sys").val());
                bpSysbpMedWeight = Math.log(bpSys)*bpMed*0.62768;
                bpSysbpAgeWeight = Math.log(age)*Math.log(bpSys)*bpMed*-0.14554;
                ageSmokeWeight = Math.log(age)*smoker*-0.92560;        
                if ($("input[name = 'Statin']:checked").val() === "Yes")
                    statinWeight = -0.033734;
                else
                    statinWeight = 0;
                
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                {
                    a1c = parseInt($("#A1C").val());
                    a1cWeight = Math.log(a1c)*0.92618;
                    egfr = parseInt($("#eGFR").val());
                    egfrWeight = Math.log(egfr)*-0.35818;
                    if ($("input[name = 'Insulin']:checked").val() === "No")
                        insulin = 0;
                    else
                        insulin = 1;
                    insulinWeight = insulin * 0.28100;
                    if ($("input[name = 'SulfonlyUrea']:checked").val() === "No")
                        sulfonyl = 0;
                    else
                        sulfonyl = 1;
                    sulfonylWeight = sulfonyl * 0.10185;
                    if ($("input[name = 'OtherDMeds']:checked").val() === "No")
                        otherDiab = 0;
                    else
                        otherDiab = 1;
                    otherDiabWeight = otherDiab * -0.080862;
                    microAlb = parseInt($("#mcAlb").val());
                    microAlbWeight = microAlb * 0.002264563;   
                }
                else
                {
                    a1cWeight = 0;
                    egfrWeight = 0;
                    insulinWeight=0;
                    sulfonylWeight = 0;
                    otherDiabWeight = 0;
                    microAlbWeight = 0;
                }
                 xbeta = ageWeight + ageLogSQWeight+sexWeight + raceWeight + smokerWeight + totchlWeight+ chlAgeWeight+ hdlcWeight+ageHdlWeight+
                         bpSysbpMedWeight+bpSysbpAgeWeight+ageSmokeWeight+ statinWeight+ a1cWeight+egfrWeight+ insulinWeight+sulfonylWeight+
                         otherDiabWeight+microAlbWeight;
                eXbeta = Math.exp(xbeta-49.7547);
                risk = 1 - Math.pow(0.94992,eXbeta);
                return numberFormat(risk*100,2);
                }   

//now calculate mi
function calc_MI() 
/*
 * function:    calc_MI()
 * Description: calculates the risk of MI using diabetes fields
 */
{
                //declare a totscore variable
                var totScore;
                //declare variables to hold the rest
                var age, ageWeight, ageLogSQWeight,sex, sexWeight,race,  raceWeight, smoker, smokerWeight, hypertension, hypertension_t, statin, statin_t,
                        systolic, totchl,totchlWeight, chlAgeWeight, hdlc, hdlcWeight,ageHdlWeight,bpMed, bpSysbpMedWeight,bpSysbpAgeWeight,ageSmokeWeight,
                        a1c, a1cWeight,egfr,egfrWeight,insulin, insulinWeight,sulfonyl, sulfonylWeight,otherDiab, otherDiabWeight,microAlb, 
                        microAlbWeight;
                age = parseInt($("#txtAge").val());
                ageWeight = Math.log(age)*33.5917;
                ageLogSQWeight = Math.log(age)*Math.log(age)*-3.95840;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 0;
                else
                    sex = 1;
                sexWeight = sex * -0.14536;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 0;
                else if (race_t === 'African American')
                    race = 1;
                else
                    race = 0;
                raceWeight = race * -0.26031;
                if ($("input[name = 'Smoker']:checked").val() === "Yes")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 2.15214;
                totchl = parseInt($("#TotChol").val());
                totchlWeight = Math.log(totchl)*1.70872;
                chlAgeWeight = Math.log(totchl)*Math.log(age)*-0.22920;
                hdlc=parseInt($("#HDL").val());
                hdlcWeight = Math.log(hdlc) * -1.78410;
                ageHdlWeight = Math.log(hdlc)*Math.log(age)*0.29576;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    bpMed = 0;
                else
                    bpMed = 1;
                bpSys = parseInt($("#BP_Sys").val());
                bpSysbpMedWeight = Math.log(bpSys)*bpMed*0.87932;
                bpSysbpAgeWeight = Math.log(age)*Math.log(bpSys)*bpMed*-0.21101;
                ageSmokeWeight = Math.log(age)*smoker*-0.47557;        
                if ($("input[name = 'Statin']:checked").val() === "Yes")
                    statinWeight = 0.037998;
                else
                    statinWeight = 0;
                
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                {
                    a1c = parseInt($("#A1C").val());
                    a1cWeight = Math.log(a1c)*0.86555;
                    egfr = parseInt($("#eGFR").val());
                    egfrWeight = Math.log(egfr)*-0.43044;
                    if ($("input[name = 'Insulin']:checked").val() === "No")
                        insulin = 0;
                    else
                        insulin = 1;
                    insulinWeight = insulin * 0.27731;
                    if ($("input[name = 'SulfonlyUrea']:checked").val() === "No")
                        sulfonyl = 0;
                    else
                        sulfonyl = 1;
                    sulfonylWeight = sulfonyl * 0.082256;
                    if ($("input[name = 'OtherDMeds']:checked").val() === "No")
                        otherDiab = 0;
                    else
                        otherDiab = 1;
                    otherDiabWeight = otherDiab * -0.059207;
                    microAlb = parseInt($("#mcAlb").val());
                    microAlbWeight = microAlb * 0.001920131;   
                }
                else
                {
                    a1cWeight = 0;
                    egfrWeight = 0;
                    insulinWeight=0;
                    sulfonylWeight = 0;
                    otherDiabWeight = 0;
                    microAlbWeight = 0;
                }
                 xbeta = ageWeight + ageLogSQWeight+sexWeight + raceWeight + smokerWeight + totchlWeight+ chlAgeWeight+ hdlcWeight+ageHdlWeight+
                         bpSysbpMedWeight+bpSysbpAgeWeight+ageSmokeWeight+ statinWeight+ a1cWeight+egfrWeight+ insulinWeight+sulfonylWeight+
                         otherDiabWeight+microAlbWeight;
                eXbeta = Math.exp(xbeta-72.9997);
                risk = 1 - Math.pow(0.97855,eXbeta);
                return numberFormat(risk*100,2);
                }   
                
   //calc AIS
   function calc_AIS() 
/*
 * function:    calc_AIS()
 * Description: calculates the risk of AIS using diabetes fields
 */
{
                //declare a totscore variable
                var totScore;
                //declare variables to hold the rest
                var age, ageWeight, ageLogSQWeight,sex, sexWeight,race,  raceWeight, smoker, smokerWeight, hypertension, hypertension_t, statin, statin_t,
                        systolic, totchl,totchlWeight, chlAgeWeight, hdlc, hdlcWeight,ageHdlWeight,bpMed, bpSysbpMedWeight,bpSysbpAgeWeight,ageSmokeWeight,
                        a1c, a1cWeight,egfr,egfrWeight,insulin, insulinWeight,sulfonyl, sulfonylWeight,otherDiab, otherDiabWeight,microAlb, 
                        microAlbWeight;
                age = parseInt($("#txtAge").val());
                ageWeight = Math.log(age)*25.7558;
                ageLogSQWeight = Math.log(age)*Math.log(age)*-2.67664;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 0;
                else
                    sex = 1;
                sexWeight = sex * -0.13267;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 0;
                else if (race_t === 'African American')
                    race = 1;
                else
                    race = 0;
                raceWeight = race * 0.26215;
                if ($("input[name = 'Smoker']:checked").val() === "Yes")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 4.29949;
                totchl = parseInt($("#TotChol").val());
                totchlWeight = Math.log(totchl)*-0.17577;
                chlAgeWeight = Math.log(totchl)*Math.log(age)*0.19084;
                hdlc=parseInt($("#HDL").val());
                hdlcWeight = Math.log(hdlc) * 1.88671;
                ageHdlWeight = Math.log(hdlc)*Math.log(age)*-0.50053;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    bpMed = 0;
                else
                    bpMed = 1;
                bpSys = parseInt($("#BP_Sys").val());
                bpSysbpMedWeight = Math.log(bpSys)*bpMed*0.81686;
                bpSysbpAgeWeight = Math.log(age)*Math.log(bpSys)*bpMed*-0.18904;
                ageSmokeWeight = Math.log(age)*smoker*-1.01281;        
                if ($("input[name = 'Statin']:checked").val() === "Yes")
                    statinWeight = -0.053618;
                else
                    statinWeight = 0;
                
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                {
                    a1c = parseInt($("#A1C").val());
                    a1cWeight = Math.log(a1c)*1.08183;
                    egfr = parseInt($("#eGFR").val());
                    egfrWeight = Math.log(egfr)*-0.16523;
                    if ($("input[name = 'Insulin']:checked").val() === "No")
                        insulin = 0;
                    else
                        insulin = 1;
                    insulinWeight = insulin * 0.17974;
                    if ($("input[name = 'SulfonlyUrea']:checked").val() === "No")
                        sulfonyl = 0;
                    else
                        sulfonyl = 1;
                    sulfonylWeight = sulfonyl * 0.080476;
                    if ($("input[name = 'OtherDMeds']:checked").val() === "No")
                        otherDiab = 0;
                    else
                        otherDiab = 1;
                    otherDiabWeight = otherDiab * -0.074728;
                    microAlb = parseInt($("#mcAlb").val());
                    microAlbWeight = microAlb * 0.002229916;   
                }
                else
                {
                    a1cWeight = 0;
                    egfrWeight = 0;
                    insulinWeight=0;
                    sulfonylWeight = 0;
                    otherDiabWeight = 0;
                    microAlbWeight = 0;
                }
                 xbeta = ageWeight + ageLogSQWeight+sexWeight + raceWeight + smokerWeight + totchlWeight+ chlAgeWeight+ hdlcWeight+ageHdlWeight+
                         bpSysbpMedWeight+bpSysbpAgeWeight+ageSmokeWeight+ statinWeight+ a1cWeight+egfrWeight+ insulinWeight+sulfonylWeight+
                         otherDiabWeight+microAlbWeight;
                eXbeta = Math.exp(xbeta-64.6638);
                risk = 1 - Math.pow(0.98002,eXbeta);
                return numberFormat(risk*100,2);
                }  
                
   //cvd deaths
   function calc_Death() 
/*
 * function:    calc_Death()
 * Description: calculates the CVD deaths using diabetes fields
 */
{
                //declare a totscore variable
                var totScore;
                //declare variables to hold the rest
                var age, ageWeight, ageLogSQWeight,sex, sexWeight,race,  raceWeight, smoker, smokerWeight, hypertension, hypertension_t, statin, statin_t,
                        systolic, totchl,totchlWeight, chlAgeWeight, hdlc, hdlcWeight,ageHdlWeight,bpMed, bpSysbpMedWeight,bpSysbpAgeWeight,ageSmokeWeight,
                        a1c, a1cWeight,egfr,egfrWeight,insulin, insulinWeight,sulfonyl, sulfonylWeight,otherDiab, otherDiabWeight,microAlb, 
                        microAlbWeight;
                age = parseInt($("#txtAge").val());
                ageWeight = Math.log(age)*-15.5846;
                ageLogSQWeight = Math.log(age)*Math.log(age)*3.01077;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 0;
                else
                    sex = 1;
                sexWeight = sex * -0.31028;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 0;
                else if (race_t === 'African American')
                    race = 1;
                else
                    race = 0;
                raceWeight = race * 0.016973;
                if ($("input[name = 'Smoker']:checked").val() === "Yes")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 3.06123;
                totchl = parseInt($("#TotChol").val());
                totchlWeight = Math.log(totchl)*0.40314;
                chlAgeWeight = Math.log(totchl)*Math.log(age)*-0.009322967;
                hdlc=parseInt($("#HDL").val());
                hdlcWeight = Math.log(hdlc) * 5.91861;
                ageHdlWeight = Math.log(hdlc)*Math.log(age)*-1.44213;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    bpMed = 0;
                else
                    bpMed = 1;
                bpSys = parseInt($("#BP_Sys").val());
                bpSysbpMedWeight = Math.log(bpSys)*bpMed*-0.13179;
                bpSysbpAgeWeight = Math.log(age)*Math.log(bpSys)*bpMed*0.0373375;
                ageSmokeWeight = Math.log(age)*smoker*-0.76306;        
                if ($("input[name = 'Statin']:checked").val() === "Yes")
                    statinWeight = -0.16998;
                else
                    statinWeight = 0;
                
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                {
                    a1c = parseInt($("#A1C").val());
                    a1cWeight = Math.log(a1c)*0.74074;
                    egfr = parseInt($("#eGFR").val());
                    egfrWeight = Math.log(egfr)*-0.59522;
                    if ($("input[name = 'Insulin']:checked").val() === "No")
                        insulin = 0;
                    else
                        insulin = 1;
                    insulinWeight = insulin * 0.44208;
                    if ($("input[name = 'SulfonlyUrea']:checked").val() === "No")
                        sulfonyl = 0;
                    else
                        sulfonyl = 1;
                    sulfonylWeight = sulfonyl * 0.19415;
                    if ($("input[name = 'OtherDMeds']:checked").val() === "No")
                        otherDiab = 0;
                    else
                        otherDiab = 1;
                    otherDiabWeight = otherDiab * -0.13477;
                    microAlb = parseInt($("#mcAlb").val());
                    microAlbWeight = microAlb * 0.003061906;   
                }
                else
                {
                    a1cWeight = 0;
                    egfrWeight = 0;
                    insulinWeight=0;
                    sulfonylWeight = 0;
                    otherDiabWeight = 0;
                    microAlbWeight = 0;
                }
                 xbeta = ageWeight + ageLogSQWeight+sexWeight + raceWeight + smokerWeight + totchlWeight+ chlAgeWeight+ hdlcWeight+ageHdlWeight+
                         bpSysbpMedWeight+bpSysbpAgeWeight+ageSmokeWeight+ statinWeight+ a1cWeight+egfrWeight+ insulinWeight+sulfonylWeight+
                         otherDiabWeight+microAlbWeight;
                eXbeta = Math.exp(xbeta-12.3901);
                risk = 1 - Math.pow(0.98686,eXbeta);
                return numberFormat(risk*100,2);
                }   


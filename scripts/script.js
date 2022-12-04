function calculate()
{
  var principalAmount = (document.getElementById("principal-amount").value).replaceAll(',', '');
  var principalAmountValue = parseFloat(principalAmount);

  var rateOfInterest = (document.getElementById("rate").value).replaceAll(',', '');
  var rateOfInterestValue = parseFloat(rateOfInterest);

  var periodUnit = document.getElementById("period-unit").value;

  var periodValue = (document.getElementById("period-value").value).replaceAll(',', '');
  var periodValueValue = parseFloat(periodValue);

  if(periodUnit == "days")
  {
    periodValueValue = periodValueValue / 365;
  }
  else if(periodUnit == "weeks")
  {
    periodValueValue = periodValueValue / 52;
  }
  else if(periodUnit == "months")
  {
    periodValueValue = periodValueValue / 12;
  }

  var interest = (principalAmountValue * rateOfInterestValue * periodValueValue) / 100;

  document.getElementById("interest-earned-para").innerHTML = interest.toFixed(2);
  document.getElementById("total-value-para").innerHTML = (principalAmountValue + interest).toFixed(2);
}
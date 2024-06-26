export let wdaSelects = `
  <option selected="selected">Or A Local Workforce Development Area (LWDA)...</option>
  <option value="AnneArundelLWDA.html">Anne Arundel LWDA</option>
  <option value="BaltimoreCityLWDA.html">Baltimore City LWDA</option>
  <option value="BaltimoreCountyLWDA.html">Baltimore County LWDA</option>
  <option value="FrederickLWDA.html">Frederick County LWDA</option>
  <option value="LowerShoreLWDA.html">Lower Shore LWDA</option>
  <option value="MidMarylandLWDA.html">Mid Maryland LWDA</option>
  <option value="MontgomeryLWDA.html">Montgomery LWDA</option>
  <option value="PrinceGeorgesLWDA.html">Prince George's LWDA</option>
  <option value="SouthernMarylandLWDA.html">Southern Maryland LWDA</option>
  <option value="SusquehannaLWDA.html">Susquehanna LWDA</option>
  <option value="UpperShoreLWDA.html">Upper Shore LWDA</option>
  <option value="WesternMarylandLWDA.html">Western Maryland LWDA</option>
  <option value="Maryland.html" >Maryland</option>
`

export let wdaDropdowns = `
<div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse5" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>
</div>
`

let wdaFooter = `
<div class="Footer">
  <p id= "wda_footer">Notes:<br>1. For Maryland Separation data up until 2019Q2, please click <a style="color:blue" href="https://docs.google.com/spreadsheets/d/1YnQrj3p0j1NnT0HxfP0ramIycnXsEp51JxoY_xwMfq4/edit?usp=sharing" target="_blank">2019Q2 Prior</a>
    <br>2. "TBD" represents values that are yet to be determined.
    <br>3. For Industry Metrics, "0" values in some sectors (e.g. Educational Services) represent suppressed values because they do not meet U.S. Census Bureau publication standards.
    <br>Data source: Longitudinal Employer-Household Dynamics (LEHD), last accessed on May 28, 2024<br><br></p>

   
  </div>
`

export let wdaCollapse1 = `
<div id="collapse1" style="display: none;">
  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
    <div class="buttons">
      <p>
        Indicator: 
        <select id="collapse1_dd">
          <option>By Age</option>
          <option>By Gender</option>
        </select>
      </p>
    </div>
  </div>
  <div class="ChartDiv">
    <div id="Chart3">
      <p></p>
    </div>
    <div id="Print3" class="print"></div>
  </div>
  <div class="Table">
    <table id ="table3" style="font-size: 80%"></table>
    ${wdaFooter}
  </div>

</div>
`

export let wdaCollapse2 = `
<div id="collapse2" style="display: none;">
  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
    <div class="buttons">
      <p>
        Indicator: 
        <select id="collapse2_dd">
          <option>By Education</option>
          <option>By Gender</option>
        </select>
      </p>
    </div>
  </div>
  <div class="ChartDiv">
    <div id="Chart4">
    </div>
    <div id="Print4" class="print"></div>
  </div>
  <div class="Table">
    <table id="table4">
    </table>
      <p id= "table4_footer"><br>New Hires:<br> Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters.<br><br>Job Net Change:<br> Difference between firm job gain and firm job loss.</p>
    </div>
    ${wdaFooter}
  </div>
</div>
`

export let wdaCollapse3 = `
<div id="collapse3" style="display: none;">
  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
    <div class="buttons">
      <p>
        Indicator: 
        <select id="collapse3_dd">
          <option>By Education</option>
          <option>By Gender</option>
        </select>
      </p>
    </div>
  </div>
  <div class="ChartDiv">
    <div id="ChartFive">
    </div>
    <div id="PrintFive" class="print"></div>
    <div class="Table">
      <table id="table5">
      </table>
      <div class="Footer" >
        <p id= "table5_footer"><br><br>Turnover Rate:<br>The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>
      </div>
      ${wdaFooter}
    </div>
  </div>
</div>
`

export function wdaCollapse4(CountyName) {
    return `
<div id="collapse4" style="display: none;">
   <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
      <div class="buttons">
         <p>
            Indicator:
            <select id="collapse4_dd">
               ${CountyName == 'Maryland' ? '' : '<option>Average Monthly Earnings</option>'}
               <option>Job Net Changes</option>
               <option>New Hires</option>
               <option>Turnover Rate(%)</option>
               <option selected="selected">Workers</option>
            </select>
         </p>
         <button type="button" id="btn6wda">Toggle Labels</button>
      </div>
   </div>
   <div class="ChartDiv">
      <div id="Chart6"></div>
      <div id="Print6" class="print"></div>
      <style>
         #table6 > tbody > tr > td { text-align:right !important }
      </style>
      <div id="Table">
         <table id="table6" >
         </table>
         <div class="Footer" >
            <p id= "table6_footer">New Hires:<br> Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters.<br><br>Job Net Change: Difference between firm job gain and firm job loss.<br><br>Turnover Rate:<br> The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment. Turnover Rate values are measured as a percentage (%), but are shown as a decimal in this chart.</p>
           
         </div>
         ${wdaFooter}
      </div>
   </div>
</div>
`
}

export let wdaCollapse5 = `
<div id="collapse5" style="display:none;">
   <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">
      <div class="buttons">
         <p>
            Indicator:
            <select id="collapse5_dd">
               <option selected="selected">Industry</option>
               <option>Gender</option>
               <option>Education</option>
               <option>Age</option>
            </select>
         </p>
         <button type="button" id="btn7wda">Toggle Labels</button>
      </div>
   </div>
   <div class="ChartDiv">
      <div id="Chart17"> </div>
      <div id="Print17" class="print"></div>
   </div>
   <div class="Table">
      <table id="table15"> </table>
      <div class="Footer" >
        <p id= "table15_footer">*Estimated number of workers whose job with a given employer ended in the specified quarter.</p>
      </div>
      ${wdaFooter}
   </div>
</div>
`
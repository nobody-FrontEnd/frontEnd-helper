import{d as r,aa as t,c as p,u as c,o as u,dm as i,_ as d}from"./index.fa3829f9.js";const _=r({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},setup(n){const a=n;t();function o(e){return e.value.replace(/--.*\n/g,"").replace(/\s+/g," ").replace(/\s+\(/,"(").replace(/\s+\)/,")")}function s(e){e.value=l}const l=`CREATE TABLE MortgageCompanies (ID INTEGER PRIMARY KEY, NAME CHAR(30));
INSERT INTO
  MortgageCompanies
VALUES
  (1, 'Quicken Loans');
INSERT INTO
  MortgageCompanies
VALUES
  (2, 'Wells Fargo Bank');
INSERT INTO
  MortgageCompanies
VALUES
  (3, 'JPMorgan Chase Bank');
SELECT
  *
FROM
  MortgageCompanies;`;return(e,g)=>(u(),p(c(i),{onChange:o,onMounted:s,"auto-fill":"","auto-fill-type":"sql","clipboard-value":a.clipboardValue},null,8,["clipboard-value"]))}});const m=d(_,[["__scopeId","data-v-64106ee6"]]);export{m as default};

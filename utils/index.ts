/**
 * Return a random value from Enum
 *
 * @param anEnum - any Enum
 *
 * @returns
 */


 import HttpStatusCode from '../types/statusCode';
 
 export function randomEnum(anEnum: any) {
   const enumValues = Object.keys(anEnum).map((n) => anEnum[n]);
   const randomIndex = Math.floor(Math.random() * enumValues.length);
   const randomEnumValue = enumValues[randomIndex];
   return randomEnumValue;
 }
 
 export function getEnumKey(anEnum: any, value: any) {
   return Object.keys(anEnum)[Number(Object.values(anEnum).indexOf(value))];
 }
 
 export function readableString(string: string) {
   var i,
     frags = string.split('_');
   for (i = 0; i < frags.length; i++) {
     frags[i] = frags[i].toLowerCase();
     frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
   }
   return frags.join(' ');
 }
 
 export function getStatusMessage(statuscode: number) {
   return readableString(getEnumKey(HttpStatusCode, statuscode));
 }
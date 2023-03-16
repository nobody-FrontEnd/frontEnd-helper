import{cV as i,cP as u}from"./index.fa3829f9.js";function g(e){return this.subnetMask<e.subnetMask?!1:this.mask(e.subnetMask)===e.mask()}function b(e){return function(){return this.addressMinusSuffix!==this.correctForm()?!1:this.subnetMask===e&&!this.parsedSubnet?!0:this.parsedSubnet===String(this.subnetMask)}}const o=32,p=4,d=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g,h=/\/\d{1,2}$/;class c extends Error{constructor(t,s){super(t),this.name="AddressError",s!==null&&(this.parseMessage=s)}}class r{constructor(t){this.groups=p,this.parsedAddress=[],this.parsedSubnet="",this.subnet="/32",this.subnetMask=32,this.v4=!0,this.isCorrect=b(o),this.isInSubnet=g,this.address=t;const s=h.exec(t);if(s){if(this.parsedSubnet=s[0].replace("/",""),this.subnetMask=parseInt(this.parsedSubnet,10),this.subnet=`/${this.subnetMask}`,this.subnetMask<0||this.subnetMask>o)throw new c("Invalid subnet mask.");t=t.replace(h,"")}this.addressMinusSuffix=t,this.parsedAddress=this.parse(t)}static isValid(t){try{return new r(t),!0}catch{return!1}}parse(t){const s=t.split(".");if(!t.match(d))throw new c("Invalid IPv4 address.");return s}correctForm(){return this.parsedAddress.map(t=>parseInt(t,10)).join(".")}static fromHex(t){const s=t.replace(/:/g,"").padStart(8,"0"),n=[];let a;for(a=0;a<8;a+=2){const f=s.slice(a,a+2);n.push(parseInt(f,16))}return new r(n.join("."))}static fromInteger(t){return r.fromHex(t.toString(16))}static fromArpa(t){const n=t.replace(/(\.in-addr\.arpa)?\.$/,"").split(".").reverse().join(".");return new r(n)}toHex(){return this.parsedAddress.map(t=>i.sprintf("%02x",parseInt(t,10))).join(":")}toArray(){return this.parsedAddress.map(t=>parseInt(t,10))}toGroup6(){const t=[];let s;for(s=0;s<p;s+=2){const n=i.sprintf("%02x%02x",parseInt(this.parsedAddress[s],10),parseInt(this.parsedAddress[s+1],10));t.push(i.sprintf("%x",parseInt(n,16)))}return t.join(":")}bigInteger(){return new u.exports.BigInteger(this.parsedAddress.map(t=>i.sprintf("%02x",parseInt(t,10))).join(""),16)}_startAddress(){return new u.exports.BigInteger(this.mask()+"0".repeat(o-this.subnetMask),2)}startAddress(){return r.fromBigInteger(this._startAddress())}startAddressExclusive(){const t=new u.exports.BigInteger("1");return r.fromBigInteger(this._startAddress().add(t))}_endAddress(){return new u.exports.BigInteger(this.mask()+"1".repeat(o-this.subnetMask),2)}endAddress(){return r.fromBigInteger(this._endAddress())}endAddressExclusive(){const t=new u.exports.BigInteger("1");return r.fromBigInteger(this._endAddress().subtract(t))}static fromBigInteger(t){return r.fromInteger(parseInt(t.toString(),10))}mask(t){return t===void 0&&(t=this.subnetMask),this.getBitsBase2(0,t)}getBitsBase2(t,s){return this.binaryZeroPad().slice(t,s)}reverseForm(t){t||(t={});const s=this.correctForm().split(".").reverse().join(".");return t.omitSuffix?s:i.sprintf("%s.in-addr.arpa.",s)}isMulticast(){return this.isInSubnet(new r("224.0.0.0/4"))}binaryZeroPad(){return this.bigInteger().toString(2).padStart(o,"0")}groupForV6(){const t=this.parsedAddress;return this.address.replace(d,i.sprintf('<span class="hover-group group-v4 group-6">%s</span>.<span class="hover-group group-v4 group-7">%s</span>',t.slice(0,2).join("."),t.slice(2,4).join(".")))}}export{r as A,o as B,d as R,b as a,c as b,g as i};

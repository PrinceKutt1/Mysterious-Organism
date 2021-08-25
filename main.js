// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (specimenNum, dna) => {
    return{
    specimenNum:specimenNum ,
    dna: dna,
    mutate(){
let i = Math.floor(Math.random() * this.dna.length);
  
  let oldDNABase = this.dna[i];
  let Bases = ['A', 'T', 'C', 'G'];
  Bases.splice(Bases.indexOf(oldDNABase), 1); 
  let mutate_Base = Bases[Math.floor(Math.random() * 3)]; 
        
          return this.dna.splice(i, 1, mutate_Base);  
    }, 

    compareDNA(pAequorObject ){
      let count=0;
 //const specNum=Math.floor(Math.random() * this.specimenNum);
       for(let i=0; i<this.dna.length ; i++){
         
           if( this.dna[i]==pAequorObject.dna[i]){
             count +=1;
           };
         
       };
  if(count ==0){
    return count=1;};

const commonDna=  ((count/this.dna.length)*100).toFixed(2);

  return `specimen ${this.specimenNum} and ${pAequorObject.specimenNum} have ${commonDna}% DNA in common `
   
   },

   willLikelySurvive(){
    let cBaseCount = 0;
     let gBaseCount = 0;
     for (i=0; i<this.dna.length; i++){
       if (this.dna[i] === 'C'){
         cBaseCount++;
       }
       if (this.dna[i] === 'G'){
         gBaseCount++;
       }
     }
    const survivalPercentage = (((cBaseCount + gBaseCount)/this.dna.length) * 100)//toFixed(2);
    if (survivalPercentage >= 60){
      return true;
      
    } else {
      return false;
    
  }
   } 
  }; 
}; 

const survive_PAequor = [];
  let objectNum = 1;
  while (survive_PAequor.length < 30) {
  let newObject = pAequorFactory(objectNum, mockUpStrand());
  if (newObject.willLikelySurvive() === true){
survive_PAequor.push(newObject);

  }
objectNum++;
}



/*let firstpAequor = pAequorFactory(4,mockUpStrand());
console.log(firstpAequor)
let secondpAequor2 = pAequorFactory(2,mockUpStrand());
console.log(secondpAequor2)
pAequor2.compareDNA(pAequorObject)*/
///console.log(`pAequors organism to likely survive: ${survive_PAequor}`)

console.log("pAequors organism to likely survive: ");
console.log(survive_PAequor);





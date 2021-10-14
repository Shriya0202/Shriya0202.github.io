var names=new Array();
names[0]="Yaakov";
names[1]="Jack";
names[2]="Jennifer";
names[3]="jason";
names[4]="piper";
names[5]="frank";
names[6]="barry";
names[7]="hazel";
names[8]="sam";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
//1.
/*for (i = 1; i <= 20; i ++) {
	console.log(i);
}
//2.
for (i = 0; i <= 200; i ++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}*/
const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (i = 1; i <= 20; i ++) {
	if (i % 2 === 0) {
		answer = cat[Math.floor(Math.random() * 3)];
		console.log(answer);
	} else {
	console.log("Love me, pet me! HSSSSSS!");
}
}
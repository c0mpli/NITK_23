const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
const config = require("../config");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const isUser = require("../middlewares/isUser");
const isAdmin = require("../middlewares/isAdmin");
const Analysis = require("../models/Analysis");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//registering a new employee
router.post("/userregister", async (req, res) => {
	const password = req.body.password;
	const email=req.body.email;
	const name = req.body.name;
	const mobilenum=req.body.mobilenum;
	const goal = req.body.goal;
	const subgoal = req.body.subgoal;
	const age = req.body.age;
	const admin=false;

	if (!password || !email || !name || !mobilenum || !goal || !subgoal || !age )
		return res.status(400).send("One or more of the fields are missing.");

	//checking for multiple accounts for a single email
	const emailcheck= await User.find({email:email});
	if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");


	// add user
	bcrypt.hash(password, saltRounds, async function(err, hash) {
		const newUser = new User({password:hash,name,email,mobilenum,admin,goal,subgoal,age });
		return res.json(await newUser.save());
	});
	
});
//user login
router.post("/userlogin", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).send("Missing email or password");

	// checking if email exists
	const emails = await User.find({ email: email });
	if (emails.length === 0) return res.status(400).send("Email is incorrect");

	const user = emails[0];

	bcrypt.compare(password, user.password, async function(err, result) {
		if(result==false) return res.status(400).send("Incorrect password");

		// sending token
		const token =jwt.sign(
		{
			id: user._id,
		},
		config.jwtSecret,{expiresIn:"1d"}
		);
		res.setHeader("token", token);
		res.json({	user });
	});
});

//registering a therapist
router.post("/therapistregister", async (req, res) => {
	const password = req.body.password;
	const email=req.body.email;
	const name = req.body.name;
	const mobilenum=req.body.mobilenum;
	const admin=true;
	const experience=req.body.experience;
	const specialization=req.body.specialization;

	if (!password || !email || !name || !mobilenum || !experience || !specialization)
		return res.status(400).send("One or more of the fields are missing.");

	//checking for multiple accounts for a single email
	const emailcheck= await User.find({email:email});
	if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");

	// add user
	bcrypt.hash(password, saltRounds, async function(err, hash) {
		const newUser = new User({password:hash,name,email,mobilenum,admin,experience,specialization });
		return res.json(await newUser.save());
	});
  
});

//get all users
router.get("/getallusers", async (req, res) => {
	const users = await User.find({admin:false});
	return res.json(users);
});

//save session notes which are the chats between therapist and user
router.post("/savenotes", async (req, res) => {
	const userid=req.body._id;
	const question = req.body.question;
	//use openai to generate response
	const prompt = `${question}. Answer the question in 1-2 lines. You are answering a mentally weak person so answer more politely.`;
	const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens:500
      });
	const response=completion.data.choices[0].text
	//save this response in the analysis model
	const user = await User.findById(userid);
	const newAnalysis = new Analysis({
		id: user._id,
		sessionNotes: [response],
	});
	await newAnalysis.save();
	return res.json(newAnalysis);
});

//do a sentimental analysis on the chats of a particular user saved in the Analysis model
let p=0,n=0,neg=0,len=0;
router.get("/analyze",async(req,res)=>{
	const final = [];
	Analysis.find({ id: "643a81902386a39c2ab5c5bd" }, { sessionNotes: 1, _id: 0 }, function(err, result) {
	  if (err) {
		console.log(err);
	  } else {
		result.forEach((item) => {
		  final.push(item.sessionNotes[0]);
		});
		console.log(final);
		// Do whatever you need with the 'final' array here
	  }
	});
   data = final
   console.log(data)
   len=data.length;
   data.forEach(ele=>{
	   ele.arrayMessage.forEach(ele2=>{
		   console.log(ele2);
		   const options = {
			method: 'POST',
			url: 'https://sentiment-analysis18.p.rapidapi.com/service/sentiment-analysis',
			headers: {
			  'content-type': 'application/json',
			  'X-RapidAPI-Key': '6c4088c4b3msh43af8160c1bf5b8p1584a8jsn2b35b8442fd1',
			  'X-RapidAPI-Host': 'sentiment-analysis18.p.rapidapi.com'
			},
			data: '{"text":"Hello there! I love this!"}'
		  };
			 
			 axios.request(options).then(function (response) {
			   //   console.log(response.data.type);
				 if(response.data.type=="positive"){
				   p++;
				 }else if(response.data.type=="negative"){
				   neg++;
				 }else{
				   n++;
				 }
			   //   console.log({p,n,neg});
			 }).catch(function (error) {
				 console.error(error);
			 });
	   })
	   console.log({p,n,neg});
	  
   })


});

//generate a report for the therapist
router.get("/report",async(req,res)=>{
	let mood="";
    let a=(len/p)*100,b=(len/n)*100,c=(len/neg)*100;
	if(a>b && a>c){
		mood="Positive";
	}else if(b>a && b>c){
		mood="Neutral";
	}else{
		mood="Negative";
	}
	const report={
		mood,
		positive:a,
		neutral:b,
		negative:c
	}
	return res.json(report);
}
);






	

	
	


	



module.exports = router;

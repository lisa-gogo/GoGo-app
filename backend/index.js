const express = require('express');
const app = express();
const cors = require ('cors')
const pool = require("./db")
const bcrypt = require('bcrypt')
const session = require ('express-session')

// middleware 
app.use(cors());
app.use(express.json())// get json data 

// session 
app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: "hello hello",
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);

const isAuth =(req,res,next)=>{
   if(req.session.isAuth){
       next()
   }else{
       res.redirect('/login')
   }
}


//
app.use(express.urlencoded({extended:false}))

// ROUTES 

app.post("/users/register", async (req, res) =>{
     
        const { first_name, last_name, gender,date_of_birth, job, health_condition,email,password,password2} = req.body;
        console.log(first_name)

        let error =[]
        
        if(!first_name||!last_name||!gender||!date_of_birth||!job||!health_condition||!email||!password||!password2){
           error.push({message:"please enter all field"})
        }

        if(password.length < 6){
            error.push({message:"please should be at leaset 6 characters"})
        }

        if(password !== password2) {
             error.push({message:"password do not match"})
        }

        if(error.length >0){
            res.render('register',{error})
        }else {
             let hashedPassword = await bcrypt.hash(password, 10);
             pool.query(
            `SELECT * FROM users
             WHERE email = $1`,
             [email],
             (err, results) => {
            if (err) {
              console.log(err);
             } else{
                 console.log(results.rows);
                           if(results.rows.length > 0) {
            return res.render("register", {
                message: "Email already registered"
            });
            }else{
                    const newTodo = pool.query(
                    "INSERT INTO users (first_name, last_name, gender, date_of_birth, job, health_condition,email,password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
                    [ first_name, last_name, gender,date_of_birth,  job, health_condition, email,hashedPassword],
                    (err,results)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log(results.rows);
                            // res.redirect("/users/login");
                        }
                    });
                 res.json(newTodo)
            }
             }
             
              }
             )
       
   
}});
// create a todo 

// get all todos

app.get("/users/login", async (req,res) =>{
   
})

app.post("/users/login",async(req,res)=>{ 
    const {email,password}=req.body;
      pool.query(
           `SELECT * FROM users
             WHERE email = $1`,
             [email],
          (err,result)=>{
              if(err){
                  console.log(err)
              }else{
                
                  let isMatch = bcrypt.compare(password,result.rows[0].password) 
                  if(isMatch){
                  req.session.isAuth=true
                  res.redirect("/users/dashboard")
                  }
              }
          }
    )  
    
})
//get a todo

app.get("/users/dashboard", isAuth,async (req,res)=>{
    res.json()
})

app.post("/users/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect('/')
    })
})

//update a todo 

// delete a todo 


app.listen(5000,()=>{
    console.log('server has started on port 5000')
        })
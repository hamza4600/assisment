import React ,{useState } from 'react'
import styles from "./one.module.css"

function Index() {
  return (
    <div className={styles.One}>Index</div>
  )
}

export default Index

// Right Side
export function Right() {
    return(<div className={styles.Right} >
        <p style={{position:"relative",left:"36%", fontWeight:"600"}}>Step 1 of 3 ...</p>
        
        <RightOne/>
        <InputForm/>
        <RightTwo/>
    
    </div>)
}

// Left Side
export function Left() {
    return(<div className={styles.Left}>
        <div className={styles.LeftOne}>
            <h1>dummy heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est exercita tionem ipsam quos autem laboriosam. voluptatum exercitationem atque ex , illum reiciendis. Itaque culpa libero et ea voluptatibus perferendis.</p>
        </div>
    </div>)
}


// Right One
export function RightOne() {
    return(<div className={styles.RightOne}>
        <h1>Let's set up your account</h1>
        <p>Already have a account ?  <SpanBlue text="Sign in"/></p>
        </div>)  
}

// form
export function InputForm() {
    // Hook
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [passData, setPassData] = useState("password")
        // Now we can use the state and Check the value are valid or not  
    
    // For Password 
        const ShowPass=(e)=>{
        if(passData==="password"){
            setPassData("text")
        }else{
            setPassData("password")
        }
    }

return(<div className={styles.Form}>
            <InputField Change={(e)=>setName(e.target.value)} place="Your Name" type={"text"}/>
            <InputField Change={(e)=>setEmail(e.target.value)} place="Your Email" type={"email"}/>
            {/* select filed */}
            <SelectField/>
            {/* Password */}
            <InputField Change={(e)=>setPass(e.target.value)} place="Password" type={passData}/>
            <p className={styles.Show} onClick={ShowPass}>show</p>
            <p className={styles.Min}>Minimum 8 characters</p>

            <Button text="Next"/>
        </div>)
}

// Rigth Two
export function RightTwo() {
    return(<div className={styles.RightTwo}>
           By clicking the "Next" button, you aggre to creat a free account, and to <SpanBlue text={"Terms & Conditions"}/> and <SpanBlue text={"Privacy Policy"}/>.
    </div>)
}


// Input Field
export function InputField({ place,type , Change}) {
    return(<div className={styles.InputField}>
        <input onChange={Change} placeholder={place} type={type}/>
    </div>)
}


// select field
export function SelectField() {
    return(<div className={styles.SelectField}>
    <select name="pets" id="pet-select">
    <option value="">I would describe my user type as</option>
    <option value="hamster">Human</option>
    <option value="parrot">Bot</option>
    <option value="spider">Spam</option>
    <option value="goldfish">Man</option>
</select>

        </div>)
}
// Span blue
export function SpanBlue({text}) {
    return(<span className={styles.Blue}>{text}</span>)
}


// Button
export function Button({text}) {
    return(<button className={styles.Button}>
        {text}
    </button>)
}
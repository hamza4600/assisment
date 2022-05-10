###  In Next Js 
## Server Side React Frame work  and Css 

# Differnce between Fixed , Absolute , & Staic
all are used to position element on web page 
Static : is the default Value  all elemnts are inorder as they apper

Absolute : we can easily place elment with it any where we want on page Values are always relative to parent , 

Fixed :is  relative to view port   mostaly used for navbar that remain visible all time  


# Differnce between let , const , var ?
var : is oldest way to declear varible before es16 . 
       can be declear without initilization
        can re-declear  and update value 
        it is globall scope

let: can be declear without initilazation  
    value  can be  update but can not be  re-declear 
     it is block scope

const : cannot be declear without initilazation
    value can,t be updated and cannot re-declear
        it is block scope

# What Must be First Pisosrity , why ?
first apporch should be Desktop because we can easily add more featurs and functionalities          
then we should ove to smaller devices   


# Differce betwen alert and alert Dialog ?
AlertDialog : 
 it always want to show a message and at least one Button for user interaction

Alert: 
    it  have a custom view to a TextView or something more complex.

# Differce between Link , generic Button , a submit button ?
Generic Button:
    Mostaly used for triggera function , intersect with js , toggel , open models , 
    have build in features of :hover , :active :disable 

Link :
    used for navigation to new web pages 
    we can also open new window on click 
    have build in features of :hover , :active , :focus

Submit Button:
    mostaly used in forms we verfiy the input field logic from user and post Data to backend     


# How compoment cycle work ? 
There are 4 life cycle of a react componet 
Initilization :  creat a componet 
Mounting : show on DOM
Updating  : upadate Data or State
Unmounting : Remove fom DOM

# Redux
 used to share Data in all pass , Prevent Prop drilling 
 easily share Data accross app 
 a kinh of UI Data base

# Optimization and performace

Used React Hooks for Better performance 
useMemo : for memoizing Heavy functionalties value will only recompute when one of the dependencies has changed 

useCallback :  to memoize our function that we want to pass through the props
# code efficiency
use functional apporach that easy to understand and less complex

# usereducer Hook
 we can pass differnt action on base of action we can have differnt states .
  




import React from 'react'

export default function Header() {
  return (
    <div style={{display:'flex',height:'50px',backgroundColor:'#ccc',fontWeight:'bold',padding:'10px 30px'}}>
        <div style={{display:'flex',justifyContent:'left',width:'50%',verticalAlign:'middle'}}>Header</div>
        <div style={{display:'flex',justifyContent:'right' ,width:'50%',verticalAlign:'middle'}}>Nav</div>
    </div>
  )
}

import React from 'react'

export default function Header() {
  return (
    <div style={{display:'flex',height:'50px',color:'white',background:'#353941',fontWeight:'bold',padding:'10px 30px'}}>
        <div style={{display:'flex',justifyContent:'left',background:'#353941',width:'50%',verticalAlign:'middle'}}>Header</div>
        <div style={{display:'flex',justifyContent:'right',background:'#353941' ,width:'50%',verticalAlign:'middle'}}>Nav</div>
    </div>
  )
}

import React, { useState } from 'react'

export default function UseStateObject() {

  const [pesan, setPesan] = useState({pesan1: "Saya belum belajar ReactJS", pesan2: "Saya belum belajar JavaScript"});

  function updatePesan1() {
    setPesan({...pesan, pesan1: "Saya sudah belajar ReactJS"});
  }

  function updatePesan2() {
    setPesan({...pesan, pesan2: "Saya sudah belajar JavaScript"});
  }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>{pesan.pesan1}</h1>
        <h1 style={{textAlign: 'center'}}>{pesan.pesan2}</h1>
        <div style={{textAlign: 'center'}}>
            <button onClick={updatePesan1}>Update Pesan 1</button>
            <button onClick={updatePesan2}>Update Pesan 2</button>
        </div>
    </div>
  )
}
